import React from 'react'
import Destinatario from '../components/effect/Destinatario'
import FetchUsers from '../components/effect/FetchUsers'
import Intro from '../components/effect/Intro'
import IntroUseEffect from '../components/effect/IntroUseEffect'
import FetchPokemon from '../components/effect/FetchPokemon'

const FundamentoUseEffect = () => {
  return (
    //<Intro/>
    //<IntroUseEffect/>
    //<FetchUsers/>
    <>
      <Destinatario/>
      <br></br>
      <h1>Pokemons recibidos</h1>
      <FetchPokemon/>
    </>
  )
}

export default FundamentoUseEffect

