import { FC } from "react"

export const Add: FC<IIcon> = ({ color = 'white', height = 30, width = 30 }) => {
	return <div>
		<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
			height={`${height}px`} width={`${width}px`} viewBox="0 0 1280.000000 1208.000000"
			preserveAspectRatio="xMidYMid meet">

			<g fill={color} transform="translate(0.000000,1208.000000) scale(0.100000,-0.100000)" stroke="none">
				<path d="M5157 12073 c-4 -3 -7 -899 -7 -1990 l0 -1983 -422 0 c-233 0 -898
-5 -1479 -10 -581 -5 -1288 -10 -1571 -10 l-516 -2 -6 -901 c-3 -496 -7 -1214
-9 -1595 l-4 -694 2008 8 2009 7 0 -1805 0 -1805 662 -6 c364 -4 1084 -7 1600
-7 l938 0 0 1805 0 1805 538 0 c296 0 1194 3 1995 7 l1457 6 0 1599 0 1598
-1995 0 -1995 0 0 1990 0 1990 -1598 0 c-879 0 -1602 -3 -1605 -7z"/>
			</g>
		</svg>
	</div>
}