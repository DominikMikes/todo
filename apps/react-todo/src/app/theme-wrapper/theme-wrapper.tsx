import { ReactList } from "@mik/react-list";
import { useCallback, useEffect, useRef, useState } from "react";
// import styles from "./theme-wrapper.module.scss";
import './theme-wrapper.css';

/* eslint-disable-next-line */
export interface ThemeWrapperProps {}

enum Themes {
	dark = 'dark',
	light = 'light'
}

export function ThemeWrapper(props: ThemeWrapperProps) {
	const [theme, setTheme] = useState(Themes.dark);
	const themeContainerRef = useRef();

	const changeTheme = useCallback(() => {
		if (theme === Themes.light) {
			setTheme(Themes.dark)
		} else {
			setTheme(Themes.light)
		}
	}, [theme]);

	useEffect(() => {
		console.log('THEME changed')
	}, [theme]);

	return (
		<div className={`container ${theme}`}>
			<button onClick={changeTheme}>Theme change</button>
			
			<div>REACT Todo List</div>
        	<ReactList theme={theme}></ReactList>
		</div>
	);
}

export default ThemeWrapper;
