import { Text, Img, Heading } from "./..";
import Link from "next/link";

interface Props {
  className?: string;
}

export default function Footer({ ...props }: Props) {
  return (
    <footer {...props} className={`${props.className} flex py-7 sm:py-4`}>
      <div className="mb-11 flex w-full flex-col items-center">
        <div className="container-2xl flex items-center justify-between gap-5 self-stretch lg:px-5 md:flex-col md:px-5">
          <div className="flex w-[30%] flex-col items-start md:w-full">
            <Img
              src="img_img_20231009_wa0000_prev_ui.png"
              width={192}
              height={72}
              alt="Img 20231009 Wa0000 Prev Ui"
              className="h-[72px] w-[44%] object-contain"
            />
            <div className="mb-3.5 flex flex-col items-start gap-3.5 self-end">
              <Heading
                size="text4xl"
                as="p"
                className="!font-sfprotext text-[24px] font-normal !text-black-600 lg:text-[20px]"
              >
                (+234)808729002
              </Heading>
              <Heading
                size="text4xl"
                as="p"
                className="!font-sfprotext text-[24px] font-normal !text-black-600 lg:text-[20px]"
              >
                medinizehealthlimited@gmail.com
              </Heading>
            </div>
          </div>
          <div className="flex w-[40%] items-start justify-between gap-5 md:w-full sm:flex-col">
            <div className="flex w-[36%] flex-col items-start gap-[18px] self-center sm:w-full">
              <Heading
                size="text4xl"
                as="p"
                className="!font-sfprotext text-[24px] font-medium !text-black-600 lg:text-[20px]"
              >
                Company
              </Heading>
              <ul className="flex flex-col items-start gap-5">
                <li>
                  <Link href="#" className="lg:text-[15px]">
                    <Text size="text2xl" as="p" className="!font-sfprotext text-[18px] font-normal !text-gray-900_cc">
                      About us
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="FAQ" target="_blank" rel="noreferrer" className="lg:text-[15px]">
                    <Text size="text2xl" as="p" className="!font-sfprotext text-[18px] font-normal !text-gray-900_cc">
                      FAQ
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="Blog" target="_blank" rel="noreferrer" className="lg:text-[15px]">
                    <Text size="text2xl" as="p" className="!font-sfprotext text-[18px] font-normal !text-gray-900_cc">
                      Blog
                    </Text>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex w-[38%] flex-col items-start gap-[18px] sm:w-full">
              <Heading
                size="text5xl"
                as="p"
                className="!font-sfprotext text-[26px] font-medium !text-black-1000 lg:text-[22px]"
              >
                Product
              </Heading>
              <ul className="flex flex-col items-start gap-5">
                <li>
                  <Link href="community" target="_blank" rel="noreferrer" className="lg:text-[15px]">
                    <Text size="text2xl" as="p" className="!font-sfprotext text-[18px] font-normal !text-gray-900_cc">
                      community
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="Telemedicine" target="_blank" rel="noreferrer" className="lg:text-[15px]">
                    <Text size="text2xl" as="p" className="!font-sfprotext text-[18px] font-normal !text-gray-900_cc">
                      Telemedicine
                    </Text>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start gap-[18px]">
              <Heading
                size="text4xl"
                as="p"
                className="!font-sfprotext text-[24px] font-medium !text-black-600 lg:text-[20px]"
              >
                Legal
              </Heading>
              <ul className="flex flex-col items-start gap-5">
                <li>
                  <Link href="#" className="lg:text-[15px]">
                    <Text size="text2xl" as="p" className="!font-sfprotext text-[18px] font-normal !text-gray-900_cc">
                      Terms of service
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="Policy" target="_blank" rel="noreferrer" className="lg:text-[15px]">
                    <Text size="text2xl" as="p" className="!font-sfprotext text-[18px] font-normal !text-gray-900_cc">
                      Policy
                    </Text>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="ml-[196px] flex gap-5 self-start md:ml-0 sm:flex-col">
          <Img src="img_facebook.svg" width={32} height={32} alt="Facebook" className="h-[32px] sm:w-full" />
          <Img src="img_info.svg" width={32} height={32} alt="Info" className="h-[32px] sm:w-full" />
          <Img src="img_youtube.svg" width={32} height={32} alt="Youtube" className="h-[32px] sm:w-full" />
          <Img src="img_link.svg" width={32} height={32} alt="Link" className="h-[32px] sm:w-full" />
          <Img src="img_trash.svg" width={32} height={32} alt="Trash" className="h-[32px] sm:w-full" />
        </div>
        <div className="mt-7 h-[0.5px] w-full self-stretch bg-gray-600_01" />
        <Text as="p" className="mt-[30px] !font-sfprotext text-[16px] font-normal !text-black-600 lg:text-[13px]">
          2023 Medinize-All Right Reserved
        </Text>
      </div>
    </footer>
  );
}
