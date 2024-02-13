import { createEnv } from "@t3-oss/env-nextjs";
import {z} from "zod"

export const env = createEnv({
    server : {
        GITHUB_ID :  z.string().min(1),
        GITHUB_SECRET : z.string().min(1)
    },
    client:{},
    runtimeEnv: {
        GITHUB_ID: process.env.GITHUB_ID,
        GITHUB_SECRET: process.env.GITHUB_SECRET

    },
});



//for authentification   you need 


//pnpm install prisma --save-dev
//pnpx  prisma init --datasource-provider sqlite 
//pnpm i @t3-oss/env-nextjs
//pnpm install next-auth @next-auth/prisma-adapter