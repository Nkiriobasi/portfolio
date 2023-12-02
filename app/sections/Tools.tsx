import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import {
    SiAdobeaftereffects, SiAdobeillustrator,
    SiAdobephotoshop, SiExpress, SiFigma, 
    SiFirebase, SiGit, SiGithub, SiGooglechrome, 
    SiGooglefonts, SiJavascript, SiMongodb,
    SiNextdotjs, SiNodedotjs, SiNpm, SiPostgresql, 
    SiReact, SiRedux, SiTailwindcss, SiTypescript
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import AnimatedTools from "../animations/AnimatedTools.tsx";

const Tools = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-[80px] sm:pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="tools"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"TOOLS I USE."}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="mx-auto w-[100%] lg:max-w-[1200px] justify-center">
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.1} text="Design" />
                        <>
                            <AnimatedTools className="grid grid-cols-5 gap-x-4 gap-y-4 sm:gap-y-8" delay={0.1} stepSize={0.1} iconSize={50}>
                                <SiAdobephotoshop className='w-[35px] sm:w-[50px] h-[35px] sm:h-[50px]' />
                                <SiAdobeaftereffects className='w-[35px] sm:w-[50px] h-[35px] sm:h-[50px]' />
                                <SiFigma className='w-[35px] sm:w-[50px] h-[35px] sm:h-[50px]' />
                                <SiAdobeillustrator className='w-[35px] sm:w-[50px] h-[35px] sm:h-[50px]' />
                                <SiGooglefonts className='w-[35px] sm:w-[50px] h-[35px] sm:h-[50px]' />
                            </AnimatedTools>
                        </>
                    </div>
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.2} text="Frontend" />
                        <>
                            <AnimatedTools className="grid grid-cols-5 gap-x-4 gap-y-4 sm:gap-y-8" delay={0.2} stepSize={0.1} iconSize={50}>
                                <SiJavascript className='w-[35px] sm:w-[50px] h-[35px] sm:h-[50px]' />
                                <SiTailwindcss className='w-[35px] sm:w-[50px] h-[35px] sm:h-[50px]' />
                                <SiReact className='w-[35px] sm:w-[50px] h-[35px] sm:h-[50px]' />
                                <SiRedux className='w-[35px] sm:w-[50px] h-[35px] sm:h-[50px]' />
                                <SiNextdotjs className='w-[35px] sm:w-[50px] h-[35px] sm:h-[50px]' />
                                <SiTypescript className='w-[35px] sm:w-[50px] h-[35px] sm:h-[50px]' />
                            </AnimatedTools>
                        </>
                    </div>
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.3} text="Backend" />
                        <>
                            <AnimatedTools className="grid grid-cols-5 gap-x-4 gap-y-4 sm:gap-y-8" delay={0.3} stepSize={0.1} iconSize={50}>
                                <SiNodedotjs className='w-[35px] sm:w-[50px] h-[35px] sm:h-[50px]' />
                                <SiExpress className='w-[35px] sm:w-[50px] h-[35px] sm:h-[50px]' />
                                <SiPostgresql className='w-[35px] sm:w-[50px] h-[35px] sm:h-[50px]' />
                                <SiFirebase className='w-[35px] sm:w-[50px] h-[35px] sm:h-[50px]' />
                                <SiMongodb className='w-[35px] sm:w-[50px] h-[35px] sm:h-[50px]' />
                            </AnimatedTools>
                        </>
                    </div>
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.4} text="Other" />
                        <>
                            <AnimatedTools className="grid grid-cols-5 gap-x-4 gap-y-4 sm:gap-y-8" delay={0.4} stepSize={0.1} iconSize={50}>
                                <SiGithub className='w-[35px] sm:w-[50px] h-[35px] sm:h-[50px]' />
                                <SiGit className='w-[35px] sm:w-[50px] h-[35px] sm:h-[50px]' />
                                <TbBrandVscode className='w-[35px] sm:w-[50px] h-[35px] sm:h-[50px]' />
                                <SiGooglechrome className='w-[35px] sm:w-[50px] h-[35px] sm:h-[50px]' />
                                <SiNpm className='w-[35px] sm:w-[50px] h-[35px] sm:h-[50px]' />
                            </AnimatedTools>
                        </>
                    </div>
                </div>




            </div>
        </section>
    );
};

export default Tools;
