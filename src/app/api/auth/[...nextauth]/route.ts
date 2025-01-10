import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "johndoe@gmail.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (credentials?.email === "admin@gmail.com" && credentials?.password === "admin") {
                    return { id: "1", name: "Admin", email: "admin@gmail.com" }
                }
                return null
            }
        })
    ],
    pages: {
        signIn: '/login',
    },
    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        session: async ({ session, token }: { session: Session; token: JWT }) => {
            if (session.user) {
                session.user.id = token.id as string;
            }
            return session;
        }
    }
});

export { handler as GET, handler as POST }; 