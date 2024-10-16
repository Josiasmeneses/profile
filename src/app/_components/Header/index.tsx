'use-client'

import Link from "next/link";

const Header = () =>{
    return(
      <div className="flex flex-row item-center justify-between p-5">
          <Link href={"/"}>Home</Link>
          <Link href={"about"}>Sobre</Link>
          <Link href={"experiencia"}>Experiências</Link>
          <Link href={"contact"}>Contato</Link>
      </div>
    )
}

export default Header;