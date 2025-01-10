import Image from "next/image";
import ButtonOrange from "./ButtonOrange";

export default function Headers() {
  return (
    <div>
        <div className="flex justify-center items-center bg-transparent border-b-[1px] border-b-white">
            <div className="flex justify-center items-center w-[20%] border-r-[1px] border-r-white">
            <Image
        src="/logo.png" // Replace with your actual image path in the `public` folder
        alt="Hero Background"
        width={50}
        height={50}
        quality={100}
        className="w-[150px] h-[100px]" // Ensures the image is behind the text
      />
            </div>
            <div className="flex justify-end items-center w-[80%]  text-white text-[18px]">
                <div className="flex justify-center items-center gap-9 pr-16">
               <div className="font-bold"> Home </div>
               <div> ABout Us </div>
               <div> Services </div>
               <div> Projects </div>
               <div> Contact Us </div>

               <ButtonOrange text="Schedule a Consultation"/>
               </div>

            </div>
        </div>
        
    </div>
  );
}
