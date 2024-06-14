import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background-color: ${(props) => props.theme['base-background']};

    -webkit-font-smoothing:antialiased
}

:focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
}

body,input,button{
    font-family: 'Nunito';
    line-height: 1.6;
    font-size: 1rem;
    font-weight: 400;
    color:${(props) => props.theme['base-text']}


    

    
}

input{
    
}

a{
    font-size: 0.75rem;
    color:${(props) => props.theme.blue};
    text-decoration: none;
    padding-bottom: 10px;

    &:hover{
        text-decoration: underline;
        text-underline-offset: 6px;
    }

    

}


`
