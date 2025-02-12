import { Text, Heading, Button, Img } from "./..";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
  signUpLink?: React.ReactNode;
  signUpDescription?: React.ReactNode;
}

export default function SettingsSignUpColumn({ signUpLink = "Sign Up", signUpDescription, ...props }: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex justify-center items-start w-full gap-[26px] p-6 sm:p-4 border-gray-400 border-[0.5px] border-dashed bg-secondary_color rounded-[10px]`}
    >
      <Button color="gray_400" size="xl" variant="outline" shape="square" className="w-[34px] !border-[0.5px]">
        <Img src="img_settings.svg" width={28} height={24} />
      </Button>
      <div className="flex flex-1 flex-col items-start gap-2.5 self-center">
        <Link href="#" className="mt-2.5">
          <Heading size="heading2xl" as="h6" className="text-[16px] font-bold !text-gray-900_cc_01">
            {signUpLink}
          </Heading>
        </Link>
        <Text size="textmd" as="p" className="w-[96%] text-[14px] font-medium leading-[155.02%] !text-gray-900_b2_01">
          <span>Sign up to access&nbsp;</span>
          <span className="font-normal">
            Lorem ipsum dolor sit amet consectetur. Convallis cras placerat dignissim aliquam massa.
          </span>
        </Text>
      </div>
    </div>
  );
}
