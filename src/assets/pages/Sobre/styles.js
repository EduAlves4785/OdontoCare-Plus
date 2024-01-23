import styled from "styled-components";

export const Content=styled.div`
    width: 100%;
    height: 70rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;


    .sobre{
        width: 60rem;
        height: 15rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 3rem;
        text-align: center;
        padding: .8rem;
        border-radius: 5px;
        background-color: #F2F2F2;

        p{
            font-size: 19px;
        }

    }

    .compromisso{
        width: 60rem;
        gap: 3rem;
        height: 20rem;
        padding: 1rem;
        display: flex;
        border-radius: 5px;
        justify-content: space-between;
        background-color: #F2F2F2;

        div{
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }


        img{
            width: 400px;
            border: .5px solid #F2F2F2;
            border-radius: 8px;
            object-fit: cover;
        }

        p{
            font-size: 19px;
        }
    }

    .especialidades{
        width: 60rem;
        gap: 3rem;
        height: 20rem;
        padding: 1rem;
        display: flex;
        border-radius: 5px;
        justify-content: space-between;
        background-color: #F2F2F2;

        div{
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }


        img{
            width: 400px;
            border: .5px solid #F2F2F2;
            border-radius: 8px;
            object-fit: cover;
        }

        p{
            font-size: 19px;
        }
    }

    @media only screen and (max-width: 700px){
        &{
            height: 90rem;
        }
        
        .sobre{
            width: 87%;
            gap: 1rem;
            height: 17rem;

            p{
                font-size: 17px;
            }
        }

        .compromisso{
            width: 87%;
            height: 32rem;
            gap: 1rem;
            flex-direction: column;

            div{
                text-align: center;
            }

            img{
                width: 250px;
            }

            p{
                font-size: 17px;
            }
        }

        .especialidades{
            width: 87%;
            height: 30rem;
            gap: 1rem;
            flex-direction: column;

            div{
                text-align: center;
                font-size: 17px;
            }

            img{
                width: 250px;
            }

            p{
                font-size: 17px;
            }
        }
    }

`
