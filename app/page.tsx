import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Sponsor } from "@/components/sponsor";

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



      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Special thanks to our Sponsors:
          </span>
        </Snippet>

        <Sponsor></Sponsor>
      </div>
    </section>
  );
}
