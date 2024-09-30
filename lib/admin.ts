import { auth } from "@clerk/nextjs/server";

const adminids = [
    "user_2jx93xmI4Bt7TT35YAVz9TFQWET",
    
];

export const isAdmin = () => {  
    const { userId } =  auth();

    if (!userId) {
        return false;
    }

    return adminids.indexOf(userId) !== -1;
}