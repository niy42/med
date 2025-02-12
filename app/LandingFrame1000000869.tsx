"use client";

import { Button, Input, Text, Heading } from "../components";
import React from "react";

export default function LandingFrame1000000869() {
    return (
        <div className="mt-[70px] h-[484px] self-stretch bg-[url(/images/img_frame_1000000869.png)] bg-cover bg-no-repeat lg:h-auto md:h-auto">
            <div className="flex flex-col items-center justify-center gap-6 bg-black-900_d8 px-14 py-[120px] lg:py-8 md:p-5 sm:p-4">
                <Heading
                    size="heading12xl"
                    as="h4"
                    className="mt-2 !font-sfprotext text-[42px] font-semibold capitalize !text-secondary_color lg:text-[35px] md:text-[26px]"
                >
                    <span className="text-secondary_color">Subscribe to our&nbsp;</span>
                    <span className="text-light_green-900">Newsletter</span>
                </Heading>
                <Text
                    as="p"
                    className="w-[28%] text-center !font-sfprotext text-[16px] font-medium leading-[155%] tracking-[0.24px] !text-secondary_color lg:w-full lg:text-[13px] md:w-full"
                >
                    <>
                        Be the first to receive exclusive updates, health tips and exciting news from Medinize.
                        <br />
                        Join our growing community of subscribers today.
                    </>
                </Text>
                <div className="flex w-[52%] justify-center gap-8 lg:w-full md:w-full md:flex-col">
                    <Input
                        size="5xl"
                        shape="round"
                        type="email"
                        name="Group 25"
                        placeholder={`Enter Your Email`}
                        className="flex-grow rounded-[10px] border border-solid border-blue_gray-100 px-[30px] font-medium !text-gray-700 sm:px-4"
                    />
                    <Button
                        color="light_green_900"
                        size="16xl"
                        shape="round"
                        className="min-w-[180px] rounded-lg px-[34px] font-bold sm:px-4"
                    >
                        Subscribe
                    </Button>
                </div>
            </div>
        </div>
    );
}

