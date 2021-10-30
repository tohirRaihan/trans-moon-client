import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header></Header>
                <Route>

                </Route>
                <Footer></Footer>
            </BrowserRouter>
        </div>
    );
}

export default App;
