import { MyButton } from "@/components/MyButton"
import Link from "next/link"
import Script from "next/script"
import { useState } from "react"

const Sobre = () => {
  const [contador, setContador] = useState(19)
  const handleContadorBtn = () => {
    setContador(contador + 1)
  }
  
  return (
    <div className="">
      <h1 className="text-4xl mb-4 mt-4">Página sobre</h1> {contador}

      <ul>
        <li><Link href="/sobre/bonieky" className="text-blue-500">Bonieky</Link></li>
        <li><Link href="/sobre/joao" className="text-blue-500">João</Link></li>
      </ul>
      
      <MyButton label="Aumentar" onClick={handleContadorBtn}/>
    </div>
  )
}

export default Sobre