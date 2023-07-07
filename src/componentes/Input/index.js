import { styled } from "styled-components"

{/* Estiliza a Caixa de Texto */}
const Input = styled.input`
    @media(min-width: 768px) {
        float: right;
        padding: 0.4vw;
        font-size: 1.2vw;
        width: 50vw;
        border-radius: 6.6vw;
        border: 0.2vw solid rgb(79,144,253)
    }
    @media(max-width: 768px){
        float: right;
        padding: 1vw;
        font-size: 4vw;
        width: 50vw;
        border-radius: 6.6vw;
        border: 0.2vw solid rgb(79,144,253);
    }

`

export default Input