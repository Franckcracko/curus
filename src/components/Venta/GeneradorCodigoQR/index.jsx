import ButtonFill from "../../Buttons/ButtonFill";
import InputForm from "../FormularioPago/InputForm"

const GeneradorCodigoQR = () => {
  return (
    <article >
      <section>
        <h2>Registro Codigo QR</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem accusamus, libero praesentium impedit harum consequuntur culpa iusto quo, ut pariatur odit nihil! Velit veritatis illo minima tenetur beatae itaque? Velit?
        </p>

      </section>
      <section >
        <h3>Informacion Personal</h3>
        <form className="grid w-[300px]" action="">
          <InputForm textPlaceHolder={'hola'} />
          <InputForm textPlaceHolder={'hola'} />
          <InputForm textPlaceHolder={'hola'} />
          <InputForm textPlaceHolder={'hola'} />
          <ButtonFill text={'Enviar'} />

        </form>
      </section>
      <section>
        <h2>Codigo QR Generado</h2>
        <div className="w-[100px] h-[100px] bg-gray-purple"></div>
        <span className="">Descargar Aqui</span>
      </section>
    </article>
  )
}

export default GeneradorCodigoQR;