"use client";
import { useState } from "react";
import Headings from "../Headings";
import InputComponent from "../InputComponent";
import InputCheck from "../InputCheck";

export default function CostSection() {
  const [formValues, setFormValues] = useState({
    area: "",
    depth: "",
    days: "",
  });
  const [calculatedCost, setCalculatedCost] = useState(0);

  const BASE_COST_PER_DAY = 75;

  // Handle input changes
  const handleInputChange = (name, value) => {
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Recalculate cost manually on button click
  const calculateCost = () => {
    const days = parseInt(formValues.days) || 0;
    setCalculatedCost(days * BASE_COST_PER_DAY);
  };

  return (
    <div className="bg-[#373737] flex justify-center py-20">
      <div className="max-w-[90%] w-[90%]">
        <p className="font-bold text-[18px] mb-[-14px]">
          Estimate Your Project Costs
        </p>
        <Headings
          head="Quick Cost Estimator"
          subhead="Use our simple calculator to estimate the cost of renting the E3000 Hydronic Heater for your specific project needs. Enter your project details below to receive an instant preliminary quote."
        />

        <div className="grid md:grid-cols-3 md:gap-6">
          <div>
            <InputComponent
              holder="30x60"
              names="area"
              onChange={handleInputChange}
            />
          </div>

          <InputComponent
            holder="Frost Depth (inches)"
            names="depth"
            onChange={handleInputChange}
          />

          <InputComponent
            holder="Duration (Days)"
            names="days"
            onChange={handleInputChange}
          />
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <InputCheck
            text="Delivery/Pickup"
            classes="border-b-[1px] border-white"
            btn1="bg-transparent border-[1px] border-white"
            btn2={`bg-[#FF4001]`}
          />
          <InputCheck
            text="Power Availability"
            classes="border-b-[1px] border-white"
            btn1="bg-[#FF4001]"
            btn2={`bg-transparent border-[1px] border-white`}
          />
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <InputCheck
            text="Insulated Tarps"
            btn1="bg-transparent border-[1px] border-white"
            btn2={`bg-[#FF4001]`}
          />
          <InputCheck
            text="Setup of the Ground Thaw Equipment"
            btn1={`bg-[#FF4001]`}
            btn2={`bg-transparent border-[1px] border-white`}
          />
        </div>
        <div className="flex flex-col items-center pt-2">
          <Headings head={`$ ${calculatedCost.toFixed(2)}`} />
          <button
            className="bg-[#FF4001] w-[123px] h-[50px] mt-6 text-center text-[18px] font-bold"
            onClick={calculateCost}
          >
            Calculate
          </button>
        </div>
      </div>
    </div>
  );
}
