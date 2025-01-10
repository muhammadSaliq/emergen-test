

export default function InputCheck({text, classes, btn1, btn2}) {
    return (
      <div>
            <div className={`flex justify-between items-center w-[100%] ${classes} pb-3 mb-3`}>
          <p className="font-bold text-[#FF4001] text-[18px]">{text}</p>

          <div className="flex gap-2">
          <button className={`w-[50px] h-[50px] ${btn1}`}>No</button>
            <button className={`w-[50px] h-[50px] ${btn2}`}>Yes</button>

          </div>
      </div>
      </div>
    );
  }
  