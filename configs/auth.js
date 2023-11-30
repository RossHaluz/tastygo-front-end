import axios from "axios";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Your email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
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
              name: user.firstName,
              email: user.email,
              image: user.image || "",
              number: user.number,
            };
          } else {
            throw new Error("Invalid response from server");
          }
        } catch (error) {
          console.error("Authorization error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
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
    signIn: "/",
  },
  session: {
    jwt: true,
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
};
