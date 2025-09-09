import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme}>
            Mudar para {theme === 'light' ? 'dark' : 'light'} mode
        </button>
    );
}
export default ThemeToggleButton;