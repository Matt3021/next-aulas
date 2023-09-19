import { ReactElement } from "react"
import { Navbar } from "../Navbar"

type Props = {
  children: ReactElement
}

export const Layout = ({ children }: Props) => {
  return (
    <div className="container w-full max-w-[900px] m-auto bg-[#EEE] p-5">
      <header className="border-b-2 border-solid border-b-black pb-5 mb-5">
        <h1 className="text-5xl font-bold">Meu próprio projeto</h1>
      </header>
      <Navbar />
      <main>{children}</main>
      <footer className="border-t-2 border-solid border-t-black pt-5 mt-5">
        Todos os direitos reservados
      </footer>
    </div>
  )
}