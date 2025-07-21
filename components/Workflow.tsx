// @ts-nocheck
"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { animate, scroll, spring } from "motion";
import { titles, bgColors } from "@/data";

export function Workflow(): JSX.Element {
  const ulRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const items = ulRef.current?.querySelectorAll("li") || [];

    if (ulRef.current && items.length > 0) {
      const controls = animate(
        ulRef.current,
        {
          transform: ["none", `translateX(-${(items.length - 1) * 100}vw)`],
        },
        { easing: spring(), duration: 1 }
      );

      scroll(controls, {
        target: ulRef.current.closest("section")!,
        axis: "y",
      });

      const segmentLength = 1 / items.length;
      items.forEach((item, i) => {
        const header = item.querySelector("h2");
        if (header) {
          scroll(animate(header, { x: [800, -800] }), {
            target: ulRef.current.closest("section")!,
            offset: [
              [i * segmentLength, 1],
              [(i + 1) * segmentLength, 0],
            ],
            axis: "y",
          });
        }
      });
    }
  }, []);

  return (
    <main>
      <article>
        <section className="h-[500vh] relative">
          <ul
            ref={ulRef}
            className="flex sticky top-0 left-0 w-[500vw] h-screen"
          >
            {titles.map((text, idx) => (
              <li
                key={idx}
                className={`h-screen w-screen ${bgColors[idx]} flex flex-col justify-center items-center overflow-hidden`}
              >
                <h2 className="text-[20vw] font-semibold text-black relative z-10">
                  {text}
                </h2>
                {/* <Image
                  src="https://res.cloudinary.com/dzl9yxixg/image/upload/v1713532202/ui-layout/team_gsu8ej.png"
                  className="absolute bottom-0 2xl:w-[550px] w-[380px] z-0"
                  width={500}
                  height={500}
                  alt="Workflow Illustration"
                /> */}
              </li>
            ))}
          </ul>
        </section>
      </article>

      <div className="progress fixed bottom-[50px] left-0 right-0 h-2 rounded-full bg-red-600 scale-x-0" />
    </main>
  );
}
