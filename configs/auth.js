import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

export const authConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLEICLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Credentials({
      credentials: {
        email: { lable: "email", type: "email", required: true },
        password: { lable: "password", type: "password", required: true },
      },
      async authorize(credentials) {
        const users = [
          {
            email: "userAdmin@gmail.com",
            password: "123456",
          },
        ];

        if (!credentials?.email || !credentials.password) {
          return null;
        }
        const currentUser = users?.find(
          (user) => user?.email === credentials?.email
        );

        if (currentUser && currentUser.password === credentials.password) {
          const { password, ...userWithoutPass } = currentUser;

          return userWithoutPass;
        }
      },
    }),
  ],
  pages: {
    signIn: "/admin/login",
  },
};
