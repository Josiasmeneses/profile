"use-client"
import Image from "next/image";
import Header from "./_components/Header";
import Experience from "./_components/experience";


export default function Home() {
  return (
<div>
  <div>
    <Header />
  </div>

  <div>
    <h3>Josias M.</h3>
    <span>Desenvolvedor Full-Stack</span>
    <p> Desenvolvedor Full-Stack talentoso e experiente,especializado na criação de interfaces web impressionantes e funcionais</p>
  </div>
    <Experience/>
</div>
  );
}
