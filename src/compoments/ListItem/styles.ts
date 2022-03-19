import styled from "styled-components";

type ContainerProps = {
    done: boolean
}

export const Container = styled.div(({ done }: ContainerProps) => (
    `
    display: flex;
    align-items: center;
    background-color: #D1C8C6;
    
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    margin-top: 10px;

    input{
        width: 25px;
        height: 25px;
        margin-left: 10px;

    }

    label{
        margin-left:  10px;
        color: black; 
        font-weight: bold;
        text-decoration: ${done ? 'line-through' : 'initial'};
    }
    `
));


