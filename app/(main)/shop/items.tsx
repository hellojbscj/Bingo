"use client";

import { refillHearts } from "@/actions/user-progress";
import { createStripeUrl } from "@/actions/user-subscription";
import { Button } from "@/components/ui/button";
import { points_to_refill } from "@/constant";
import Image from "next/image";
import { useTransition } from "react";
import { toast } from "sonner";



type Props = {
    hearts: number;
    points: number;
    hasActiveSubscription: boolean;
};

export const Items = ({
    hearts,
    points,
    hasActiveSubscription,
}: Props) => {
    const [pending, startTransition] = useTransition();

    const onRefillhearts = () => {
        if (pending || hearts === 5 || points < points_to_refill) {
            return;
        }

        startTransition(() => {
            refillHearts()
            .catch( () => toast.error("Something went wrong"));

        });
    };

    const onUpgrade = () => {
        startTransition(() => {
            createStripeUrl()
              .then((response) => {
                if (response.data) {
                 window.location.href = response.data;
                }
              })
              .catch(() => toast.error("Something went wrong"));
        });
    };

    return (
        <ul className="w-full">
            <div className="flex items-center w-full p-4 gap-x-4 border-t-2">
                <Image
                  src = "/heart.svg"
                  alt="heart"
                  height={60}
                  width={60}
                  />
                  <div className="flex-1">
                    <p className="text-neutral-700 text-base lg:text-xl font-bold">
                        Refill Hearts
                    </p>
                  </div>
                  <Button 
                  onClick={onRefillhearts}
                   disabled = { hearts === 5 || points < points_to_refill || pending} >
                    {hearts === 5 ? "full"
                    : (
                        <div className="flex items-center">
                            <Image
                              src = "/point.svg"
                              alt="Points"
                              height={20}
                              width={20}
                            />
                            <p>
                                {points_to_refill}
                            </p>

                        </div>
                    )}
                  </Button>
            </div>
            <div className="flex items-center w-full p-4 pt-8 gap-x-4 border-t-2">
                <Image 
                  src="/premium.svg"
                  alt="Premium"
                  height={60}
                  width={60}
                />
                <div className="flex-1">
                    <p className="text-neutral-700 text-base lg:text-xl font-bold">
                        Unlimited Hearts
                    </p>
                </div>
                <Button
                onClick={onUpgrade}
                 disabled = {pending }
                 >
                    {hasActiveSubscription ? "settings" : "upgrade"}
                </Button>
            </div>

        </ul>
    )
}