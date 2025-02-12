import { useEffect, useState } from "react";
import { Button, Img, Text } from "../components";
import { TypeAnimation } from "react-type-animation";

export default function LandingGroup9305() {
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    const text = `Our platform enables patients to easily manage health care needs
from the comfort of their homes and have easy access to medical services.
Unlock the power of Medinize and accelerate towards a healthier future.`;

    setLines(text.split(/\r?\n/).map(line => line.trim()).filter(line => line.length > 0));
  }, []);

  // Create sequence before rendering to avoid unnecessary re-renders
  const sequence = lines.flatMap(line => [line, 1000]);

  return (
    <div className="relative flex flex-col self-start px-4 md:px-6">
      {/* Hero Section */}
      <div className="ml-24 flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-7xl lg:space-x-32">
        {/* Text Section */}
        <div className="relative flex flex-col gap-6 text-center lg:text-left max-w-2xl">
          <Text
            size="textlg_extrabold"
            as="h1"
            className="animate-fade-in ml-4 text-4xl lg:text-5xl leading-snug tracking-tight text-blue_gray-900"
          >
            Accelerate Your Health <br /> Plans With {" "}
            <span className="text-light_green-900 font-extrabold">Medinize</span>
          </Text>
          <div className="absolute -right-[110px] top-[100px]">
            <Img src="Frame_1000000850.png" alt="image" width={450} height={450} className="" />
          </div>
          <div className="text-gray-800 text-lg leading-relaxed text-wrap whitespace-pre-wrap max-w-md">
            {sequence.length > 0 && (
              <TypeAnimation
                sequence={sequence}
                speed={50}
                wrapper="p"
                repeat={Infinity}
              />
            )}
          </div>
          <div className="flex gap-4 justify-center lg:justify-start">
            <Button className="bg-light_green-900 text-white rounded-full px-6 py-3 shadow-lg">
              Book an Appointment
            </Button>
            <Button className="border-light_green-900 text-light_green-900 border rounded-full px-6 py-3">
              Access Community
            </Button>
          </div>
        </div>
        <div className="relative inset-0 flex justify-center items-center">
          <Img
            src="Frame_1000000853.svg"
            alt="User Avatar"
            className="w-[520px] h-[520px] rounded-full"
            width={520}
            height={520}
          />
          <Img src="plaster.png" alt="plaster" className="absolute left-12 top-[294px]" height={40} width={40} />
        </div>
      </div>
      <div className="relative left-16 flex items-center w-full">
        <div className="flex-1 border-t-[1.88px] border-gray-400_b2 border-dashed"></div>
        <div className="absolute left-1/2 z-10 transform bg-white-200 -translate-x-1/2 px-3 h-5 w-8 border-[1.88px] border-dashed border-gray-400_b2 rounded-md flex items-center justify-center">
          <Img src="vector.png" alt="play" height={15} width={15} className="" />
        </div>
        <div className="flex-1 border-t-[1.88px] border-gray-400_b2 border-dashed"></div>
      </div>
    </div>
  );
}
