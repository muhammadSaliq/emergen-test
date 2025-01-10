
import FooterCol from "../FooterCol";
import InputComponent from "../InputComponent";

export default function FooterSection() {
  return (
    <div className="bg-[#373737] flex justify-center pt-20 ">
        <div className="max-w-[90%] w-[90%] ">

            <div className="flex justify-between gap-6">
                <div className="flex flex-col gap-3">
                    <FooterCol head={`Email`} subhead={`contact@emergen.io`} imgs={`/em.png`} size={50}/>
                    <FooterCol head={`Call Us`} subhead={`+90 000000000`} imgs={`/pho.png`} size={50}/>
                    <FooterCol head={`Address`} subhead={`ABC Residency Street#34, Country,City`} imgs={`/loc.png`} size={50}/>

                </div>
                <div className="flex flex-col gap-2 items-center ">
                    <p className="text-white text-[18px] font-bold mb-2">Quick links</p>
                    <p className="text-white text-[18px] font-normal">Home</p>
                    <p className="text-white text-[18px] font-normal">About Us</p>
                    <p className="text-white text-[18px] font-normal">Services</p>
                    <p className="text-white text-[18px] font-normal">Projects</p>
                    <p className="text-white text-[18px] font-normal">Contact Us</p>


                </div>
                <div className="flex flex-col gap-2 justify-center">
                <p className="text-white text-[18px] font-bold mb-2">Socials</p>
                <div className="flex gap-3">
                <FooterCol  imgs={`/lin.png`} size={30}/>
                <FooterCol  imgs={`/ins.png`} size={30}/>
                <FooterCol  imgs={`/fac.png`} size={30}/>
                </div>

                <p className="text-white text-[18px] font-bold mt-5">Subscribe to Newsletter</p>
                <div className="flex gap-2">
                    <InputComponent holder={`Email`} names={`Email`}/>
                    <button className="bg-[#FF4001] px-3 mt-2 h-[50px] text-center text-[18px] font-bold"> Subscribe</button>
                </div>


                </div>


            </div>
            <div className="w-[100%] border-t-[1px] border-t-white mt-4 mb-6">
            <p className="text-white text-[18px] font-bold mt-5 text-center">Copyright © Emergen Pvt Limited - 2025</p>
            </div>
        </div>
        
    </div>
  );
}
