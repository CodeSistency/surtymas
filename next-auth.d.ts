// Ref: https://next-auth.js.org/getting-started/typescript#module-augmentation

import { DefaultSession, DefaultUser } from "next-auth"
import { JWT, DefaultJWT } from "next-auth/jwt"

declare module "next-auth" {
    interface Session {
        user: {
            id: string,
            roles: Object,
            username: string,
        } & DefaultSession
    }

    interface User extends DefaultUser {
        roles: Object,
        username: string,
    }
}

declare module "next-auth/jwt" {
    interface JWT extends DefaultJWT {
        role: Object,
    }
}