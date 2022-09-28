import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin:0;
    padding:0;
    box-sizing:border-box;
    outline:0;
}
:root {
    --white: hsla(0, 0%, 100%, 1);
    --vanilla: #f1ede0;
    --black: #0c0d0d;
    --light-blue: background: hsla(203, 24%, 85%, 0.18);
    --dark-blue:hsla(214, 51%, 49%, 1);
    --gray: #F2F2F2;
    --red: #c35030;
}
body{
    background-color:var(--gray);
    color:var(--black);
}
body, input, button {
    font-family: 'Source Sans Pro';
    font-size: 1rem;
}

`