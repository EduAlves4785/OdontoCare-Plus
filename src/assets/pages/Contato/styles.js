import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 30rem;
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
      max-height: 50rem;
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
  width: 350px;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  label {
    display: block;
    margin: 10px 0;
    font-size: 16px;
  }

  input {
    width: 90%;
    padding: 8px;
    font-size: 14px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }

  textarea {
    width: 90%;
    height: 40px;
    padding: 8px;
    font-size: 14px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }

  button {
    width: 50%;
    padding: 10px;
    font-size: 16px;
    background-color: #4caf50;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
  }
`;
