import { quests } from "@/constant";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { Progress } from "./ui/progress";

type Props = {
    points: number;
}

export const Quests = ({ points }: Props) => {
    return(
        <div className="border-2 rounded-xl p-4 space-y-4">
            <div className="flex items-center justify-between w-full space-y-2">
                <h3 className="font-bold text-lg ">
                    Quests
                </h3>
                <Link href="/quest">
                <Button
                  size="sm"
                  variant="primaryOutline"
                >
                    View all
                </Button>
                </Link>
            </div>
            <ul className="w-full spacee-y-4">
                {quests.map((quest) => {

const progress = (points / quest.VALUE ) * 100;

return (
    <div 
      className="flex items-center w-full pb-4 gap-x-3"
      key={quest.title}
      >
        <Image
          src = "/point.svg"
          alt="Points"
          width={40}
          height={40} 
        />
        <div className="flex flex-col gap-y-2 w-full">
            <p className="text-neutral-700 text-sm font-bold">
                {quest.title}
            </p>
            <Progress value={progress} className="h-2" />

        </div>
    </div>
)
                })}

            </ul>
           
        </div>
    );
};