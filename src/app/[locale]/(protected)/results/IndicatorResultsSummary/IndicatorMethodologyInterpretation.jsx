import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { TextBody2 } from "@/components/ui/typography";

export const IndicatorMethodologyInterpretationResultsView = () => {
  return (
    <Tabs defaultValue="Méthodologie" className={"gap-[28px]"}>
      <TabsList variant="line" className={"gap-0 p-0"}>
        <TabsTrigger
          className="after:h-[0.5px] data-[state=active]:after:h-[0.5px] bg-transparent  after:bg-(--color-border-disabled) after:opacity-100 data-[state=active]:after:bg-(--color-border-neutral-primary) rounded-none data-[state=active]:bg-transparent 
          data-[state=active]:text-(--color-text-neutral-primary) text-(--color-text-disabled)"
          value="Méthodologie"
        >
          <TextBody2>Méthodologie</TextBody2>
        </TabsTrigger>
        <TabsTrigger
          className="after:h-[0.5px] data-[state=active]:after:h-[0.5px] bg-transparent  after:bg-(--color-border-disabled) after:opacity-50 data-[state=active]:after:bg-(--color-border-neutral-primary) rounded-none data-[state=active]:bg-transparent 
          data-[state=active]:text-(--color-text-neutral-primary) text-(--color-text-disabled)"
          value="Interprétation des résultats"
        >
          <TextBody2> Interprétation des résultats</TextBody2>
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value="Méthodologie"
        className={" p-(--scale-500) grid grid-cols-2 gap-6 min-h-[210px]"}
      >
        <p className="t-body-3 text-(--color-text-neutral-primary)">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam. he standard Lorem Ipsum passage, used since the 1500s.
          <br />
          <br />
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className="t-body-3 text-(--color-text-neutral-primary)">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi.
        </p>
      </TabsContent>
      <TabsContent
        value="Interprétation des résultats"
        className={" p-(--scale-500) grid grid-cols-2 gap-6 min-h-[210px]"}
      >
        <p className="t-body-3 text-(--color-text-neutral-primary)">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam. he standard Lorem Ipsum passage, used since the 1500s.
          <br />
          <br />
        </p>
        <p className="t-body-3 text-(--color-text-neutral-primary)">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi.
        </p>
      </TabsContent>
    </Tabs>
  );
};
