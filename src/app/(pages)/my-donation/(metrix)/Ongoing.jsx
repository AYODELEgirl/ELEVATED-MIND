import OngoingDonation from "@/app/components/Reuseables/OngoingDonation";
import lagosPrep from "../../../../assets/images/lagosPrep.png";
function Ongoing() {
  const ongoingData = [
    {
      img: lagosPrep,
      studentName: "Olayinka Akindele",
      schoolName: "Lagos Preparatory",
      donationProgress: "Donation progress",
      amountDonated: "₦91,000.00 Donated",
      amountDonatedTwo: " from ₦110,000.00 Donation",
      donation: "Donation Amount",
      donationAmount: "₦5,000.00",
      date: "Start Date",
      startDate: "7th Sep, 2024",
      frequency: "Frequency",
      recurring: "Recurring (Wed - Weekly)",
      payment: "Payment method",
      debit: "Debit - **5689",
      raised: "Raised",
      raisedAmount: "₦47,250.00",
      goals: "Goals",
      gaolsAmount: "₦150,000.00",
      left: "Left",
      leftAmount: "₦102,750.00",
      number: "32"

    },
    {
      img: lagosPrep,
      studentName: "Olayinka Akindele",
      schoolName: "Lagos Preparatory",
      donationProgress: "Donation progress",
      amountDonated: "₦91,000.00 Donated",
      amountDonatedTwo: " from ₦110,000.00 Donation",
      donation: "Donation Amount",
      donationAmount: "₦5,000.00",
      date: "Start Date",
      startDate: "7th Sep, 2024",
      frequency: "Frequency",
      recurring: "Recurring (Wed - Weekly)",
      payment: "Payment method",
      debit: "Debit - **5689",
      raised: "Raised",
      raisedAmount: "₦47,250.00",
      goals: "Goals",
      gaolsAmount: "₦150,000.00",
      left: "Left",
      leftAmount: "₦102,750.00",
      number: "60"

    },
    {
      img: lagosPrep,
      studentName: "Olayinka Akindele",
      schoolName: "Lagos Preparatory",
      donationProgress: "Donation progress",
      amountDonated: "₦91,000.00 Donated",
      amountDonatedTwo: " from ₦110,000.00 Donation",
      donation: "Donation Amount",
      donationAmount: "₦5,000.00",
      date: "Start Date",
      startDate: "7th Sep, 2024",
      frequency: "Frequency",
      recurring: "Recurring (Wed - Weekly)",
      payment: "Payment method",
      debit: "Debit - **5689",
      raised: "Raised",
      raisedAmount: "₦47,250.00",
      goals: "Goals",
      gaolsAmount: "₦150,000.00",
      left: "Left",
      leftAmount: "₦102,750.00",
      number: "50"

    },
    {
      img: lagosPrep,
      studentName: "Olayinka Akindele",
      schoolName: "Lagos Preparatory",
      donationProgress: "Donation progress",
      amountDonated: "₦91,000.00 Donated",
      amountDonatedTwo: " from ₦110,000.00 Donation",
      donation: "Donation Amount",
      donationAmount: "₦5,000.00",
      date: "Start Date",
      startDate: "7th Sep, 2024",
      frequency: "Frequency",
      recurring: "Recurring (Wed - Weekly)",
      payment: "Payment method",
      debit: "Debit - **5689",
      raised: "Raised",
      raisedAmount: "₦47,250.00",
      goals: "Goals",
      gaolsAmount: "₦150,000.00",
      left: "Left",
      leftAmount: "₦102,750.00",
      number: "30"
    },
    {
      img: lagosPrep,
      studentName: "Olayinka Akindele",
      schoolName: "Lagos Preparatory",
      donationProgress: "Donation progress",
      amountDonated: "₦91,000.00 Donated",
      amountDonatedTwo: " from ₦110,000.00 Donation",
      donation: "Donation Amount",
      donationAmount: "₦5,000.00",
      date: "Start Date",
      startDate: "7th Sep, 2024",
      frequency: "Frequency",
      recurring: "Recurring (Wed - Weekly)",
      payment: "Payment method",
      debit: "Debit - **5689",
      raised: "Raised",
      raisedAmount: "₦47,250.00",
      goals: "Goals",
      gaolsAmount: "₦150,000.00",
      left: "Left",
      leftAmount: "₦102,750.00",
      number: "20"

    },
    {
      img: lagosPrep,
      studentName: "Olayinka Akindele",
      schoolName: "Lagos Preparatory",
      donationProgress: "Donation progress",
      amountDonated: "₦91,000.00 Donated",
      amountDonatedTwo: " from ₦110,000.00 Donation",
      donation: "Donation Amount",
      donationAmount: "₦5,000.00",
      date: "Start Date",
      startDate: "7th Sep, 2024",
      frequency: "Frequency",
      recurring: "Recurring (Wed - Weekly)",
      payment: "Payment method",
      debit: "Debit - **5689",
      raised: "Raised",
      raisedAmount: "₦47,250.00",
      goals: "Goals",
      gaolsAmount: "₦150,000.00",
      left: "Left",
      leftAmount: "₦102,750.00",
      number: "40"

    },
  ];
  return (
    <div className="bg-white p-4 rounded-md text-gray-600">
      <p
        style={{ fontWeight: "400", fontSize: "18px" }}
        className="text-primary"
      >
        Ongoing Donation<span className="text-[#F5105C]">*</span>
      </p>
      <div className="border border-t-gray-50 mt-3 w-[100%]"></div>
      <div className="mt-5 grid grid-cols-4 gap-5">
        {ongoingData.map((e, i) => {
          return <OngoingDonation {...e}  key={i}/>;
        })}
      </div>
    </div>
  );
}
export default Ongoing;
