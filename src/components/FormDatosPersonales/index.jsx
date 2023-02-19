import { useParams } from "react-router-dom";
import { toCanvas, toDataURL } from "qrcode";
import { useEffect, useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../services/firebase";
import swal from "sweetalert";
const FormDatosPersonales = () => {
  const stylesInput = 'mb-2 border rounded p-[6px]';

  const { id_producto } = useParams();
  const linkPersonal = `https://curus.org/informacion/${id_producto}`;

  const [linkDownloadQR, setLinkDownloadQR] = useState('');
  const valueInitial = {
    nombre: '',
    apellido_paterno: '',
    apellido_materno: '',
    tipo_sangre: '',
    telefono: '',
    telefono_casa: '',
    direccion: '',
  }
  const [inputs, setInputs] = useState(valueInitial)
  const [data, setData] = useState(false)
  const handleCanvas = () => {
    const canvas = document.getElementById('canvas')
    toCanvas(canvas, linkPersonal,
      {
        width: 200,
        margin: 0,
        scale: 0,
      },
      function (error) {
        if (error) {
          return console.error(error)
        }

      }
    )
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setData(true)
    setDoc(doc(db, "users", id_producto), inputs)
      .then(res => {
        swal({
          title: "Guardado con éxito",
          text: "Accede a tu informacion por medio del codigoQR",
          icon: "info",
        })
        setInputs(valueInitial)
      }).catch(e => {
        console.log(e);
      })
  }
  function handleChange(event) {
    const { name, value } = event.target
    setInputs({ ...inputs, [name]: value });
  }

  useEffect(() => {
    if (data) {
      handleCanvas();
      toDataURL(linkPersonal, function (err, url) {
        if (url) {
          setLinkDownloadQR(url);
        }
      })
    }
  }, [data])
  return (
    <article className="grid grid-cols-2 py-20">
      <section className="pr-5 grid">
        <section>
          <h2>Registro Codigo QR</h2>
          <p className="text-lg mb-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime culpa facere totam quos debitis impedit commodi, dolores quis obcaecati, repudiandae blanditiis ipsum sit necessitatibus enim porro! Obcaecati nisi quaerat sequi.
          </p>
        </section>
        <section className="min-h-[400px] flex flex-col items-center">
          <h2 className="">CODIGO QR</h2>
          <div className="mb-2">
            <canvas width={200} height={200} id="canvas" className="m-0 bg-purple-400_20"></canvas>
          </div>
          {
            data && <a href={linkDownloadQR} className="text-[#0E34FF] hover:text-[#4277FF]" download>DESCARGAR</a>
          }
        </section>
      </section>
      <section className="bg-purple-400_20 py-5">
        <h2 className="text-center">DATOS PERSONALES</h2>
        <form onSubmit={handleSubmit} className="px-10">
          <div className="grid w-[300px]">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              className={`${stylesInput} w-[300px]`}
              onChange={event => { handleChange(event) }}
              name="nombre"
              value={inputs.nombre}
              required />

            <label htmlFor="">Apellido Paterno:</label>
            <input
              type="text"
              className={`${stylesInput} w-[300px]`}
              name="apellido_paterno"
              onChange={event => { handleChange(event) }}
              value={inputs.apellido_paterno}
              required />

            <label htmlFor="">Apellido Materno:</label>
            <input
              type="text"
              className={`${stylesInput} w-[300px]`}
              name="apellido_materno"
              onChange={event => { handleChange(event) }}
              value={inputs.apellido_materno}
              required />

            <label htmlFor="">Tipo Sangre:</label>
            <input
              type="text"
              className={`${stylesInput} w-[300px]`}
              name="tipo_sangre"
              onChange={event => { handleChange(event) }}
              value={inputs.tipo_sangre}
              required />

            <label htmlFor="">Telefono:</label>
            <input
              type="tel"
              className={`${stylesInput} w-[300px]`}
              name="telefono"
              onChange={event => { handleChange(event) }}
              value={inputs.telefono}
              required />

            <label htmlFor="">Telefono casa:</label>
            <input
              type="tel"
              className={`${stylesInput} w-[300px]`}
              name="telefono_casa"
              onChange={event => { handleChange(event) }}
              value={inputs.telefono_casa}
              required />

            <label htmlFor="">Direcciòn:</label>
            <input
              type="text"
              className={`${stylesInput} w-[300px]`}
              name="direccion"
              onChange={event => { handleChange(event) }}
              value={inputs.direccion}
              required />

          </div>
          <button type="submit" className={`styles_button-base px-6 bg-purple-500 hover:bg-[#6D28D9DD] text-white transition-all ease-in-out duration-150 `}>
            Enviar
          </button>
        </form>
      </section>
    </article>
  )
}
export default FormDatosPersonales;