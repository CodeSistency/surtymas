// Ref: https://next-auth.js.org/getting-started/typescript#module-augmentation

import { DefaultSession, DefaultUser } from "next-auth"
import { JWT, DefaultJWT } from "next-auth/jwt"

declare module "next-auth" {
    interface Session {
        user: {
            id: string,
            roles: Object,
        } & DefaultSession
    }

    interface User extends DefaultUser {
        role: Object,
    }
}

declare module "next-auth/jwt" {
    interface JWT extends DefaultJWT {
        role: Object,
    }
}