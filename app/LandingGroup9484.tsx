import { Button, Img, Text } from "../components";
import LandingFrame208 from "../components/LandingFrame208";
import React, { Suspense } from "react";

const data = [
    {
        bitmap: "img_bitmap.png",
        agencyIsABusiness: "Clinical Appointment",
        stories:
            "Our convenient and user-friendly platform simplifies the process of booking and managing clinical appointments....",
        p5nov2021: "Read Now",
    },
    {
        bitmap: "img_bitmap_224x370.png",
        agencyIsABusiness: "E-Records",
        stories:
            "With Medinize, users can make informed decisions about their health and feel confident to manage their well-being...",
        p5nov2021: "Read Now",
    },
    {
        bitmap: "img_bitmap_1.png",
        agencyIsABusiness: "Supportive Health Community",
        stories:
            "Medinize fosters a community-driven approach by providing a platform for users to connect with each other, get knowledge.",
        p5nov2021: "Read Now",
    },
];

export default function LandingGroup9484() {
    return (
        <div className="mt-40 flex justify-center self-stretch px-14 md:px-5 sm:px-4">
            <div className="container-2xl flex flex-col items-center gap-8 rounded-[10px] bg-secondary_color p-6 lg:px-5 md:px-5 sm:py-4">
                <div className="mt-2 flex flex-col items-start">
                    <Text
                        size="text10xl"
                        as="p"
                        className="!font-sfprotext text-[42px] font-normal capitalize tracking-[-0.84px] !text-black-600 lg:text-[35px] md:text-[26px]"
                    >
                        <span className="font-semibold text-blue_gray-900_04">Our&nbsp;</span>
                        <span className="font-extrabold text-light_green-900">Services</span>
                    </Text>
                    <Img
                        src="defaultNoData.png"
                        width={258}
                        height={5}
                        alt="Vector"
                        className="relative mt-[-2px] h-[5px] w-[84%] self-end object-contain"
                    />
                </div>
                <div className="flex w-[94%] gap-[72px] md:w-full md:flex-col">
                    <Suspense fallback={<div>Loading feed...</div>}>
                        {data.map((d, index) => (
                            <LandingFrame208 {...d} key={"frame211" + index} className="w-[32%]" />
                        ))}
                    </Suspense>
                </div>
                <Button
                    color="light_green_900"
                    size="11xl"
                    className="min-w-[136px] rounded-[26px] px-[30px] font-sfprotext font-semibold tracking-[0.24px] sm:px-4"
                >
                    See more
                </Button>
            </div>
        </div>
    );
}
