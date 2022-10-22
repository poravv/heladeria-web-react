import React, { useState, useEffect } from 'react';

//variable de tipo Array o arreglo
const data = [];

function Productos() {
    //variable vacia de tipo array
    const [productos, setProductos] = useState([]);
    
    //se carga el array productos
    useEffect(() => {
        setProductos(data);
    }, []);

    return (
        <div>

        </div>
    );
}
export default Productos;