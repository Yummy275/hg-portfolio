import { useState } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

function App() {
    const [activePage, setActivePage] = useState('home');

    return (
        <div className="App">
            {activePage === 'home' ? (
                <HomePage changePageTo={setActivePage}></HomePage>
            ) : activePage === 'about' ? (
                <>
                    <AboutPage
                        activePage={activePage}
                        changePage={setActivePage}
                    ></AboutPage>
                </>
            ) : activePage === 'projects' ? (
                <>
                    <ProjectsPage
                        activePage={activePage}
                        changePage={setActivePage}
                    ></ProjectsPage>
                </>
            ) : activePage === 'contact' ? (
                <>
                    <ContactPage
                        activePage={activePage}
                        changePage={setActivePage}
                    ></ContactPage>
                </>
            ) : (
                ''
            )}
        </div>
    );
}

export default App;
