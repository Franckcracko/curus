import { useLoaderData } from "react-router-dom"

const InfoUser = () =>{
    const { data } = useLoaderData();
    console.log(data);
    return(
        <article className="grid py-10">
            <h2>
                Nombre:
                <span>{data.nombre}</span>
            </h2>
            <h2>
                Apellido Paterno:
                <span>{data.apellido_materno}</span>
            </h2>
            <h2>
                Appellido Materno:
                <span>{data.apellido_materno}</span>
            </h2>
            <h2>
                Tipo Sangre:
                <span>{data.tipo_sangre}</span>
            </h2>
            <h2>
                Telefono:
                <span>{data.telefono}</span>
            </h2>
            <h2>
                Telefono Casa:
                <span>{data.telefono_casa}</span>
            </h2>
            <h2>
                Direccion:
                <span>{data.direccion}</span>
            </h2>
        </article>
    )
}
export default InfoUser