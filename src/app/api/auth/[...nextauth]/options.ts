import type { NextAuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import { GithubProfile } from 'next-auth/providers/github'
import db from "@/db/db";
import bcrypt from 'bcrypt'
import User from '@/models/User'


interface Credentials {
    username: string;
    password: string;
}

export const options: NextAuthOptions = {
    providers: [
       
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "your-cool-username"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "your-awesome-password"
                }
            },
            async authorize(credentials) {
                // This is where you need to retrieve user data 
                let { username, password } = credentials as {
                    username: string;
                    password: string;
                  };

                await db.connect()
                                
                let user = await User.findOne({ username })
                // user = await User.create({ username, password });
                // console.log(`new user: ${JSON.stringify(user)}, ${username} ${password}`)

                if(!user){
                    console.log('user not found')

                    try {
                        const hashedPwd = await bcrypt.hash(password, 10);
                    password = hashedPwd;
                    console.log(`new password: ${hashedPwd}`)

                    user = await User.create({ username, password: hashedPwd });
                    console.log(`User created, but not saved: ${JSON.stringify(user)}`);
                

                    //save user
                    await user.save();

                    console.log(`New user: ${JSON.stringify(user)}`);
                    return user; // Return the user object
                    
                    } catch (error) {
                        console.log(error)
                    }

                    // throw new Error("Invalid input")
                    
                }

                console.log('datos user', user)

                const comparePass = await bcrypt.compare(password, user.password) 

                if(!comparePass){
                    throw new Error("Invalid input")
                }
                // to verify with credentials
                // Docs: https://next-auth.js.org/configuration/providers/credentials
                // const user = { id: "42", name: "Dave", password: "nextauth", role: "manager" }

                if (credentials?.username === user?.username && comparePass) {
                    return user
                } else {
                    return null
                }
            }
        })
    ],
    callbacks: {
        // Ref: https://authjs.dev/guides/basics/role-based-access-control#persisting-the-role
        async jwt({ token, user }) {
            // if (user) token.role = user.roles
            if (user) {
                token.role = user.roles
                token.name = user.username
                
                
            }
            // if (user) token.user = user
            console.log(token)
            return token
        },
        // If you want to use the role in client components
        async session({ session, token }) {
            if (session?.user) session.user.roles = token.role
            // if (session?.user) session.user = token.user
            console.log(session)
            return session
        },
    },
    // pages: {
    //     signIn: '/auth/signIn',
    //     signOut: '/auth/signout',
    //     error: '/auth/error', // Error code passed in query string as ?error=
    //     verifyRequest: '/auth/verify-request', // (used for check email message)
    //     newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
    //   }
}