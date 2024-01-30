import Image from "next/image";
import PresidentImg from "@/public/about/maione.jpg";

type MemberProps = {
  altStr: string;
  name: string;
  position: string;
};

const Member = ({ altStr, name, position }: MemberProps) => {
  return (
    <div className="shadow-xl bg-white rounded-md">
      <Image
        src={PresidentImg}
        alt={`${altStr} image`}
        className="rounded-full mx-auto p-4 "
      />
      <div className="text-sm pb-4">
        <h1 className="text-center font-semibold ">{name}</h1>
        <p className="text-center text-xs"> {position}</p>
      </div>
    </div>
  );
};

export default Member;
