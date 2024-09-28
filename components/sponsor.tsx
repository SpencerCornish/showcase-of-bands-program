"use client";

import { FC } from "react";
import { Card, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { LinkIcon } from "./icons";

export interface SponsorProps {
  name?: string;
  imagePath?: string;
  sponsorLink?: string;
}

export const Sponsor: FC<SponsorProps> = ({ name, imagePath, sponsorLink }) => {
  return (
    <Card
      isPressable
      className="mt-5 w-[350px] h-[200px] col-span-12 sm:col-span-7"
      shadow="md"
      onPress={() => {
        if (window != null) {
          window?.open(sponsorLink, "_blank")?.focus();
        }
      }}
    >
      <CardHeader className="absolute z-10 top-0.5">
        <div className="flex flex-grow gap-2 items-center"> 
          <div className="flex flex-col"/>
        </div>
        <LinkIcon />
      </CardHeader>
      <Image
        removeWrapper
        alt="logo"
        className="z-0 w-full h-full object-stretch"
        src={imagePath}
      />
    </Card>
  );
};
