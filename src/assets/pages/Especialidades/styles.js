import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 20rem;

  h5{
    color: #16DBC8;
    display: none;
  }

  .container {
    width: 80%;
    height: 15rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .itens {
    position: relative;
  }

  .original-div {
    width: 15rem;
    height: 10rem;
    box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.75);
    background-color: #3498db;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    cursor: pointer;
  }

  .hover-div {
    position: absolute;
    top: 20%;
    left: 0;
    width: 13rem;
    height: 8rem;
    padding: 1rem;
    text-align: center;
    background-color: #5FCFDB;
    color: #fff;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: top 0.3s ease-in-out;
    cursor: pointer;
  }

  .itens:hover .hover-div {
    opacity: 1;
    top: 0;
  }

  @media only screen and (max-width: 700px){
    &{
      height: 60rem;
    }
    h5{
      display:block ;
    }

    .container{
      flex-direction: column;
      height: 50rem;
    }

  }
`;
