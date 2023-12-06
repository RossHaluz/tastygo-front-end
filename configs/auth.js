import axios from "axios";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLEICLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Your email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        console.log("credentials", credentials);
        try {
          const res = await axios.post(
            "https://tastygo.onrender.com/api/user/login",
            credentials,
            {
              headers: { "Content-Type": "application/json" },
            }
          );

          const user = await res.data;

          if (user) {
            return {
              id: user._id,
              name: user.name,
              email: user.email,
              lastName: user.lastName || "",
              image: user.image || "",
              number: user.number,
            };
          }
        } catch (error) {
          console.error("Authorization error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    // async signIn({ user, account, profile }) {
    //   if (account?.provider === "google") {
    //     try {
    //       // Check if the Google user is found in your database
    //       const res = await axios.post(
    //         "http://localhost:3005/api/user/login-google",
    //         user
    //       );
    //       const serverUser = res.data;
    //       console.log("Server User", serverUser);
    //       if (serverUser) {
    //         const mappedUser = {
    //           id: serverUser._id,
    //           name: serverUser.name,
    //           lastName: serverUser.lastName || "",
    //           email: serverUser.email,
    //           image: serverUser.image || "",
    //         };
    //         return mappedUser;
    //       }
    //     } catch (error) {
    //       console.error("Error during Google sign-in:", error);
    //     }
    //   }
    //   return null;
    // },

    async jwt({ token, user, trigger, session }) {
      if (trigger === "update") {
        return { ...token, ...session.user };
      }
      if (user && user.id) {
        token = {
          ...token,
          ...user,
        };
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },

  pages: {
    signIn: "/", // Your custom sign-in page URL
  },
  session: {
    jwt: true,
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
};
