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
            <label>
              Nome:
              <input
                type="text"
                name="name"
              />
            </label>
            <br />

            <label>
              Email:
              <input
                type="email"
                name="email"
              />
            </label>
            <br />

            <label>
              Mensagem:
              <textarea
                name="message"
              />
            </label>
            <br />

            <button onClick={()=>mudarMensagem()}>Enviar</button>
          </Form>
          <img src={atendente} alt="Atendente sorrindo" />
        </div>
      </Content>
      <Footer fixed={true} />
    </>
  );
};
