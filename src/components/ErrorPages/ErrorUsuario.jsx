import { useRouteError } from "react-router-dom"

const ErrorUsuario = () =>{
    const error = useRouteError()
    console.log(error);
    return(
        <article className="h-screen grid place-content-center">
            <div>
                <h1 className="text-6xl font-bold">Oops!</h1>
                <h2 className="text-3xl font-semibold text-warning">{error.data}</h2>
            </div>
        </article>
    )
}
export default ErrorUsuario