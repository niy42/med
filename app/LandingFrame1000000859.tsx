import { Button, Heading, Img, Text } from "../components";
import React from "react";

export default function LandingFrame1000000859() {
    return (
        <div className="mt-32 h-[612px] self-stretch bg-[url(/images/img_frame_1000000859.png)] bg-cover bg-no-repeat lg:h-auto md:h-auto">
            <div className="flex flex-col items-center justify-center gap-10 bg-black-900_d8 px-14 py-[92px] lg:py-8 md:p-5 sm:p-4">
                <div className="relative mt-[26px] h-[58px] w-[22%] content-center lg:h-auto md:h-auto">
                    <Text
                        size="text10xl"
                        as="p"
                        className="!font-sfprotext text-[42px] font-semibold capitalize tracking-[-0.84px] !text-black-600 lg:text-[35px] md:text-[26px]"
                    >
                        <span className="text-secondary_color">About Us Medinize</span>
                        <span className="text-blue_gray-900_04">&nbsp;</span>
                    </Text>
                    <Img
                        src="defaultNoData.png"
                        width={152}
                        height={5}
                        alt="Frame 1000000855"
                        className="absolute bottom-[1.01px] right-[13%] m-auto h-[5px] w-[46%] object-contain"
                    />
                </div>
                <Heading
                    size="heading6xl"
                    as="h1"
                    className="w-[52%] text-center !font-sfprotext text-[24px] font-bold leading-[41px] !text-white-a700_cc lg:w-full lg:text-[20px] md:w-full"
                >
                    At Medinize, we believe that everyone should have access to healthcare resources and be able to make informed
                    decisions about their health. Through our user-friendly interface, we aim to bridge the gap between patients
                    and doctors creating a smooth and personalized healthcare experience....
                </Heading>
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
