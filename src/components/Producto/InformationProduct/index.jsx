const InformationProduct = () => {
  const h2Styles = 'text-purple-500  font-medium border-purple-500 border-b border-opacity-20 w-[45%] pb-[5px]';
  return (
    <article className="py-10 grid gap-y-5">

      <section>
        <h2 className={h2Styles}>¿Porque Usarla?</h2>
        <p>
          Te ivitamos a que pruebas la pulsera reloj CURUS ya que nosotros mas que nadie querremos que te encuentres bien y te prevengas de cualquier situacion en la que se pueda ver afectada tu salud, por ello diseñamos este producto que cuenta con GPS y un Boton de Panico, facil de usar y Simple esto de uso preventibo, por ultimo este cuenta con un Codigo QR que contendra informacion personal que tu nos hayas brindado. Toda informacion que nos entregues sera de uso personal y nadie mas que tu tendra acceso a ella mediante el codigo QR de tu pulsera al igual que por la aplicacion podras compartir esa informacion con tu centro de confianza.
        </p>
      </section>

      <section>
        <h2 className={h2Styles}>Caracteristicas</h2>
        <section className="grid grid-cols-2 items-center">
          <ul className="text-black text-opacity-80 list-disc text-sm leading-6 pl-4 grid gap-1 mb-2">
            <li>Cuenta con un GPS que toma tu ubicacion las 24 horas del dia.</li>
            <li>Tiene una aplicacion donde podras establecer un circulo de amigos de confianza a los cuales ellos podran acceder a tu ubicacion.</li>
            <li>Cuenta con Blueetooth para que puedas tenerlo vinculado a tu celular y asi poder interactuar con el mediante la aplicacion.</li>
            <li>El diseño es muy simple, al igual que los colores, esto para que no sea tan facil veerlo para las demas personas.</li>
            <li>En su interior en la parte superior cuenta con un Boton de Emergencia este se encuentra oculto dentro de esta.</li>
            <li>En la parte inferior tiene grabada con ella un codigo QR el cual contiene sus datos personales</li>
          </ul>
          <figure>
            <img src="/imagen_prueba.jpeg" alt="imagen" />
          </figure>
        </section>


      </section>

      <section>
        <h2 className={h2Styles}>¿Como Usarla?</h2>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tenetur fugiat id obcaecati perferendis accusantium praesentium minima nam libero esse et asperiores delectus, soluta porro commodi nemo. Impedit, vero illum!
        </p>
        <article className="">
          {/* Mockups Instructions of application */}
          <h3 className="text-xl text-center font-medium mb-3">Subtitulo</h3>
          <section className="flex items-center justify-between">
            <section className="text-center">
              <span>Uso 1</span>
              <img width={150} src="/mockup-smartphone.svg" alt="mockup" />
            </section>
            <section className="text-center">
              <span>Uso 2</span>
              <img width={150} src="/mockup-smartphone.svg" alt="mockup" />
            </section>
            <section className="text-center">
              <span>Uso 3</span>
              <img width={150} src="/mockup-smartphone.svg" alt="mockup" />
            </section>
          </section>
        </article>
      </section>

      <section >
        <h2 className="text-center">Descargas</h2>
        <section className="flex flex-col gap-y-2 items-center">
          <a className="flex items-center text-purple-600  hover:text-purple-500" href="https://play.google.com" target={"_blank"}>
            <img className="mr-2" width={20} src="/playstore.svg" alt="logo-apliacion" />
            <span>Descarga 1</span>
          </a>
          <a className="flex items-center text-purple-600  hover:text-purple-500" href="https://play.google.com" target={"_blank"}>
            <img className="mr-2" width={20} src="/playstore.svg" alt="logo-apliacion" />
            <span>Descarga 1</span>
          </a>
          <a className="flex items-center text-purple-600  hover:text-purple-500" href="https://play.google.com" target={"_blank"}>
            <img className="mr-2" width={20} src="/playstore.svg" alt="logo-apliacion" />
            <span>Descarga 1</span>
          </a>
        </section>

      </section>
    </article>
  )
}

export default InformationProduct;