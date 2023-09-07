import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);

// This exports the authentication handler, which you can use for GET and POST requests
export const handler = NextAuth(authOptions);

// If you want to explicitly export for GET and POST requests, you can do it like this
export { handler as GET, handler as POST };
