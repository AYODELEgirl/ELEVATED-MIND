import back1 from "../../../assets/images/back1.png";
import Image from "next/image";

function SecondLayout({ children, ShowBack, classNames }) {
  return (
   <div className={`sticky top-[70px] z-[99] ${classNames}`}>
     <div
      className="bg-white mx-4 px-6 relative  z-[100]"
      style={{ borderRadius: "1.5rem 1.5rem 0 0 " }}
    >
        {/* min-h-[160px] */}
      <div>{children}</div>
     
      {ShowBack && (
        <div className="absolute right-0 top-0">
          <Image src={back1} width={350}  alt="" />
        </div>
      )}
    </div>
   </div>
  );
}

export default SecondLayout;
