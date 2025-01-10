
export default function Headings({head, subhead}) {
  return (
    <div>
    <p className="font-normal text-[#FF4001] text-[48px] ">
        {head}
    </p>
    {subhead ?
    (
        <p className="text-[18px] mt-6 mb-4">
        {subhead}
    </p>
    ) : (
<></>
    )}
    
    </div>
  );
}
