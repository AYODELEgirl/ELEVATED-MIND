"use client"
export default function RandomComponent({ first, second, step, number }) {
  return (
    <div>
      <section>
        <section className="rounded-md p-4   bg-[#D6EAFB80]">
          <div className="flex justify-between">
            <div>
              <p className="font-semibold text-[20px] text-[#043259]">
                {first}{" "}
              </p>
              <p className="font-normal text-[#043259] text-[14px] ">
                {second}
              </p>
            </div>
            <div>
              <p className="text-[13px]">
                {step}/
                <span className="text-[10px] text-[#ACACAC]">{number}</span>
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
