import PresidentImg from "@/public/about/maione.jpg";
import Image from "next/image";
import Member from "./member";

const members = [
  {
    id: 1,
    urlImg: "@/public/about/maione.jpg",
    name: "Maione Padeiro",
    position: "Presidente",
  },
  {
    id: 2,
    urlImg: "@/public/about/maione.jpg",
    name: "Mauro",
    position: "Vice-Presidente",
  },
  {
    id: 3,
    urlImg: "@/public/about/maione.jpg",
    name: "Carlos Miguel",
    position: "Diretor Financeiro",
  },
  {
    id: 4,
    urlImg: "@/public/about/maione.jpg",
    name: "Ana",
    position: "Secretária",
  },
];

const Diretoria = () => {
  return (
    <div>
      <div className="px-2 md:px-24 mt-4 md:mt-12">
        <h2 className="text-3xl py-2 text-white font-extrabold tracking-tighter">
          <span className="tracking-widest text-transparent bg-clip-text inline-block bg-gradient-to-r from-emerald-700 to-emerald-400 ">
            Diretoria
          </span>
        </h2>
        <div className="px-4 bg-teal-50 border rounded-xl grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
          {members.map((member) => (
            <Member
              key={member.id}
              altStr={member.name}
              name={member.name}
              position={member.position}
            />
          ))}

          {/*          
          <div className="shadow-xl p-4 bg-white rounded-md">
            <Image
              src={PresidentImg}
              alt="Presidente image"
              className="rounded-full mx-auto "
            />
            <div className="text-sm   ">
              <h1 className="text-center font-semibold ">Maione</h1>
              <p className="text-center text-xs"> Presidente</p>
            </div>
          </div>

          <div className="shadow-xl p-4 bg-white rounded-md">
            <Image
              src={PresidentImg}
              alt="Presidente image"
              className="rounded-full mx-auto "
            />
            <div className="text-sm   ">
              <h1 className="text-center font-semibold ">Maione</h1>
              <p className="text-center text-xs"> Presidente</p>
            </div>
          </div>

          <div className="shadow-xl p-4 bg-white rounded-md">
            <Image
              src={PresidentImg}
              alt="Presidente image"
              className="rounded-full mx-auto "
            />
            <div className="text-sm   ">
              <h1 className="text-center font-semibold ">Maione</h1>
              <p className="text-center text-xs"> Presidente</p>
            </div>
          </div>

          <div className="shadow-xl p-4 bg-white rounded-md">
            <Image
              src={PresidentImg}
              alt="Presidente image"
              className="rounded-full mx-auto "
            />
            <div className="text-sm   ">
              <h1 className="text-center font-semibold ">Maione</h1>
              <p className="text-center text-xs"> Presidente</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Diretoria;
