import PresidentImg from "@/public/about/maione.jpg";
import Image from "next/image";
const About = () => {
  return (
    <section>
      {/* <div className="">
        <div className="bg-about-section bg-repeat-x overflow-hidden py-12 px-8">
          <div className="flex flex-col gap-4">
            <h2 className="md:pl-20 text-center md:text-left pb-4 lg:pl-32 text-3xl font-semibold text-white">
              Diretoria
            </h2>
            <div className=" md:pl-20 lg:pl-32 flex gap-4">
              <div className="w-28 md:w-52 md:h-52  rounded-lg bg-white">
                Foto
              </div>
              <div className="h-52 rounded-lg bg-white flex-grow lg:mr-40">
                <h3>Nome</h3>
                <h3>Função</h3>
                <p>Descrição</p>
              </div>
            </div>

            <div className="md:pl-20 lg:pl-32 flex gap-4">
              <div className="h-52 rounded-lg bg-white flex-grow ">
                <h3>Nome</h3>
                <h3>Função</h3>
                <p>Descrição</p>
              </div>
              <div className="w-28 md:w-52 md:h-52 rounded-lg bg-white lg:mr-40">
                Foto
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="md:pl-20 lg:pl-32  w-full flex flex-col gap-4 items-center mt-12  ">
        <div>
          <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
            {/* <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512"> */}
            <Image
              src={PresidentImg}
              alt="Presidente image"
              className="w-24 h-24 md:w-48 md:h-auto md:rounded-xl rounded-full mx-auto md:mx-0"
            />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-2">
              <div className="text-green-800 font-semibold dark:text-sky-400">
                Maione Padeiro
              </div>
              <div className="text-slate-700 dark:text-slate-500">
                Presidente
              </div>
            </div>
          </figure>
        </div>
        <div className="flex flex-col md:flex-row">
          <div>
            <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
              {/* <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512"> */}
              <Image
                src={PresidentImg}
                alt="Presidente image"
                className="w-24 h-24 md:w-48 md:h-auto md:rounded-xl rounded-full mx-auto md:mx-0"
              />
              <div className="pt-6 md:p-8 text-center md:text-left space-y-2">
                <div className="text-green-800 font-semibold dark:text-sky-400">
                  Mauro
                </div>
                <div className="text-slate-700 dark:text-slate-500">
                  Vice-Presidente
                </div>
              </div>
            </figure>
          </div>
          <div>
            <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
              {/* <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512"> */}
              <Image
                src={PresidentImg}
                alt="Presidente image"
                className="w-24 h-24 md:w-48 md:h-auto md:rounded-xl rounded-full mx-auto md:mx-0"
              />
              <div className="pt-6 md:p-8 text-center md:text-left space-y-2">
                <div className="text-green-800 font-semibold dark:text-sky-400">
                  Maione Padeiro
                </div>
                <div className="text-slate-700 dark:text-slate-500">
                  Presidente
                </div>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
