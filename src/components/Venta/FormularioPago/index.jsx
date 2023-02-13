import { useState } from "react";
import { Form } from "react-router-dom";

export default function FormularioPago () {
  const [selected, setSelected] = useState('visa');
  const [inputs, setInputs] = useState([
    { id: 'nombre', label: 'Nombre', value: '', required: true },
    { id: 'direccion_1', label: 'Direccion 1', value: '', required: true },
    { id: 'direccion_2', label: 'Direccion 2', value: '', required: false },
    { id: 'correo', label: 'Correo Electronico', value: '', type: 'email', required: true },
    { id: 'numero_telefonico', label: 'Numero Telefono', value: '', type: 'tel', required: true },
  ]);
  const stylesInput = 'mb-2 text-lg border rounded p-[6px]';

  const handleChange = (id, event) => {
    const updatedInputs = inputs.map(input => {
      if (input.id === id) {
        return { ...input, value: event.target.value };
      }
      return input;
    });
    setInputs(updatedInputs);
  }

  return (
    <article className="grid justify-center py-20">
      <h1 className="text-4xl font-semibold text-center mb-4">Formulario de Pago</h1>
      <Form
        method="post"
        action="/curus/producto/venta/pago/new"
        className="w-[500px] px-4  md:w-[425px]  grid"
      >
        {
          inputs.map(input => (
            <div className="grid" key={`${input.id}`}>
              <span>{input.label}:</span>
              <input
                name={input.id}
                className={`${stylesInput} w-[400px]`}
                type={input.type ?? "text"}
                value={input.value}
                required={input.required}
                onChange={event => { handleChange(input.id, event) }} />
            </div>
          ))
        }

        <section className="flex items-center">
          <section className="grid mr-10">
            <span>Numero Tarjeta:</span>
            <input className={`${stylesInput} w-[200px]`} type="text" placeholder="4237-2345-9999" required />
            <span>CVV:</span>
            <input className={`${stylesInput} w-[200px]`} type="text" placeholder="123" required />
          </section>

          {/* Radio buttons */}
          <section className="flex flex-col items-start gap-y-4 text-black">
            <span className="text-center">
              <input
                type="radio"
                value="visa"
                name="radio-card"
                className="mr-1"
                checked={selected === 'visa'}
                onChange={() => setSelected('visa')} />
              Visa
            </span>
            <span className="text-center">
              <input
                type="radio"
                value="mastercard"
                name="radio-card"
                className="mr-1"
                checked={selected === 'mastercard'}
                onChange={() => setSelected('mastercard')} />
              Mastercard
            </span>
            <span className="text-center">
              <input
                type="radio"
                value="paypal"
                name="radio-card"
                className="mr-1"
                checked={selected === 'paypal'}
                onChange={() => setSelected('paypal')} />
              PayPal
            </span>
          </section>

        </section>
        <section className="mt-2 flex justify-between">
          <a href="/" className={` styles_button-base px-6 bg-transparent text-warning border border-warning  hover:text-white  hover:shadow-md transition-all ease-in-out duration-150 hover:bg-warning`}>
            CANCELAR
          </a>
          <button type="submit" className={`styles_button-base px-6 bg-purple-500 hover:bg-[#6D28D9DD] text-white transition-all ease-in-out duration-150 `}>
            COMPRAR
          </button>
        </section>
      </Form>
    </article>
  )
}
