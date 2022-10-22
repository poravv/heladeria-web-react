import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../CSS/Cuerpo.css';
import img1 from '../imagenes/1.jpeg';
import img2 from '../imagenes/2.jpeg';
import img3 from '../imagenes/3.jpeg';
import img4 from '../imagenes/4.jpeg';
import img5 from '../imagenes/5.jpeg';
import img6 from '../imagenes/6.jpeg';


//variable de tipo Array o arreglo
const data = [
    /*1*/{producto: "Cono chocolatoso", descripcion: "Helado de crema americana forrada de chocolate              ",imagen: img1},
    /*2*/{producto: "Palito Chocolatoso",descripcion: "Helado de crema americana forrada con una capa de chocolate",imagen: img2},
    /*3*/{producto: "Paloito Cremosito",descripcion: "Paleta cremosa de 50 und                                    ",imagen: img3},
    /*4*/{producto: "Paletas Mexicanas",descripcion: "Paletas cremosas con relleno de otro sabor                  ",imagen: img4},
    /*5*/{producto: "Vasos gold",descripcion: "vasos de 200ml con crema americana y disponible en tres sabores    ",imagen: img5},
    /*6*/{producto: "Palitos Frutales",descripcion: "Palitos con saborisantes frutales                            ",imagen: img6},
];

function Productos() {
    //variable vacia de tipo array
    const [productos, setProductos] = useState([]);
    //se carga el array productos
    useEffect(() => {
        
        setProductos(data);
        console.log("Entra en useEffect para carga de datos");

    }, []);

    return (

        <>
            <div className='header'>
                <h1>Productos</h1>
            </div>
            <div className='cuerpo' style={{ backgroundColor: `white`,flexWrap:`wrap` }} >
            {
                productos.map((producto) =>{
                    
                    return <Card style={{ width: '18rem', margin: `5px` }}>
                    <Card.Img variant="top" src={producto.imagen} />
                    <Card.Body>
                        <Card.Title>{producto.producto}</Card.Title>
                        <Card.Text>
                            {producto.descripcion}
                        </Card.Text>
                        <Button style={{ backgroundColor:`#1E7548`,color:`white`,borderColor:`#1E7548` }}
                                href={`https://wa.me/595985381901?text=${`Hola me interesa el producto `+producto.producto+`favor contacteme por favor. Saludos`}`
                                    }
                                variant="primary">
                                    Solicitar producto
                        </Button>
                    </Card.Body>
                </Card>

                } )
            }
            </div>
            </>
    );
}
export default Productos;