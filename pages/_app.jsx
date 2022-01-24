import { useRef } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { useRouter } from 'next/router'
import '../styles/globals.css'
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
	const watch = [asPath];

	return (
		<LocomotiveScrollProvider
			options={options}
			watch={watch}
			location={asPath}
			onLocationChange={(scroll) => scroll.scrollTo(0, {duration: 0, disableLerp: true})}
			containerRef={containerRef}
		>
			<div data-scroll-container ref={containerRef}>
				<Component {...pageProps} />
			</div>
		</LocomotiveScrollProvider>
	)

}