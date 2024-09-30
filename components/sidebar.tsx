import { cn } from "@/lib/utils";
import Image from "next/image";
import { SidebarItem } from "./sidebar-item";
import Link from "next/link";
import {
    ClerkLoading,
    ClerkLoaded,
    UserButton,
}  from "@clerk/nextjs";
import { Loader } from "lucide-react";




type Props = {
    className?: string;
};

export const Sidebar = ({ className }: Props) => {
    return (
        <div className={cn(
            "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
            className,
        )}>
            <Link href="/learn">
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                    <Image src="/logo.svg" height={40} width={40} alt="Logo" />
                    <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
                        Bingo
                    </h1>

                </div>
            </Link>
            <div className="flex flex-col gap-y-2 flex-1">

                <SidebarItem
                    label="Learn"
                    href="/learn"
                    iconSrc="learn.svg" />

                <SidebarItem
                    label="Leaderboard"
                    href="/leaderboard"
                    iconSrc="leader.svg" />

                <SidebarItem
                    label="Quest"
                    href="/quest"
                    iconSrc="quest.svg" />

                <SidebarItem
                    label="shops"
                    href="/shop"
                    iconSrc="shops.svg" />




            </div>
            <div className="p-4" >
                <ClerkLoading>
                    <Loader className="h-5 w-5 text-muted-foreground animate-spin">
                    </Loader>

                </ClerkLoading>
                <ClerkLoaded>
                    <UserButton />
                </ClerkLoaded>


            </div>
                
                
            
        </div>
    );
};