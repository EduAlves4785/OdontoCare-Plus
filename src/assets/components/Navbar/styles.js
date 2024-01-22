import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem;
  background-color:#F2E289;

  .div-img {
    width: 15rem;
    height: 5rem;
    padding: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      object-fit: cover;
      width: 500px;
      height: 150px;
    }
  }

  .itens {
    width: 35rem;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      color: black;
      width: 9rem;
      padding: 0.3rem;
      display: flex;
      text-decoration: none;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      transition: 0.5s ease;
    }

    a:hover {
      border-bottom: 1px solid gray;
    }
  }

  @media only screen and (max-width: 700px) {
    & {
        height: 4.5rem;
    }
    
    .div-img{
        padding: 0;
        justify-content:baseline;
        width: 10rem;
        height: 3rem;

        img{
            object-fit: contain;
            width: 150px;
            height: 350px;
        }
    }

    .itens{
        display: none;
    }
  }
`;
