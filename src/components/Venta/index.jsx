import { Link } from "react-router-dom";
import CarruselProducto from "./CarruselProducto";
import InformacionProducto from "./InformacionProducto";


const Venta = () =>{
  return (
    <>
    <Link to='/producto' className="font-medium absolute top-11 left-3 underline underline-offset-2  text-[#0E34FF] hover:text-[#4277FF]"> Regresar </Link>
    <article className="grid py-20 grid-cols-2">
      <CarruselProducto />
      <InformacionProducto  />
    </article>
    </>
    )
}

export default Venta;