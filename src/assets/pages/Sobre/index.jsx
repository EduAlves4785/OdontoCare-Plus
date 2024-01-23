import React from 'react'
import { Navbar } from '../../components/Navbar'
import {Content} from './styles'
import { Footer } from '../../components/Footer'


import compromisso from '../../img/compromisso.jpeg'
import consultorio from '../../img/consultorio.png'

export const Sobre = () => {
  return (
    <>
      <Navbar/>
      <Content>
        <div className="sobre">
          <h1>Sobre Nós</h1>
          <p>Seja bem-vindo à OndontoCare Plus, sua clínica odontológica de confiança em Barueri desde 2005. Com um compromisso inabalável com a excelência em serviços odontológicos e estéticos, buscamos proporcionar um ambiente acolhedor e cuidados personalizados para garantir a saúde bucal e o sorriso radiante dos nossos pacientes.</p>
        </div>
        <div className="compromisso">
          <div>
            <h1>Nosso compromisso</h1>
            <p>Na OndontoCare Plus, acreditamos que a saúde bucal vai além do tratamento dentário convencional. Nossa equipe de profissionais altamente qualificados está dedicada a oferecer atendimento de qualidade, destacando-se pela tradição e comprometimento. Buscamos proporcionar não apenas serviços odontológicos especializados, mas também uma experiência positiva e personalizada a cada visita.</p>
          </div>
          <img src={compromisso} alt="Dentista sorrindo com braço cruzado" />
        </div>
        <div className="especialidades">
          <img src={consultorio} alt="Dentista sorrindo com braço cruzado" />
          <div>
            <h1>Nossas Especialidades</h1>
            <p>Oferecemos uma gama abrangente de especialidades odontológicas para atender às diversas necessidades de nossos pacientes. Desde Odontologia Geral até Cirurgia Oral, Periodontia e Endodontia, nossa equipe está preparada para proporcionar tratamentos eficazes e soluções personalizadas para promover a saúde bucal integral.</p>
          </div>
        </div>
      </Content>
      <Footer/>
    </>
  )
}
