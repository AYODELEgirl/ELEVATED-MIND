import BeforeAndAfterImpactChart from "@/app/components/Charts/BeforeAndAfterImpactChart";
import React from "react";
import { CiSearch } from "react-icons/ci"; // Import search icon

function Impact() {
  return (
    <div>
      <p className="font-semibold text-[15px] text-[#1A1A1A]">
        Personalized Contribution Summary
      </p>
      <div className="border border-b-gray-300 w-[100%] mt-3 mb-3"></div>
      <p className="text-[12px] w-[50%] text-[#667085] mb-4">
        Your generous donation has provided 54 students with the resources they
        need to continue their education.
      </p>
      <p className="font-semibold text-[15px] text-[#1A1A1A]">
        Milestones Achieved
      </p>
      <div className="border border-b-gray-300 w-[100%] mt-3 mb-3"></div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-32">
          <p className="w-[30%]">Graduations</p>
          <p className="w-[70%]">
            Your contributions helped 10 students graduate last year.
          </p>
        </div>
        <div className="flex gap-32">
          <p className="w-[30%]">Exams Passed</p>
          <p className="w-[70%]">
            5 students passed their final exams thanks to your support
          </p>
        </div>
        <div className="flex gap-32">
          <p className="w-[30%]">Terms Completed</p>
          <p className="w-[70%]">
            Your donations have supported 30 students in completing their school
            term.
          </p>
        </div>
      </div>
      <p className="font-semibold text-[15px] text-[#1A1A1A] mb-3 mt-2">
        Improved Academic Performance
      </p>
      <div className="border border-b-gray-300 w-[100%] mt-3 mb-3"></div>
      <div className="flex justify-between mb-3">
        <p className="text-[12px] w-[50%] text-[#667085]">
          80% of students demonstrated significant improvement in their academic
          results after receiving donations. The chart below compares
          performance levels before and after your contributions, highlighting
          the positive impact of your support.
        </p>
        <button className="text-gray-600 border border-gray-400 px-5 py-2 rounded-md transition flex items-center gap-2 text-sm font-medium hover:bg-gray-100">
          <CiSearch size={18} />
          Search
        </button>
       
      </div>
      <div>
          <BeforeAndAfterImpactChart />
        </div>
    </div>
  );
}

export default Impact;
