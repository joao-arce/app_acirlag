// import LogoImg from "@/public/logo-acirlag.png";
// import LogoNameImg from "@/public/logo-name-acirlag.png";
import Image from "next/image";
import Logo from "@/public/acirlarg-logo.png";

const Navbar = () => {
  return (
    <header>
      <nav className="bg-gradient-to-r from-emerald-900 to-emerald-500  py-4 md:pl-20 lg:pl-32">
        <div className="flex justify-between px-4 text-white text-sm">
          {/* <ul>
            <div className="flex">
              <Image src={LogoImg} alt="logo acirlag" height={32} />
              </div>
            </ul> */}
          <ul>
            <Image src={Logo} alt="logo acirlag" height={32} />
          </ul>
          <div className="flex items-center gap-4 ">
            <ul className="hover:text-teal-200">Sobre</ul>
            <ul className="hover:text-teal-200">Diretoria</ul>
            <ul className="hover:text-teal-200">Associados</ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
