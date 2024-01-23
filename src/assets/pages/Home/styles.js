import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 115rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;

  @media only screen and (max-width: 700px) {
    height: 200rem;
  }

  // Apresentando

  .apresenta-box {
    position: relative;
    background-image: url("https://mdfrossard.com.br/images/6d06d69a-0490-4136-aa10-ca875b8ef70e_Sorriso-perfeito.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 30rem;
    overflow: hidden;
    border-radius: 5px;

    &::before {
      filter: brightness(0.6);
      content: "";
      position: absolute;
      top: -10%;
      right: -5%;
      bottom: -10%;
      left: -10%;
      background: linear-gradient(
        to top right,
        rgba(255, 255, 255, 0.8),
        rgba(255, 255, 255, 0)
      );
      pointer-events: none; /* Garante que a camada não capture eventos do mouse */
    }

    .conteudo-sobreposto {
      gap: 20px;
      max-height: 30rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      color: #fff;
      padding: 20px;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-between;

      h2 {
        font-size: 30px;
      }

      p {
        font-size: 20px;
      }

      button {
        width: 10rem;
        height: 2rem;
        border: none;
        font-size: 16px;
        font-weight: 400;
        cursor: pointer;
        border-radius: 5px;
        background-color: #fafd8f;
        transition: 0.3s;
      }

      button:hover {
        color: #4ed1d9;
      }
    }
  }

  @media only screen and (max-width: 700px) {
    .apresenta-box {
      height: 35rem;
      z-index: 0;

      .conteudo-sobreposto {
        h2 {
          font-size: 20px;
        }

        p {
          font-size: 18px;
        }
      }
    }
  }

  // Especialidades
  .resumo {
    padding: 1rem;
    margin: 2rem auto;
    width: 95%;
    height: 38rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    .sobre {
      display: flex;
      flex-direction: column;
      gap: 30px;
      font-size: 18px;
      height: 35rem;
    }

    .especialidades-box {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      padding: 1rem;
      place-items: center;
      gap: 50px;

      div {
        background-color: #f8f8f8;
        width: 25rem;
        height: 11rem;
        padding-bottom: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        overflow: hidden;
        border-radius: 8px;
        transition: 0.3s;

        a {
          color: black;
          text-decoration: none;
          font-size: 19px;
        }

        img {
          transform: scale(1.1);
          object-fit: cover;
          width: 500px;
          height: 140px;
          filter: grayscale(.5);
        }

        &:hover {
          img{
            filter: grayscale(0);
          }
          box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
        }
      }
    }

    @media only screen and (max-width: 700px) {
      & {
        padding: 0.2rem;
        height: 68rem;
      }

      .resumo {
        background-color: red;
      }

      .sobre {
        font-size: 15px;
        gap: 20px;
      }

      .especialidades-box {
        padding: 0.2rem;
        grid-template-columns: 1fr;

        div {
          width: 15rem;
        }
      }
    }
  }

  // Avaliações

  .avaliacoes {
    padding: 1rem;
    margin: 2rem auto;
    width: 95%;
    height: 38rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;

    h4 {
      font-size: 19px;
      color: #5fcfdb;
    }

    h2 {
      font-size: 40px;
    }

    .avaliacao {
      padding: 0.5rem;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      gap: 10px;

      img {
        width: 100px;
      }
    }

    .cards-box {
      width: 98%;
      padding: 1rem;
      height: 15rem;
      display: flex;
      justify-content: space-between;

      .card {
        background-color: #eeeeee;
        border-radius: 5px;
        width: 16rem;
        height: auto;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 6px;

        h4 {
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          width: 0.8;
          height: 1rem;
          border-radius: 50%;
          margin-right: 0.5rem;
        }

        nav {
          display: flex;
          justify-content: space-between;

          p {
            font-size: 13px;
            color: #7a7a7a;
          }

          div {
            display: flex;
            width: 15rem;

            div {
              width: 10rem;
              display: flex;
              flex-direction: column;
            }
          }
        }
      }
    }

    @media only screen and (max-width: 700px) {
      & {
        width: 16rem;
        height: 80rem;
      }

      h4 {
        font-size: 14px;
      }

      h2 {
        font-size: 18px;
      }

      .cards-box{
        width: 85%;
        height: auto;
        padding: 1.5rem;
        align-items: center;
        gap: 10px;
        flex-direction: column;

        .card{
          width: 13rem;
        }

      }
    }
  }
`;
