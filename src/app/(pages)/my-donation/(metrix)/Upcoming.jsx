import Image from 'next/image';
import React from 'react'
import date from '../../../../assets/icons/overview/date.png'
import Cards from '@/app/components/Reuseables/Cards';
function Upcoming() {
  const Calenderdate = [
    {
      text: "Showing for next:",
      img: date,
      textTwo: "7 day",
    },
  ];
  const overviewCards = [
    {
      month: "Aug",
      date: "21",
      studentName : "Olayinka Akindele",
      term : "1st term school fees",
      donation : "Donation progress",
      amountDonated : "₦47,250.00 Donated",
      amountDonatedTwo : "from ₦150,000.00 Donation",
      school : "School",
      SchoolName : "Lagos Preparatory",
      dueDate : "Due Date",
      due : "17th Nov 2024",
      donationAmount : "Donation Amount",
      donationPrice : "17th Nov 2024",
      payment : "Payment Method",
      debit : "Debit - **5689",
      frequency : "Frequency",
      weekly : "Mon - Weekly",
      impact : "Donation Impact",
      percentage : "39%",
    },
    {
      month: "Aug",
      date: "21",
      studentName : "Olayinka Akindele",
      term : "1st term school fees",
      donation : "Donation progress",
      amountDonated : "₦47,250.00 Donated",
      amountDonatedTwo : "from ₦150,000.00 Donation",
      school : "School",
      SchoolName : "Lagos Preparatory",
      dueDate : "Due Date",
      due : "17th Nov 2024",
      donationAmount : "Donation Amount",
      donationPrice : "17th Nov 2024",
      payment : "Payment Method",
      debit : "Debit - **5689",
      frequency : "Frequency",
      weekly : "Mon - Weekly",
      impact : "Donation Impact",
      percentage : "39%",
    },
    {
      month: "Aug",
      date: "21",
      studentName : "Olayinka Akindele",
      term : "1st term school fees",
      donation : "Donation progress",
      amountDonated : "₦47,250.00 Donated",
      amountDonatedTwo : "from ₦150,000.00 Donation",
      school : "School",
      SchoolName : "Lagos Preparatory",
      dueDate : "Due Date",
      due : "17th Nov 2024",
      donationAmount : "Donation Amount",
      donationPrice : "17th Nov 2024",
      payment : "Payment Method",
      debit : "Debit - **5689",
      frequency : "Frequency",
      weekly : "Mon - Weekly",
      impact : "Donation Impact",
      percentage : "39%",
    },
    {
      month: "Aug",
      date: "21",
      studentName : "Olayinka Akindele",
      term : "1st term school fees",
      donation : "Donation progress",
      amountDonated : "₦47,250.00 Donated",
      amountDonatedTwo : "from ₦150,000.00 Donation",
      school : "School",
      SchoolName : "Lagos Preparatory",
      dueDate : "Due Date",
      due : "17th Nov 2024",
      donationAmount : "Donation Amount",
      donationPrice : "17th Nov 2024",
      payment : "Payment Method",
      debit : "Debit - **5689",
      frequency : "Frequency",
      weekly : "Mon - Weekly",
      impact : "Donation Impact",
      percentage : "39%",
    },
    {
      month: "Aug",
      date: "21",
      studentName : "Olayinka Akindele",
      term : "1st term school fees",
      donation : "Donation progress",
      amountDonated : "₦47,250.00 Donated",
      amountDonatedTwo : "from ₦150,000.00 Donation",
      school : "School",
      SchoolName : "Lagos Preparatory",
      dueDate : "Due Date",
      due : "17th Nov 2024",
      donationAmount : "Donation Amount",
      donationPrice : "17th Nov 2024",
      payment : "Payment Method",
      debit : "Debit - **5689",
      frequency : "Frequency",
      weekly : "Mon - Weekly",
      impact : "Donation Impact",
      percentage : "39%",
    },
    
  ]
  return (
    <section className="bg-white rounded-md p-4 mt-3">
    <div className="flex justify-between">
      <p
        style={{ fontWeight: "400", fontSize: "18px" }}
        className="text-primary"
      >
        Upcoming Donation<span className="text-[#F5105C]">*</span>
      </p>

      <div className="border rounded-md px-4 py-1">
        {Calenderdate.map((e, i) => (
          <div key={i} className="flex items-center justify-center gap-2">
            <p className="text-[12px] text-[#344054]">{e.text}</p>
            <Image src={e.img} className="w-[.7rem]" />
            <p className="text-[12px] text-[#344054]">{e.textTwo}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="grid grid-cols-3 mt-4">
                {overviewCards.map((e, i) => {
                  return <Cards {...e} />;
                })}
              </div>
    </section>
  )
}

export default Upcoming
