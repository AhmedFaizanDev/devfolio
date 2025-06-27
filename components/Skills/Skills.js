/* eslint-disable @next/next/no-img-element */
import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MENULINKS, SKILLS } from "../../constants";

const Skills = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({ defaults: { ease: "none" } })
        .from(
          sectionRef.current.querySelectorAll(".staggered-reveal"),
          { opacity: 0, duration: 0.5, stagger: 0.5 },
          "<"
        );

      ScrollTrigger.create({
        trigger: sectionRef.current.querySelector(".skills-wrapper"),
        start: "100px bottom",
        end: "center center",
        scrub: 0,
        animation: tl,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[1].ref}
      className="w-full relative select-none mt-44"
    >
      <div className="section-container py-16 flex flex-col justify-center">
        <img
          src="/right-pattern.svg"
          alt=""
          className="absolute hidden right-0 bottom-2/4 w-2/12 max-w-xs md:block"
          loading="lazy"
          height={700}
          width={320}
        />
        <div className="flex flex-col skills-wrapper">
          <div className="flex flex-col">
            <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal">
              SKILLS
            </p>
            <h1 className="text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
              My Skills
            </h1>
            <h2 className="text-[1.65rem] font-medium md:max-w-lg w-full mt-2 staggered-reveal">
            I build backend systems, automation workflows, and AI-powered solutions.{" "}
            </h2>
          </div>
          {/* Languages */}
          {Array.isArray(SKILLS.languages) && (
            <div className="mt-10">
              <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 staggered-reveal">
                LANGUAGES
              </h3>
              <div className="flex items-center flex-wrap gap-6 staggered-reveal">
                {SKILLS.languages.map((skill) => (
                  <Image
                    key={skill}
                    src={`/skills/${skill.toLowerCase().replace(/\s|\(|\)/g, "")}.svg`}
                    alt={skill}
                    width={50}
                    height={50}
                  />
                ))}
              </div>
            </div>
          )}
          {/* Developer Tools */}
          {Array.isArray(SKILLS.developerTools) && (
            <div className="mt-10">
              <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 staggered-reveal">
                DEVELOPER TOOLS
              </h3>
              <div className="flex items-center flex-wrap gap-6 staggered-reveal">
                {SKILLS.developerTools.map((skill) => (
                  <Image
                    key={skill}
                    src={`/skills/${skill.toLowerCase().replace(/\s|\(|\)/g, "")}.svg`}
                    alt={skill}
                    width={50}
                    height={50}
                  />
                ))}
              </div>
            </div>
          )}
          {/* Frameworks and Libraries */}
          {Array.isArray(SKILLS.frameworksAndLibraries) && (
            <div className="mt-10">
              <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 staggered-reveal">
                FRAMEWORKS & LIBRARIES
              </h3>
              <div className="flex items-center flex-wrap gap-6 staggered-reveal">
                {SKILLS.frameworksAndLibraries.map((skill) => (
                  <Image
                    key={skill}
                    src={`/skills/${skill.toLowerCase().replace(/\s|\(|\)/g, "")}.svg`}
                    alt={skill}
                    width={50}
                    height={50}
                  />
                ))}
              </div>
            </div>
          )}
          {/* Databases */}
          {Array.isArray(SKILLS.databases) && (
            <div className="mt-10">
              <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 staggered-reveal">
                DATABASES
              </h3>
              <div className="flex items-center flex-wrap gap-6 staggered-reveal">
                {SKILLS.databases.map((skill) => (
                  <Image
                    key={skill}
                    src={`/skills/${skill.toLowerCase().replace(/\s|\(|\)/g, "")}.svg`}
                    alt={skill}
                    width={50}
                    height={50}
                  />
                ))}
              </div>
            </div>
          )}
          {/* Tools and Platforms */}
          {Array.isArray(SKILLS.toolsAndPlatforms) && (
            <div className="mt-10">
              <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 staggered-reveal">
                TOOLS & PLATFORMS
              </h3>
              <div className="flex items-center flex-wrap gap-6 staggered-reveal">
                {SKILLS.toolsAndPlatforms.map((skill) => (
                  <Image
                    key={skill}
                    src={`/skills/${skill.toLowerCase().replace(/\s|\(|\)/g, "")}.svg`}
                    alt={skill}
                    width={50}
                    height={50}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
