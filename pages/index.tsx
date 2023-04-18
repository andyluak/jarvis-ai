/* eslint-disable react/no-unescaped-entities */
import content from "@/content/homepage.json";
import { HomepageContent, Perk } from "@/types";
import Image from "next/image";

import { Blob } from "@/components/Icons";
import Navbar from "@/components/Navbar";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyP,
  TypographySubtle,
} from "@/components/Typography";

export default function Home({ content }: HomepageContent) {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between gap-8 text-center md:gap-16 md:text-left">
        <section className="p-full flex flex-col-reverse items-center gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative basis-2/3 space-y-4">
            <TypographyH1>{content.hero.title}</TypographyH1>
            <TypographyP className="max-w-lg">
              {content.hero.subtitle}
            </TypographyP>
            <Blob
              className="absolute inset-0 
            -top-20 left-0 -z-10 opacity-60"
            />
          </div>
          <div className="relative h-72 w-72 md:h-[400px] md:w-[400px]">
            <Image src={content.hero.image} fill alt="jarvis hero image" />
          </div>
        </section>
        <section className="p-full flex flex-col-reverse items-center gap-4 bg-slate-100 md:flex-row md:items-center md:justify-between">
          <div className="relative h-72 w-72 md:h-[500px] md:w-[600px]">
            <Image src={content.perks.image} fill alt="jarvis hero image" />
          </div>
          <div className="relative basis-2/3 space-y-4">
            <TypographyH2 className="border-0">
              {content.perks.title}
            </TypographyH2>
            <TypographyP>{content.perks.subtitle}</TypographyP>
            <div className="flex flex-col gap-4">
              {content.perks.perks.map((perk: Perk) => (
                <div key={perk.title} className="flex flex-col gap-2">
                  <TypographyH3 className="mt-0">{perk.title}</TypographyH3>
                  <TypographySubtle className="text-slate-500">
                    {perk.description}
                  </TypographySubtle>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="p-full -mt-8 flex w-full flex-col items-center gap-4 bg-pink-200 text-center md:-mt-16">
          <TypographyH2 className="border-0">{content.CTA.text}</TypographyH2>
          <button
            className="rounded-md bg-pink-700 px-10 py-3 text-lg text-slate-100/90"
            type="button"
          >
            {content.CTA.button}
          </button>
        </section>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      content,
    },
  };
}
