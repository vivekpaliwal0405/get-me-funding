import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import mongoose from "mongoose";
import User from '@/models/User'
import Payment from '@/models/Payment'
import connectDb from "@/db/connectDb";



export const authoption = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],


    callbacks: {
      async signIn({ user, account, profile, email, credentials }) {
        if (account.provider == "google") {
          // Check if the email exists
          const userEmail = user.email || email;
          if (!userEmail) {
            console.error("No email found in Google profile");
            return false; // Fails the sign-in if no email is found
          }
    
          // Connect to the database
          await connectDb();
          // Check if user exists
          const currentUser = await User.findOne({ email: userEmail });
          if (!currentUser) {
            // Create a new user
            const newUser = new User({
              email: userEmail,
              username: userEmail.split("@")[0], // Split based on email
            });
          
          } 
          console.log("User details:", user);
          return true;
        }
      },
    },

    async session({ session, user, token }) {
      const dbUser = await User.findOne({email: session.user.email})
      session.user.name = dbUser.username;
      return session
    },
    
  },
);
export { authoption as GET, authoption as POST };

