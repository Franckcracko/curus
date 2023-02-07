import { Link } from "react-router-dom"
import ButtonFill from "../../Buttons/ButtonFill"

const InformacionProducto = () => {
  const colors = [
    'azul',
    'morado',
    'verde',
  ]
  return (
    <section>
      <h1 className="text-3xl font-bold">Pulsera Reloj de Proteccion CURUS</h1>
      <h3 className="font-semibold text-lg">Desde $999,999 MXN</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sapiente distinctio quisquam illo nihil est esse soluta, unde nulla, eveniet recusandae! Fugit sapiente ratione aut unde odit, distinctio neque cupiditate.</p>
      <h2 className="border-purple-500 border-b border-opacity-20 w-[45%] pb-[2.5px]">Colores</h2>
      {/* //Section Circles Color */}
      <section className="flex justify-between w-1/2 mb-5">
        {
          colors.map(el => (
            <section className="grid flex-col min-w-[40px] items-center" key={el}>
              <button className="rounded-full w-8 h-8 bg-gray-purple hover:brightness-75">
                
              </button>
              <span className="text-[8px] uppercase font-medium">{el} </span>

            </section>
          ))
        }

      </section>
      <Link to='pago' className={`bg-purple-500 hover:bg-[#6D28D9DD] styles_button-base text-white transition-all ease-in-out duration-150 `}>
        COMPRAR
      </Link>
      
    </section>
  )
}
export default InformacionProducto