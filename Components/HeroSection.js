import Image from "next/image";
import Headers from "./Headers";
import ButtonOrange from "./ButtonOrange";

export default function HeroSection() {
  return (
    <div>

    <div className="relative h-screen">
      {/* Background Image */}
      <Image
        src="/imgs.png" // Replace with your actual image path in the `public` folder
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="-z-10" // Ensures the image is behind the text
      />
              <Headers/>

      {/* Text on Top */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center ">
        <div className="max-w-[90%] w-[90%]">
        <p className="text-[48px] font-normal uppercase py-2">Enhance Your Winter Construction Projects with Our Advanced Heating Solutions</p>
        <p className="text-[24px]"> Reliable, Powerful, and Eco-friendly Heating Solutions.</p>
        <div className="flex justify-center gap-9 mt-6">
            <ButtonOrange text="Get a Quote"/>
            <button className="bg-transparent border-[1px] border-white w-[260px] h-[50px] text-center text-[18px] font-bold"> Learn More</button>

        </div>
        </div>
      </div>
    </div>
    </div>
  );
}
