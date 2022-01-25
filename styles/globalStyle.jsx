import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    // Add theme based and other global variables
    :root {
        --primary: ${({ theme }) => theme.colors.primary ? theme.colors.primary : "black"}
    }

	html,
	body {
		padding: 0;
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
			Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	}

	a {
		color: var(--primary);
		text-decoration: none;
	}

	* {
		box-sizing: border-box;
	}
`