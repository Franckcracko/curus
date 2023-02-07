import { useParams } from "react-router-dom";
import { toCanvas, toDataURL } from "qrcode";
import { useEffect, useState } from "react";
const DatosPersonales = () => {
  const stylesInput = 'mb-2 border rounded p-[6px]';

  const { id_producto } = useParams();
  const linkPersonal = `https://curus.org/informacion/${id_producto}`;

  const [data, setData] = useState(false);
  const [linkDownloadQR, setLinkDownloadQR] = useState('');

  const [inputs, setInputs] = useState([
    { id: 'nombre', label: 'Nombre', value: '' },
    { id: 'apellido_paterno', label: 'Apellido Paterno', value: '' },
    { id: 'apellido_materno', label: 'Apellido Materno', value: '' },
    { id: 'tipo_sangre', label: 'Tipo de Sangre', value: '' },
    { id: 'telefono', label: 'Telefono', type: 'tel', value: '' },
    { id: 'telefono_casa', label: 'Telefono Casa', type: 'tel', value: '' },
    { id: 'direccion', label: 'Direccion', value: '' },
  ]);

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

  function handleSubmit(e) {
    e.preventDefault();
    let count = 0;
    inputs.map(input => {
      if (input.value !== '') count++;
    })
    if (count === inputs.length) {
      setData(true);
    }
  }
  function handleChange(id, event) {
    const updatedInputs = inputs.map(input => {
      if (input.id === id) {
        return { ...input, value: event.target.value };
      }
      return input;
    });
    setInputs(updatedInputs);
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
            {
              inputs.map(input => (
                <div className="grid" key={`${input.id}`}>
                  <span>{input.label}:</span>
                  <input
                    name={input.id}
                    className={`${stylesInput} w-[400px]`}
                    type={input.type ?? "text"}
                    value={input.value}
                    required
                    onChange={event => { handleChange(input.id, event) }} />
                </div>
              ))
            }
          </div>
          <button type="submit" className={`styles_button-base px-6 bg-purple-500 hover:bg-[#6D28D9DD] text-white transition-all ease-in-out duration-150 `}>
            Enviar
          </button>
        </form>
      </section>
    </article>
  )
}
export default DatosPersonales;