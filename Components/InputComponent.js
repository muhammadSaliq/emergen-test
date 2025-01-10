'use client'
export default function InputComponent({ holder, names, onChange }) {
  const handleChange = (event) => {
    onChange(names, event.target.value); // Pass name and value to parent
  };

  return (
    <div>
      <div className="relative z-0 w-full mb-6 group">
          <input
            className="mt-2 bg-[#ffffff] w-[100%] px-2 py-2 text-[#424242] placeholder:text-[#424242] h-[51px] text-[18px]"
            placeholder={holder}
            name={names}
            variant="outlined"
            onChange={handleChange}
          />
      </div>
    </div>
  );
}
