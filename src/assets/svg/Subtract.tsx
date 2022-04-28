import { FC } from "react"

export const Subtract: FC<IIcon> = ({ color = 'white', height = 30, width = 30 }) => {
	return <div>
		<svg id="Layer_1" fill={color} height={`${height}px`} width={`${width}px`} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 41.61">
			<title>minus</title><path d="M118.88,0a4,4,0,0,1,4,4V37.62a4,4,0,0,1-4,4H4a4,4,0,0,1-4-4V4A4,4,0,0,1,4,0Z" /></svg>
	</div>
}