const HeroContainer = function() {
  return(
    <header 
    className='flex items-center justify-center w-full h-screen text-white bg-cover bg-center' 
    style={
      {
        background: "linear-gradient(rgba(109, 40, 217, .4), rgba(109, 40, 217, .5)), url('hero-image.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    }>
      <article className='text-center'>
        <h1 className='text-5xl font-bold'>VE SEGURA, VE COMO SE DEBE</h1>
        <span className='text-base text-[#FCFCFC]'>amet consectetur adipisicing elit. Ducimus praesentium ullam</span>
      </article>
      <img className="absolute bottom-3" src="arrow.svg" alt="arrow down" />
    </header>
  )
}
export default HeroContainer;