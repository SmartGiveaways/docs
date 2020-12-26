import { createGlobalStyle } from "styled-components";

const styles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    transition: background 0.5s;
  }

  body {
    background: var(--color-background);
    color: var(--color-text);
  }
`;

export default styles;