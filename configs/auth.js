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
        console.log(credentials);
        try {
          const res = await axios.post(
            "http://localhost:3005/api/user/login",
            credentials,
            {
              headers: { "Content-Type": "application/json" },
            }
          );

          const user = await res.data;

          if (user) {
            return user;
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
  pages: {
    signIn: "/",
  },
};
