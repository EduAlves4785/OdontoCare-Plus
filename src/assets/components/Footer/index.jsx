import React from 'react'
import {Rodape} from './styles'

export const Footer = ({fixed}) => {

  /* Está prop ela é usada em algumas páginas que possuem seu tamanho curto,dessa forma o footer não 
  fica no meio da página */

  return (
    <Rodape style={{position:fixed==true?"fixed":'relative'}}>
         <p>© 2024. OndontoCare Plus. Todos os direitos reservados</p>
    </Rodape>
  )
}
