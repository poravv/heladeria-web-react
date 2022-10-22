import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Inicio from '../components/Inicio';
import Productos from '../components/Productos';
import Contactos from '../components/Contactos';
import Encontranos from '../components/Encontranos';
import SobreNosotros from '../components/SobreNosotros';

import Navbar from './NavBar';

function NavigatorBar() {

  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Navbar />} >
            <Route index element={<Inicio />} />
            
            <Route path='/inicio' element={<Inicio />} />
            <Route path='/productos' element={<Productos />} />
            <Route path='/contactos' element={<Contactos/>} />
            <Route path='/encontranos' element={<Encontranos/>} />
            <Route path='/sobrenosotros' element={<SobreNosotros/>} />

            <Route path='*' element={<Navigate replace to='/' />} />
        </Route>
    </Routes>
</BrowserRouter>
    </>
  )
}

export default NavigatorBar;
