"use client";

import * as React from "react";
import { useEffect, useRef } from "react";
import { animate, scroll, spring } from "motion";
import { titles, bgColors } from "@/data";

export function Workflow(): React.JSX.Element {
  const ulRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const container = ulRef.current;
    if (!container) return;

    const items = container.querySelectorAll("li");
    if (items.length === 0) return;

    const sectionEl = container.closest("section");
    if (!sectionEl) return;

    // Horizontal animation of ul
    const controls = animate(
      container,
      { transform: [`translateX(0px)`, `translateX(${calculated}px)`] },
      { easing: spring(), duration: 1 }
    );

    scroll(controls, {
      target: sectionEl,
      axis: "y",
    });

    // Animate each h2 element based on scroll
    const segmentLength = 1 / items.length;
    items.forEach((item, i) => {
      const header = item.querySelector("h2");
      if (header) {
        scroll(animate(header, { x: [800, -800] }), {
          target: sectionEl,
          offset: [
            [i * segmentLength, 1],
            [(i + 1) * segmentLength, 0],
          ],
          axis: "y",
        });
      }
    });
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
              </li>
            ))}
          </ul>
        </section>
      </article>

      <div className="progress fixed bottom-[50px] left-0 right-0 h-2 rounded-full bg-red-600 scale-x-0" />
    </main>
  );
}
