import { ProjectProps } from "./projectDetails";
import Link from "next/link";
import Image from "next/image";
import AnimatedTitle from "../../animations/AnimatedTitle";
import AnimatedBody from "../../animations/AnimatedBody";
import { motion } from "framer-motion";
import Container from "../container/Container";
import React from "react";
import {SiGithub} from "react-icons/si";
import {BsLink45Deg} from "react-icons/bs";
const ProjectCard = ({
    id,
    name,
    description,
    technologies,
    techNames,
    techLinks,
    github,
    demo,
    image,
    available,
}: ProjectProps) => {
    return (
        <motion.div
            className={`relative bg-cover bg-no-repeat bg-center z-10 h-[380px] 
                w-full items-stretch justify-center py-0 sm:h-[430px] lg:h-[500px]`
            }
            initial="initial"
            animate="animate"
        >
            <Container
                width="100%"
                height="100%"
                borderRadius={25}
                color="rgba(255, 255, 255, 0.1)"
                blur={false}
                grain={true}
                top="0"
                left="0"
                right="0"
                angle={0}
            >
                <Image
                    src={image}
                    alt={name}
                    width={500}
                    height={500}
                    className={`lg:block hidden absolute bottom-0 w-[55%] right-0`}
                    priority={true}
                />
                <div
                    className={`absolute top-0 text-[#0E1016] left-0 ml-5 sm:ml-10 lg:ml-14
                        mt-6 flex items-center justify-center gap-4 lg:mt-10`
                    }
                >
                    {available ? (
                        <>
                            <Link
                                href={github}
                                target="_blank"
                                aria-label="Open GitHub Repository"
                                className={`rounded-full bg-white flex items-center justify-center text-[24px] 
                                    md:text-[28px] md:w-[65px] w-[45px] md:h-[65px] h-[45px]`
                                }
                                data-blobity
                                data-blobity-radius="35"
                                data-blobity-offset-x="4"
                                data-blobity-offset-y="4"
                                data-blobity-magnetic="false">
                                <SiGithub/>
                            </Link>
                            <Link
                                href={demo}
                                target="_blank"
                                aria-label="Open Live Demo"
                                className={`rounded-full bg-white flex items-center justify-center text-[24px] 
                                    md:text-[28px] md:w-[65px] w-[45px] md:h-[65px] h-[45px]`
                                }
                                data-blobity
                                data-blobity-radius="35"
                                data-blobity-offset-x="4"
                                data-blobity-offset-y="4"
                                data-blobity-magnetic="false">
                                <BsLink45Deg/>
                            </Link>
                        </>
                    ) : (
                        <></>
                    )}
                </div>
                <div
                    className={`absolute text-white left-5 sm:left-10 top-32 ml-0 
                        lg:mr-12 lg:top-44 lg:ml-4 mb-0 lg:mb-14`
                    }
                >
                    <AnimatedTitle
                        text={name}
                        className={`max-w-[90%] text-[24px] sm:text-[40px] leading-none text-white 
                            md:text-[44px] md:leading-none lg:max-w-[450px] lg:text-[48px] lg:leading-none`
                        }
                        wordSpace={"mr-[0.25em]"}
                        charSpace={"-mr-[0.01em]"}
                    />
                    <AnimatedBody
                        text={description}
                        className={
                            "mt-4 w-[90%] max-w-[457px] text-[16px] font-semibold text-[#95979D] "
                        }
                    />
                    <div className="mt-9 mb-9 grid grid-cols-5 gap-5">
                        {technologies.map((IconComponent, id) => (
                            <div key={id} className={"relative"}>
                                <Link
                                    href={techLinks[id]}
                                    target="_blank"
                                    aria-label={`Learn more about ${techNames[id]}`}
                                    className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                    title={techLinks[id]}
                                    data-blobity-tooltip={techNames[id]}
                                    data-blobity-magnetic="false"
                                >
                                    <IconComponent/>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </motion.div>
    );
};

export default ProjectCard;
