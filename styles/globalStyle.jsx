import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    // Add theme based and other global variables
	:root {
    	--primary: ${({ theme }) => theme.colors.primary ? theme.colors.primary : "black"};
		--text: ${({ theme }) => theme.colors.text ? theme.colors.text : "black"};
	}

	*, *::before, *::after {
    	box-sizing: border-box;
	}

	* {
		margin: 0;
		padding: 0;
	}

	html, body {
		height: 100%;
	}

	body {
		/* FONT */
		font-size: 16px;
		font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
			Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
		color: var(--text);
		line-height: 1.5;
		-webkit-font-smoothing: antialiased;
	}

	img, picture, video, canvas, svg {
		display: block;
		max-width: 100%;
	}

	input, button, textarea, select {
		font: inherit;
		border: none;
	}

	p, h1, h2, h3, h4, h5, h6 {
		overflow-wrap: break-word;
	}

	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	#root, #__next {
		isolation: isolate;
	}
`