import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, redirect, Route, RouterProvider } from 'react-router-dom'
import About from './components/About'
import ErrorUsuario from './components/ErrorPages/ErrorUsuario'
import FormDatosPersonales from './components/FormDatosPersonales'
import Home from './components/Home'
import Producto from './components/Producto'
import Root from './components/Root'
import Venta from './components/Venta'
import FormularioPago from './components/Venta/FormularioPago'
import { getUniqueId } from './globalFunctions/generatorID'
import './index.css'
import { doc, getDoc } from "firebase/firestore";
import { db } from './services/firebase'
import InfoUser from './components/InfoUser'
import swal from 'sweetalert'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />} >
    <Route errorElement={<p>Error Actualizado</p>} index element={<Home />} />

      <Route path="/personal-information/:id_info_user"
        element={<InfoUser />}
        errorElement={<ErrorUsuario />}
        loader={async ({ params }) => {
          const docRef = doc(db, "users", `${params.id_info_user}`);
          const docSnap = await getDoc(docRef);

          if (!docSnap.exists()) {
            throw new Response("Usuario No Encontrado", { status: 404 });
          } 
          const data = docSnap.data() 
          
          return { data };
        }} />

      <Route path="/producto" element={<Producto />} />
      <Route path="/producto/venta" element={<Venta />} />
      <Route path="/producto/venta/pago" errorElement={<p className='py-20'>Error</p>} element={<FormularioPago />} />
      <Route
        path="/producto/venta/pago/new"
        action={async ({ request }) => {
          await swal({
            title: "Pago realizado con éxito",
            text: "El pago se ha completado correctamente.",
            icon: "success",
          });
          const formData = await request.formData();
          const uniqueId = getUniqueId()
          const submission = {
            nombre: formData.get("nombre"),
            direccion_1: formData.get("direccion_1"),
            direccion_2: formData.get("direccion_2"),
            correo: formData.get("correo"),
            numero_telefonico: formData.get("numero_telefonico"),
          };
          console.log(submission);
          console.log(uniqueId);
          return redirect(`/producto/venta/pago/${uniqueId}`);
        }}
      />

      <Route path="/producto/venta/pago/:id_producto" element={<FormDatosPersonales />} />
      <Route path="/sobre-nosotros" element={<About />} />
    </Route>
  )
  ,{
    basename:'process.env.PUBLIC_URL',
  }
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
