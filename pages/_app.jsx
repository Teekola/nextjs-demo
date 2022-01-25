import { useRef } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { useRouter } from 'next/router'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/globalStyle'
import { theme } from '../styles/theme'
import '../styles/locomotive-scroll.css'

export default function MyApp({ Component, pageProps }) {
	const { asPath } = useRouter();
	const containerRef = useRef();

	// ... all available Locomotive Scroll instance options 
	const options = {
		smooth: true,
		lerp: 0.09,
		multiplier: 1
	}

	//...all the dependencies you want to watch to update the scroll EXCEPT the location one
	const watch = [];

	// Added Locomotive Scroll using react-locomotive-scroll
	// Added Styled Components based styling using styled-components
	// Styled Components implementation will be changed soon, when Rust support gets added (then .babelrc can be removed)
	return (
		<LocomotiveScrollProvider
			options={options}
			watch={watch}
			location={asPath}
			onLocationChange={(scroll) => scroll.scrollTo(0, { duration: 0, disableLerp: true })}
			containerRef={containerRef}
		>
			<div data-scroll-container ref={containerRef}>
				<ThemeProvider theme={theme}>
					<GlobalStyle />
					<Component {...pageProps} />
				</ThemeProvider>
			</div>
		</LocomotiveScrollProvider>
	)

}