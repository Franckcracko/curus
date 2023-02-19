import { useState } from "react";
import { Link } from "react-router-dom"

const InformacionProducto = () => {
  const [selected, setSelected] = useState('blue');

  return (
    <section>
      <h1 className="text-3xl font-bold">Pulsera Reloj de Proteccion CURUS</h1>
      <h3 className="font-semibold text-lg">Desde $999,999 MXN</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sapiente distinctio quisquam illo nihil est esse soluta, unde nulla, eveniet recusandae! Fugit sapiente ratione aut unde odit, distinctio neque cupiditate.</p>
      <h2 className="border-purple-500 border-b border-opacity-20 w-[45%] pb-[2.5px]">Colores</h2>
      {/* //Section Circles Color */}
      <section className="flex justify-between w-1/2 mb-5">
        <section className="grid flex-col min-w-[40px] items-center">
          <input
            type="radio"
            value="visa"
            name="radio-card"
            className="w-8 h-8 bg-[blue] hover:brightness-75"
            checked={selected === 'blue'}
            onChange={() => setSelected('blue')} />
          <span className="text-[8px] uppercase font-medium">Azul</span>
        </section>
        <section className="grid flex-col min-w-[40px] items-center">
          <input
            type="radio"
            value="visa"
            name="radio-card"
            className="w-8 h-8 bg-[green] hover:brightness-75"
            checked={selected === 'green'}
            onChange={() => setSelected('green')} />
          <span className="text-[8px] uppercase font-medium">Verde</span>
        </section>
        <section className="grid flex-col min-w-[40px] items-center">
          <input
            type="radio"
            value="visa"
            name="radio-card"
            className="w-8 h-8 bg-[black] hover:brightness-75"
            checked={selected === 'black'}
            onChange={() => setSelected('black')} />
          <span className="text-[8px] uppercase font-medium">Negro </span>
        </section>
      </section>
      <Link to='pago' className={`bg-purple-500 hover:bg-[#6D28D9DD] styles_button-base text-white transition-all ease-in-out duration-150 `}>
        COMPRAR
      </Link>

    </section>
  )
}
export default InformacionProducto