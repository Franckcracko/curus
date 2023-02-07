const CleanContainer = () =>{
  return(
    <article className="grid py-10 md:grid-cols-2 gap-x-6 ">
      <section className="flex items-center">
        <figure>
          <img className="w-full rounded-sm shadow" src="/imagen_prueba.jpeg" alt="banda" />
        </figure>
      </section>      
      <section className="text-right">
        <h2 className="text-purple-500 font-medium">Simpleza</h2>
        <p>
        Cuenta con un diseño muy simple que hace que no sea tan vistosa para las personas a su alrededor, esto para que al momento que suceda una emergencia se pueda ser precavida y poder utilizarla correctamente, los colores de igual manera no son muy llamativos y por ultimo es muy facil de usar ya que solo cuenta con un boton a presionar  solamente se tendria que configurar bien mediante la aplicacion.
        </p>
      </section>      
    </article>
  )
}

export default CleanContainer;