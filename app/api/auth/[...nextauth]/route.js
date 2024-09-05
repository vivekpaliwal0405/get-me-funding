import NextAuth from 'next-auth'

import GoogleProvider from 'next-auth/providers/google'


export const authoption = NextAuth ({
  providers: [
    
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
   
 
  ]
})
export {authoption as GET , authoption as POST}