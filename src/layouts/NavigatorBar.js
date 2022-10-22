import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Inicio from '../components/Inicio';
import Navbar from '../layouts/NavBar';

function NavigatorBar() {

  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Navbar />} >
            <Route index element={<Inicio />} />
            <Route path='Inicio' element={<Inicio />} />
            <Route path='*' element={<Navigate replace to='/' />} />
        </Route>
    </Routes>
</BrowserRouter>
    </>
  )
}

export default NavigatorBar;
