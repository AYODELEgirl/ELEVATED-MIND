import React from "react";

function First() {
  const table = [
    { subject: "Mathematics", grade: "A" },
    { subject: "English", grade: "B" },
    { subject: "Integrated Science", grade: "A" },
    { subject: "Social Studies", grade: "B" },
    { subject: "Agricultural Science", grade: "A" },
    { subject: "Civic Education", grade: "A" },
    { subject: "Physical and Health Education", grade: "B" },
  ];

  return (
    <div>
      <section className="mt-4">
        {/* Table without the tab check */}
        <table className="w-[30%] table-auto border-collapse rounded-lg overflow-hidden">
        <thead>
            <tr className="bg-[#E9EDF5]">
              <th className="px-4 py-2 border bg-[#E9EDF5] text-[12px] text-[#5A6376] w-1/2 whitespace-nowrap text-left">
                Subject
              </th>
              <th className="px-4 py-2 border bg-[#E9EDF5] text-[12px] font-medium w-1/2 whitespace-nowrap text-left">
                Grade
              </th>
            </tr>
          </thead>
          <tbody>
            {table.map((item, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? "bg-white" : "bg-[#E9EDF5]"}
              >
                <td className="px-4 py-2 border text-[12px] text-[#5A6376] w-1/2 whitespace-nowrap">
                  {item.subject}
                </td>
                <td className="px-4 py-2 border text-[13px] font-medium w-1/2 whitespace-nowrap">
                  {item.grade}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default First;
