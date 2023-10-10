import { useState } from 'react'
import './App.css'
import logoImg from './assets/imglogo.png'

function App() {

  return (
    <div className='container'>
      <img  
        alt='Logo frases'
        src={logoImg}
        className='logo'
      />
      <h2 className='category'>Categorias</h2>
      <section className='category-area'>
        <button className='category-button'>Motivação</button>
        <button className='category-button'>Bem estar</button>
      </section>

      <button className='button-phrase'>Gerar frase</button>

      <h3 className='text-phrase'>Aqui é a frase</h3>

    </div>
  )
}

export default App
