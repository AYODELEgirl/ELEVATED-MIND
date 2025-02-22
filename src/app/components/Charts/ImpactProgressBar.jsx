import React from "react";

const ImpactProgressBar = () => {
  // Total milestone range
  const totalStudents = 200;
  const currentProgress = 113; // Example: 113 students

  // Calculate progress percentage
  const progressPercentage = (currentProgress / totalStudents) * 100;

  return (
    <div className="w-full">
      {/* Title */}
      <p className="text-lg font-semibold text-gray-700 mb-2">
        Your Milestone Badge Progress
      </p>

      {/* Progress Bar Container */}
      <div className="relative w-full h-3 bg-gray-300 rounded-full overflow-hidden">
        {/* Progress Bar */}
        <div
          className="h-full bg-[#043259] rounded-full transition-all duration-500"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      {/* Milestone Labels */}
      <div className="flex justify-between text-sm mt-2 text-gray-600">
        <div className="text-left">
          <span className="text-[#D48F38] font-bold">Bronze</span>
        </div>
        <div className="text-center">
          <span className="text-gray-600 font-bold">Silver</span>
        </div>
        <div className="text-right">
          <span className="text-[#FFC107] font-bold">Gold</span>
        </div>
      </div>

      {/* Current Progress Indicator */}
      <div
        className="absolute top-0 transform -translate-x-1/2 -translate-y-[18px] bg-[#043259] text-white text-xs px-2 py-1 rounded-md shadow-md"
        style={{ left: `${progressPercentage}%` }}
      >
        {currentProgress} students
      </div>
    </div>
  );
};

export default ImpactProgressBar;
