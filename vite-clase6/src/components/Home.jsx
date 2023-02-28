import React from 'react'
import Card from './Card'
import NavBar from './NavBar'

const Home = () => {

    let pizzas =[
        {id:1, tipo: 'Muzarella', precio:'$1200', img:'https://nuestracarta.com.ar/wp-content/uploads/2021/06/Pizza-Muzzarella.jpg'},
        {id:2, tipo: 'Fugazza', precio:'$1250', img:'https://cdn0.recetasgratis.net/es/posts/7/0/2/pizza_fugazza_7207_orig.jpg'},
        {id:3, tipo: 'Napolitana', precio:'$1350', img:'https://cdn0.recetasgratis.net/es/posts/5/2/6/pizza_napolitana_32625_orig.jpg'},
        {id:4, tipo: 'Rucula y crudo', precio:'$1500', img:'https://img-global.cpcdn.com/recipes/87bd6103d76de7fc/400x400cq70/photo.jpg'},
        {id:5, tipo: 'Especial', precio:'$1400', img:'https://media-cdn.tripadvisor.com/media/photo-s/0e/0a/27/05/pizza-especial-salsa.jpg'}
    
    ]
  return (
    <div>
        <NavBar/>
        <h1>Bienvenidos a la pizería de Camada 3</h1>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            {pizzas.map((pizza) => <Card pizza={pizza}/> )}
        </div>

    </div>
  )
}

export default Home