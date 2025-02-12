import { Img, Text } from "../components";
import SettingsSignUpColumn from "../components/SettingsSignUpColumn";
import React, { Suspense } from "react";

const data = [
    {
        signUpLink: "Sign Up",
        signUpDescription:
            "Sign up to access Lorem ipsum dolor sit amet consectetur. Convallis cras placerat dignissim aliquam massa.",
    },
    {
        signUpLink: "Book an Appointment",
        signUpDescription:
            "Sign up to access Lorem ipsum dolor sit amet consectetur. Convallis cras placerat dignissim aliquam massa.",
    },
    {
        signUpLink: "Have a Virtual Consultation",
        signUpDescription:
            "Sign up to access Lorem ipsum dolor sit amet consectetur. Convallis cras placerat dignissim aliquam massa.",
    },
    {
        signUpLink: "Visit the Community",
        signUpDescription:
            "Sign up to access Lorem ipsum dolor sit amet consectetur. Convallis cras placerat dignissim aliquam massa.",
    },
];

export default function LandingGroup9131() {
    return (
        <div className="mt-[110px] flex justify-center self-stretch px-14 md:px-5 sm:px-4">
            <div className="mx-auto flex w-full max-w-[1458px] items-center justify-center md:flex-col">
                <Img
                    src="img_image_12.png"
                    width={622}
                    height={524}
                    alt="Image 12"
                    className="h-[524px] w-[42%] object-contain md:w-full"
                />
                <div className="mb-2 flex w-[52%] flex-col gap-[38px] self-end md:w-full">
                    <div className="ml-[162px] mr-[146px] flex flex-col items-start md:mx-0">
                        <Text
                            size="text10xl"
                            as="p"
                            className="!font-sfprotext text-[42px] font-normal capitalize tracking-[-0.84px] !text-black-600 lg:text-[35px] md:text-[26px]"
                        >
                            <span className="font-semibold text-blue_gray-900_04">How to Use&nbsp;</span>
                            <span className="font-extrabold text-light_green-900">Medinize&nbsp;</span>
                        </Text>
                        <Img
                            src="defaultNoData.png"
                            width={258}
                            height={5}
                            alt="Vector"
                            className="relative mt-[-2px] h-[5px] w-[54%] self-end object-contain"
                        />
                    </div>
                    <div className="ml-[60px] grid grid-cols-2 gap-6 lg:grid-cols-2 md:ml-0 md:grid-cols-1">
                        <Suspense fallback={<div>Loading feed...</div>}>
                            {data.map((d, index) => (
                                <SettingsSignUpColumn {...d} key={"frame1000000867" + index} />
                            ))}
                        </Suspense>
                    </div>
                </div>
            </div>
        </div>
    );
}
