import { Link } from "react-router-dom";
import ButtonGhost from "../../Buttons/ButtonGhost";
const PresentationProductContainer =  () =>{
  return(
    <article className="text-white grid grid-cols-2 py-20 bg-[#1F2D37] gap-x-4">
      <section className="flex flex-col items-start">
        <h1 className="text-5xl font-bold">PULSERA RELOJ CURUS</h1>
        <span className="pb-6">Facil de Usar, No Llamativa y Preventiba</span>
        <Link to={`/producto/venta`}  className={`styles_button-base px-6 bg-transparent text-purple-500 border border-purple-500 hover:text-white  hover:shadow-md hover:bg-purple-500 transition-all ease-in-out duration-150 `}>
            Ver Producto
        </Link>
      </section>
      <section>
        <figure className="max-w-[325px]">
          <img className="w-full" src="/reloj_page_presentation.png" alt="imagen sin fondo" />
        </figure>
      </section>
    </article>
  )
}
export default PresentationProductContainer;