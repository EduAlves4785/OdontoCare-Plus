import React from "react";
import { Navbar } from "../../components/Navbar";
import { Content } from "./styles";
import { Footer } from '../../components/Footer'

export const Especialidades = () => {
  return (
    <>
      <Navbar />
      <Content>
        <h1>Conheça nossas especialidades</h1>
        <h5>Clique nos cards para ver os detalhes</h5>
        <div className="container">
          <div className="itens">
            <div class="original-div">Ortodontia</div>
            <div class="hover-div">Ramo da odontologia que previne ou trata o posicionamento irregular dos dentes.</div>
          </div>
          <div className="itens">
            <div class="original-div">Periodontia</div>
            <div class="hover-div">É a ciência que estuda e trata as doenças do sistema de implantação e suporte dos dentes( parte óssea e gengiva)</div>
          </div>
          <div className="itens">
            <div class="original-div">Endodontia</div>
            <div class="hover-div">Parte da odontologia que estuda e trata os tecidos da polpa e da raiz dos dentes, assim como suas doenças. Vulgarmente conhecida como tratamento de canal.</div>
          </div>
          <div className="itens">
            <div class="original-div">Cirurgia Oral</div>
            <div class="hover-div">Especialidades odontológicas para restaurar a saúde bucal, função mastigatória e estética do paciente em um abordagem holística.</div>
          </div>
        </div>
      </Content>
      <Footer fixed={true}/>
    </>
  );
};
