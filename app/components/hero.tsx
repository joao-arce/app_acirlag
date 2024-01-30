"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import heroImg from "@/public/hero/acirlarg.png";
import MoneyImg from "@/public/hero/dolar.png";
import GraphImg from "@/public/hero/money.png";
import HandshakeImg from "@/public/hero/handshake.png";
import MembersImg from "@/public/hero/members.png";
import AboutImg from "@/public/hero/about.png";
import FaceImg from "@/public/hero/ic_sharp-facebook.png";
import InstImg from "@/public/hero/ri_instagram-fill.png";
import WhatsImg from "@/public/hero/whatsapp-icon.png";

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { when: "beforeChildren", staggerChildren: 0.6 },
    },
  };

  const content = {
    hidden: { opacity: 0 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <section>
      <div className="flex flex-col-reverse gap-4 md:flex-row w-full justify-center px-2">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="md:w-7/12 grid pt-6 grid-cols-1 md:grid-cols-6 md:grid-rows-4 gap-2 "
        >
          {/* Impulsionando negocios  */}
          <motion.div
            variants={container}
            className="bg-[#b0e5e0] min-h-24 rounded-lg md:col-span-4 md:row-span-2 hover:bg-slate-100 "
          >
            <motion.div
              variants={content}
              className="text-3xl px-4 py-2 text-white font-extrabold tracking-tighter  h-full overflow-hidden flex flex-col justify-center "
            >
              <h1 className="text-start">
                <span className="text-transparent bg-clip-text inline-block bg-gradient-to-r from-emerald-700 to-emerald-400 ">
                  Impulsionando
                </span>
              </h1>
              <div className="flex justify-between gap-8 items-end ">
                <Image src={MoneyImg} alt="money" className="w-16" />
                <h1 className="text-end">
                  <span className="text-transparent bg-clip-text  bg-gradient-to-r from-emerald-400 to-emerald-700 ">
                    Negócios
                  </span>
                </h1>
              </div>
              {/* <h1>
                <span className="text-transparent bg-clip-text inline-block bg-gradient-to-r from-indigo-700 to-indigo-200 ">
                  Impulsionando Prosperidade
                </span>
              </h1> */}
            </motion.div>
          </motion.div>
          {/* Grafico */}
          <motion.div
            variants={content}
            className="bg-gradient-to-r from-teal-200 to-teal-500 rounded-lg md:col-span-2 row-span-2 order-first md:order-none"
          >
            <div className="flex justify-center items-center py-4 md:py-0 w-full h-full">
              <Image src={GraphImg} alt="Grafico" width={80} />
            </div>
          </motion.div>
          {/* Pessoas e aperto de mão */}
          <motion.div
            variants={content}
            className="bg-gradient-to-l from-teal-200 to-teal-500   rounded-lg md:col-span-2 row-span-2"
          >
            <div className="flex w-full min-h-24 gap-4 justify-center items-center">
              <Image src={MembersImg} alt="Grafico" width={60} />
              <Image src={HandshakeImg} alt="Grafico" width={60} />
              {/* <Image src={paymentsImg} alt="Grafico" width={60} /> */}
            </div>
          </motion.div>
          {/* About */}
          <motion.div
            variants={content}
            className="min-h-24 rounded-lg md:col-span-2 row-span-2 bg-gradient-to-r from-teal-200 to-teal-500"
          >
            <div className="grid grid-cols-[auto,1fr] gap-1 md:grid-rows-2 md:grid-cols-1 place-items-center px-8  md:px-4 h-full">
              <div className="w-16 h-16 md:py-2 py-0">
                <Image
                  className=" bg-teal-500 rounded-full "
                  src={AboutImg}
                  alt="Grafico"
                  // width={60}
                />
              </div>
              <div className="text-3xl md:text-lg font-extrabold tracking-tighter  ">
                <h1 className="text-start md:text-center md:leading-5">
                  <span className="text-transparent bg-clip-text inline-block bg-gradient-to-l from-emerald-600 to-green-600 ">
                    Conectando
                  </span>
                  <br />
                  <span className="text-transparent bg-clip-text inline-block bg-gradient-to-r from-emerald-600 to-green-600 ">
                    Pessoas
                  </span>
                </h1>
              </div>
            </div>
          </motion.div>
          {/* Redes sociais */}
          <motion.div
            variants={content}
            className="grid bg-gradient-to-l from-teal-200 to-teal-500 rounded-lg md:col-span-2 row-span-2 min-h-24"
          >
            <div className="flex w-full min-h-24  justify-around items-center">
              <Image
                src={WhatsImg}
                alt="Grafico"
                width={50}
                className="cursor-pointer hover:bg-green-200 hover:rounded-lg"
              />
              <Image
                src={FaceImg}
                alt="Grafico"
                width={50}
                className="cursor-pointer hover:bg-green-200 hover:rounded-lg"
              />
              <Image
                src={InstImg}
                alt="Grafico"
                width={50}
                className="cursor-pointer hover:bg-green-200 hover:rounded-lg"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* div 02 */}
        <div className="">
          <motion.div
            // animate={{
            //   // scale: [1, 1.5, 1.5, 1, 1],
            //   scale: [1, 1, 1, 1, 1],
            //   rotate: [0, 0, 270, 270, 0],
            // }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            // transition={{ duration: 0.5 }}
            transition={{ duration: 1.5 }}
            className="flex flex-col items-center md:items-start w-auto"
          >
            <Image
              className="pt-4 "
              src={heroImg}
              width={300}
              alt="hero image"
              priority={true}
            />
            <div className="flex px-2 justify-center md:justify-start">
              <div className="text-xs mt-4 text-center text-green-700 ">
                <p className="">
                  Associação Comercial, Industrial e Empresarial
                </p>
                <p>da Região Leste de Aparecida de Goiânia</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Conectando Negócios, Impulsionando Prosperidade: Sua Associação Comercial Local
export default Hero;

// <div className="w-full md:w-7/12 flex md:justify-center md:items-center ">
// <div className="flex flex-col w-full text-primary text-center md:text-left md:pl-20 lg:pl-32">
//   <div className="text-xs mt-4 ">
//     <p className="">Associação Comercial, Industrial e</p>
//     <p>Empresarial da Região Leste de</p>
//     <p>Aparecida de Goiânia</p>
//   </div>
//   <div className="text-primary mt-4 text-sm tracking-tighter font-semibold">
//     <h2>Conectando Negócios</h2>
//     <h2>Impulsionando Prosperidade</h2>
//     <h2>Sua Associação em Aparecida de Goiânia</h2>
//   </div>
//   <div>
//     <button className="uppercase font-semibold hover:font-bold border border-teal-300  px-6 py-3 mt-8  bg-gradient-to-r from-emerald-700 to-emerald-200 rounded-full">
//       Creça Conosco
//     </button>
//   </div>
//   <div className="mb-4 flex justify-center md:justify-start gap-4 text-cyan-800 mt-4">
//     <Instagram className="" size={28} />
//     <Facebook size={28} />
//   </div>
// </div>
// </div>
