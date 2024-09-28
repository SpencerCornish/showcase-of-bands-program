"use client";

import { Button } from "@nextui-org/button";

import { title, subtitle } from "@/components/primitives";
import { Sponsor } from "@/components/sponsor";
import { AgendaTable } from "@/components/agendatable";

const scrolltoHash = function (element_id: string) {
  const element = document.getElementById(element_id);

  element?.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
};

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Welcome to</span>
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title({ color: "blue" })}>Showcase of Bands</span>
          <div className={subtitle({ class: "mt-4" })}>
            <p>September 28th 2024</p>
            <p>Montana State University</p>
          </div>
        </div>
      </div>
      <br />

      <div className="flex gap-4 items-center">
        <Button color="primary" onClick={() => scrolltoHash("sponsors")}>
          Sponsors
        </Button>
        <Button color="primary" onClick={() => scrolltoHash("programAgenda")}>
          Schedule of Events
        </Button>
      </div>

      <div className="mt-8" id="sponsors">
        <span className={subtitle()}>Special thanks to our Sponsors:</span>
        <Sponsor
          imagePath="/sponsors/doortech.webp"
          name="Door Tech"
          sponsorLink="https://www.doortechmt.com/"
        />
        <Sponsor
          imagePath="/sponsors/20Twenty-logo.svg"
          name="20Twenty Eyecare"
          sponsorLink="https://20twentymt.com/"
        />
        <Sponsor
          imagePath="/sponsors/rosas.webp"
          name="Rosa's Pizza"
          sponsorLink="https://www.rosaspizza.com/"
        />
        <Sponsor
          imagePath="/sponsors/eclipsel.webp"
          name="Eclipse Landscaping"
          sponsorLink="https://eclipsebozeman.com/"
        />
        <Sponsor
          imagePath="/sponsors/TnC.webp"
          name="Town & Country Foods"
          sponsorLink="https://www.tncfoods.com/"
        />
      </div>

      <div className="mt-8" id="programAgenda">
        <span className={title()}>Agenda</span>
        <AgendaTable />
      </div>
    </section>
  );
}
