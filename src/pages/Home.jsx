import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';

const Home = () => {
    const {theme} = useContext(ThemeContext);

    return (
        <div>
            <h2>Página inicial {theme}</h2>
            <p>Bem-vindos à paginal inicial desta aplicação gloriosa!</p>
        </div>
    );
}

export default Home;