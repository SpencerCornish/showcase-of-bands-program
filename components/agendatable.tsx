import { Accordion, AccordionItem } from "@nextui-org/accordion";

import { subtitle } from "./primitives";

import { siteConfig } from "@/config/site";

export const AgendaTable = () => {
  return (
    <Accordion variant="splitted">
      {siteConfig.bands.map((item) => {
        return (
          <AccordionItem
            key={siteConfig.bands.indexOf(item)}
            aria-label={item.name}
            className="mt-4"
            subtitle={item.name}
            title={item.showName}
          >
            <div className="m-2">
              <p className={subtitle()}>{item.schoolName}</p>
              <div className="ml-2">
                {item.director != "" ? (
                  <p>
                    Directed By <strong>{item.director}</strong>
                  </p>
                ) : (
                  <p />
                )}
                {item.drumMajors.length != 0 ? (
                  <p>
                    Drum Major{item.drumMajors.length == 1 ? "" : "s"}{" "}
                    <strong>{item.drumMajors.join(" and ")}</strong>
                  </p>
                ) : (
                  <p />
                )}
              </div>
            </div>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};
