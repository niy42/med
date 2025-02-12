import React, { Suspense, useEffect, useRef } from "react";
import { Img, Text } from "../components";
import LandingComponent8 from "../components/LandingComponent8";

const data = [
    {
        description: (
            <>
                Secure and Confidential{" "}
            </>
        ),
        description1:
            "Medinize priorities the security and confidentiality of users’ employing advance encryption protocols.",
        alt: "secure and confidential",
        pics: "padlock.png"
    },
    {
        description: (
            <>
                Seamless Communication{" "}
            </>
        ),
        description1:
            "With our Secure payment process, patients can confidently pay for various clinical services.",
        alt: "Seamless Communication",
        pics: "confidential.png"
    },
    {
        description: (
            <>
                Secure Payment Processing{" "}
            </>
        ),
        description1:
            "With our Secure payment process, patients can confidently pay for various clinical services.",
        alt: "secure payment processing",
        pics: "wallet.png"
    },
    {
        description: (
            <>
                Enhanced Accessibility{" "}
            </>
        ),
        description1:
            "Medinize's 24/7 availability ensures that patients can connect with their doctors at anytime.",
        alt: "enhanced accessibility",
        pics: "accessibility.png"
    },
];

export default function LandingGroup9128() {
    const textRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        if (textRef.current) {
            // Reset animation on mount
            textRef.current.style.animation = 'none';
            requestAnimationFrame(() => {
                if (textRef.current) {
                    textRef.current.style.animation = '';
                }
            });
        }
    }, []);
    return (
        <div className="mt-[60px] flex flex-col items-center gap-[54px] self-stretch px-14 md:px-5 sm:gap-[27px] sm:px-4">
            <div className="relative h-[58px] w-[28%]">
                <Text
                    size="text10xl"
                    as="p"
                    className="absolute inset-0 flex text-nowrap m-auto
             font-sfprotext text-[42px] font-normal 
             capitalize tracking-[-0.84px] lg:text-[35px] md:text-[26px] 
             text-gray-800 leading-relaxed w-full text-center"
                >
                    <span className="font-semibold text-blue_gray-900_04">Why choose&nbsp;</span>
                    <span className="font-extrabold text-light_green-900">Medinize</span>
                </Text>
            </div>
            <div data-aos="fade-up" className="mx-auto px-14 md:px-32 flex flex-col w-full min-w-[1366px] gap-8 md:flex-row">
                <Suspense fallback={<div>Loading feed...</div>}>
                    {data.map((d, index) => (
                        <LandingComponent8 {...d} key={"frame" + index} />
                    ))}
                </Suspense>
            </div>
        </div>
    );
}
