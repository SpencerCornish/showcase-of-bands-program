"use client";

import { FC } from "react";
import { Card, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";

export interface SponsorProps {
  name?: string;
  imagePath?: string;
}

export const Sponsor: FC<SponsorProps> = ({
  name,
  imagePath,
}) => {
  return (

    <Card
      isFooterBlurred
      className="w-full h-[200px] col-span-12 sm:col-span-7"
    >
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold" />
      </CardHeader>
      <Image
        removeWrapper
        alt="logo"
        className="z-0 w-full h-full object-stretch"
        src="20Twenty-logo.svg"
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10">
        <div className="flex flex-grow gap-2 items-center">
          <div className="flex flex-col">
            <h4 className="text-white/90 font-medium text-xl">
              20Twenty Eyecare
            </h4>
          </div>
        </div>
        <Button>Visit</Button>
      </CardFooter>
    </Card>


  );
};


{/* <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8"> */}
