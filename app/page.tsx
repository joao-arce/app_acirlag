import Diretoria from "./components/diretoria";
import Hero from "./components/hero";
import Localizacao from "./components/localizacao";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      {/* <Diretoria /> */}
      {/* <Localizacao /> */}
      <div className="h-40 bg-white"></div>
    </main>
  );
}
