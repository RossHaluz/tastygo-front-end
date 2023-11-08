import GoogleProvider from 'next-auth/providers/google'; 

export const authConfig = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLEICLIENT_ID, 
            clientSecret: process.env.GOOGLE_SECRET
        })
    ]
}
