import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, redirect, Route, RouterProvider } from 'react-router-dom'
import About from './components/About'
import DatosPersonales from './components/DatosPersonales/DatosPersonales'
import Home from './components/Home'
import Producto from './components/Producto'
import Root from './components/Root'
import Venta from './components/Venta'
import FormularioPago from './components/Venta/FormularioPago'
import { getUniqueId } from './globalFunctions/generatorID'
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />} >
      <Route index element={<Home />} />

      <Route path="producto" element={<Producto />} />
      <Route path="producto/venta" element={<Venta />} />
      <Route path="producto/venta/pago" errorElement={<p className='py-20'>Error</p>} element={<FormularioPago />} />
      <Route
        path="producto/venta/pago/new"
        action={async ({ request }) => {
          const formData = await request.formData();
          const uniqueId = getUniqueId()
          const submission = {
            nombre: formData.get("nombre"),
            direccion_1:formData.get("direccion_1"),
            direccion_2:formData.get("direccion_2"),
            correo: formData.get("correo"),
            numero_telefonico:formData.get("numero_telefonico"),
          };
          console.log(submission);
          console.log(uniqueId);
          return redirect(`/producto/venta/pago/${uniqueId}`);
        }} 
      />

      <Route path="producto/venta/pago/:id_producto" element={<DatosPersonales />} />
      <Route path="sobre-nosotros" element={<About />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
