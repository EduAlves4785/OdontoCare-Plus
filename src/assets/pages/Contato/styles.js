import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 32rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1rem;

  .itens {
    display: flex;
    flex-direction: row;
    gap: 5rem;
    padding: 1rem;

    img {
      object-fit: cover;
      width: 200px;
      height: 350px;
    }
  }

  @media only screen and (max-width: 700px) {
    & {
      height: 32rem;
    }

    .itens {
      flex-direction: column;

      img {
        display: none;
      }
    }
  }
`;

export const Form = styled.div`
  width: 20rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: #F2F2F2;
  border-radius: 8px;
  
  div{
    width: 18rem;
    padding:.5rem;
    margin-top: .5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    input{
      margin-left: .5rem;
      border-radius: 5px;
      border: none;
      width: 80%;
      padding:.3rem;
    }

    textarea{
      margin-left: .5rem;
      border: none;
    }

  }

  button{
    cursor: pointer;
    padding: .3rem;
    width: 8rem;
    border: none;
    border-radius: 5px;
    font-weight: 500;
    font-size: 17px;
    margin-top: 2rem;
    background-color: #4FADB8;
    transition: .3s ease-in-out;
  }

  button:hover{
    background-color:#5FCFDB;
  }

  @media only screen and (max-width: 700px){
    &{
      width: 89%;
      height: 18rem;
    }

    div{
      width: 15rem;
      input{}
    }
  }
`;
