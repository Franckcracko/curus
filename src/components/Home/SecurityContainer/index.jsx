import { Link } from "react-router-dom";
import ButtonGhost from "../../Buttons/ButtonGhost";

const SecurityContainer = function(){
  return (
    <article 
    className="grid py-10 md:grid-cols-2 gap-x-3 border-b border-b-warm-meat border-opacity-10 shadow-sm"
    >
      <section>
        <h2 className="text-purple-500 font-medium">Seguridad</h2>
        <p className="mb-6">
        La pulsera reloj esta pensada para situaciones en la cual la persona se encuentre en peligro, para ello tiene implementado un GPS que estara prendido las 24 horas del dia, al igual que contiene una alarma que genera un ruido acustico para alertar a las demas personas que se encuentran cerca al mismo tiempo envia una señal de auxilio a las personas cercanas que tenga configuradas desde la aplicacion de la pulsera reloj.
        </p>
        <a href="/producto" className="styles_button-base px-6 bg-transparent text-purple-500 border border-purple-500 hover:text-white  hover:shadow-md hover:bg-purple-500 transition-all ease-in-out duration-150 ">
          VER MAS
        </a>
        
      </section>
      <section className="flex justify-end">
        <figure className="w-[250px] md:w-[350px] ">
          <img src="/cellphone_security.svg" alt="celular con figura de proteccion" />
        </figure>
      </section>
    </article>
  )
}
export default SecurityContainer;