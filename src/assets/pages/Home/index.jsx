import React from 'react'
import { Navbar } from '../../components/Navbar'
import {Content} from './styles'
import { Footer } from '../../components/Footer'

import cirurgia from '../../img/cirurgia.jpg'
import periodontia from '../../img/periodontia.jpg'
import endodontia from '../../img/endodontia.jpg'
import odontologia from '../../img/odontologia.jpeg'
import google from '../../img/google.png'

import { IoStarSharp } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";


export const Home = () => {
  return (
    <>
      <Navbar/>
      <Content>
          <div className="apresenta-box">
              <div className="conteudo-sobreposto">
                <h2>OndontoCare Plus</h2>
                <p>Desde 2005, a OndontoCare Plus é líder em saúde bucal, proporcionando excelência nos serviços odontológicos e estéticos. Comprometidos com a sua satisfação, dedicamo-nos a priorizar a sua saúde em cada atendimento odontológico.</p>
                <button>AGENDAR AGORA</button>
              </div>
          </div>
          <div className="especialidades">
            <div className="resumo">
              <div className="sobre">
                <p>A ONDONTOCARE PLUS, em Barueri desde 2005, é referência em odontologia, oferecendo atendimento de qualidade e especializado para a saúde bucal, destacando-se pela tradição e comprometimento.</p>
                <p>Nossas especialidades são :</p>
              </div>
              <div className="especialidades-box">
                  <div>
                    <img src={odontologia} alt="Odontologia" />
                    <a href="">Ortodontia Geral</a>
                  </div>
                  <div>
                    <img src={periodontia} alt="Periodontia" />
                    <a href="">Periodontia</a>
                  </div>
                  <div>
                    <img src={endodontia} alt="Endodontia" />
                    <a href="">Endodontia</a>
                  </div>
                  <div>
                    <img src={cirurgia} alt="Cirurgia Oral" />
                    <a href="">Cirurgia Oral</a>
                  </div>
              </div>
            </div>
          </div>
          <div className="avaliacoes">
              <h4>Ultrapassamos 300 comentários no GOOGLE!</h4>
              <h2>Com a palavra dos nossos pacientes!</h2>
              <div className="avaliacao">
                <h2>Excelente</h2>
                <div>
                  <IoStarSharp fontSize={35} color='#F6BB06'/>
                  <IoStarSharp fontSize={35} color='#F6BB06'/>
                  <IoStarSharp fontSize={35} color='#F6BB06'/>
                  <IoStarSharp fontSize={35} color='#F6BB06'/>
                  <IoStarSharp fontSize={35} color='#F6BB06'/>
                </div>
                <p>Com base em <strong>321 avaliações</strong></p>
                <img src={google} alt="Logo do Google" />
              </div>
              <div className="cards-box">
                <div className="card">
                  <nav>
                    <div>
                      <h4 style={{backgroundColor:"#5d4037"}}>M</h4>
                      <div>
                        <h3>Marcos Soares</h3>
                        <p>2023-12-05</p>
                      </div>
                    </div>
                    <FcGoogle fontSize={25}/>
                  </nav>
                  <div>
                    <IoStarSharp fontSize={20} color='#F6BB06'/>
                    <IoStarSharp fontSize={20} color='#F6BB06'/>
                    <IoStarSharp fontSize={20} color='#F6BB06'/>
                    <IoStarSharp fontSize={20} color='#F6BB06'/>
                    <IoStarSharp fontSize={20} color='#F6BB06'/>
                  </div>
                  <p>Experiência incrível na OndontoCare Plus! Profissionais altamente competentes e instalações modernas. Recomendo totalmente!</p>
                </div>
                <div className="card">
                  <nav>
                    <div>
                      <h4 style={{backgroundColor:"#7B1FA2"}}>P</h4>
                      <div>
                        <h3>Priscila Almeida</h3>
                        <p>2022-01-30</p>
                      </div>
                    </div>
                    <FcGoogle fontSize={25}/>
                  </nav>
                  <div>
                    <IoStarSharp fontSize={20} color='#F6BB06'/>
                    <IoStarSharp fontSize={20} color='#F6BB06'/>
                    <IoStarSharp fontSize={20} color='#F6BB06'/>
                    <IoStarSharp fontSize={20} color='#F6BB06'/>
                    <IoStarSharp fontSize={20} color='#F6BB06'/>
                  </div>
                  <p>Atendimento excepcional na OndontoCare Plus! Equipe dedicada, ambiente acolhedor e resultados surpreendentes. Recomendo sem hesitar!</p>
                </div>
                <div className="card">
                  <nav>
                    <div>
                    <h4 style={{backgroundColor:"#FFA500"}}>H</h4>
                      <div>
                        <h3>Higor Oliveira</h3>
                        <p>2023-05-17</p>
                      </div>
                    </div>
                    <FcGoogle fontSize={25}/>
                  </nav>
                  <div>
                    <IoStarSharp fontSize={20} color='#F6BB06'/>
                    <IoStarSharp fontSize={20} color='#F6BB06'/>
                    <IoStarSharp fontSize={20} color='#F6BB06'/>
                    <IoStarSharp fontSize={20} color='#F6BB06'/>
                    <IoStarSharp fontSize={20} color='#F6BB06'/>
                  </div>
                  <p>Experiência incrível! Profissionais competentes e ambiente acolhedor. Recomendo para quem busca cuidado de qualidade para a saúde bucal.</p>
                </div>
                <div className="card">
                  <nav>
                    <div>
                      <h4 style={{backgroundColor:"#0000FF"}}>A</h4>
                      <div>
                        <h3>Ana Clara</h3>
                        <p>2022-11-02</p>
                      </div>
                    </div>
                    <FcGoogle fontSize={25}/>
                  </nav>
                  <div>
                    <IoStarSharp fontSize={20} color='#F6BB06'/>
                    <IoStarSharp fontSize={20} color='#F6BB06'/>
                    <IoStarSharp fontSize={20} color='#F6BB06'/>
                    <IoStarSharp fontSize={20} color='#F6BB06'/>
                    <IoStarSharp fontSize={20} color='#F6BB06'/>
                  </div>
                  <p>Atendimento excepcional em localização estratégica! A clínica oferece serviços de qualidade em uma área de fácil acesso, tornando a visita ainda mais conveniente.</p>
                </div>
              </div>
            </div>
      </Content>
      <Footer/>
    </>
  )
}
