import Image from "next/image";


export default function FooterCol({head, subhead, imgs, size}) {
  return (
    

            <div className="flex  gap-2">
                <Image
        src={imgs} 
        alt="Hero Background"
        width={size}
        height={size}
        className={`w-[${size}px] h-[${size}px]`} // Ensures the image is behind the text
      />

      {head ? (
        <div className="flex flex-col justify-center ">
        <p className="text-[18px] font-bold text-white">{head}</p>
        <p className="text-[18px] font-normal text-white">{subhead}</p>

      </div>
      ) : (<></>)}
      

            </div>
       
  );
}
