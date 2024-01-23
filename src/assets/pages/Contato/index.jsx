import React, { useState } from "react";
import { Navbar } from "../../components/Navbar";
import { Content,Form} from "./styles";
import { Footer } from "../../components/Footer";
import atendente from '../../img/atendente.jpg'

export const Contato = () => {
  const[message,setMessage]=useState("Ligamos para você")

    const mudarMensagem=()=>{
      setMessage("Obrigado, entraremos em contato!")
    }

  return (
    <>
      <Navbar />
      <Content>
        <h1>{message}</h1>
        <div className="itens">
          <Form  style={{ display: message !== "Ligamos para você" ? "none" : "block" }}> 
            <div>
              <label htmlFor="nome">Nome:</label>
              <input type="text" name="nome" required/>
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="text" name="email" required/>
            </div>
            <div>
              <label htmlFor="mensagem">Mensagem:</label>
              <textarea name="mensagem"cols="32" rows="6"></textarea>
            </div>
            <button onClick={()=>mudarMensagem()}>Enviar</button>
          </Form>
          <img src={atendente} alt="Atendente sorrindo" />
        </div>
      </Content>
      <Footer fixed={true} />
    </>
  );
};
