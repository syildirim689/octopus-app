import './App.css';
import {Helmet, HelmetProvider} from 'react-helmet-async';
import HomeRoutes from './core/routes';

const appTitle = 'Octopus';

function App() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>{appTitle}</title>
            </Helmet>
            <main>
                <HomeRoutes appTitle={appTitle}/>
            </main>
        </HelmetProvider>
    );
}

export default App;
