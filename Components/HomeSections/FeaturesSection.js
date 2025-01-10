import Image from "next/image";
import Headings from "../Headings";

export default function FeaturesSection() {
  return (
    <>
    <div className="bg-[#424242] flex justify-between items-center ">
        <div className="flex flex-col justify-center bg-[#363636] w-[75%] pl-[5%] h-[620px]">
        <Headings head="Key Features" />
        <ul className="list-disc marker:text-[#FF4001] ml-4 w-[50%]">
            <li>Thaws up to 6,000 sq ft. or cures up to 18,000 sq ft.</li>
            <li>Environmentally friendly with low emissions and reduced fuel consumption</li>
            <li>Easy to operate with user-friendly controls and automatic temperature regulation</li>
            <li>Capable of operating with external temperatures down to -30°C.</li>
          </ul>
        </div>
        <Image
        src="/eng.png" 
        alt="Hero Background"
        width={700}
        height={500}
        className="w-[681px] h-[500px] ml-[-50%] mr-[6%]" // Ensures the image is behind the text
      />
        
    </div>
    <div className="border-b-[2px] border-t-[2px] border-[#FF4001]">
    <Image
        src="/cons.png" 
        alt="Hero Background"
        width={2000}
        height={1000}
        className="w-[100%] h-[500px] " // Ensures the image is behind the text
      />
    </div>
    </>
  );
}
