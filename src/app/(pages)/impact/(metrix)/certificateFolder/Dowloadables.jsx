import React from 'react'
import pdfPix from "../../../../../assets/images/pdfPix.png"
import Image from 'next/image'
function Dowloadables() {
  return (
    <div className='mx-2 mt-4'>
        <div className='border border-gray-50 rounded-md p-4 justify-between'>
         <div >
         <Image src={pdfPix} alt="pdf" width={30} />
         </div>
         <div className='flex-col gap-2'>
          <p className='text-[12px]'>ElevatedMind Donor Certification</p>
          <p className='text-[10px] text-[#98A2B3]'>Issued Aug 31st . 13mb </p>
         </div>
         <div>
            <p className='bg-[#043259] p-2 rounded-md text-white text-[10px] w-fit'>Download</p>
         </div>
        </div>
    </div>
  )
}

export default Dowloadables