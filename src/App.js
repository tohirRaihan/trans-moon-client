import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddService from './components/AddService/AddService';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import ManageAllOrders from './components/ManageAllOrders/ManageAllOrders';
import MyOrders from './components/MyOrders/MyOrders';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import AuthProvider from './context/AuthProvider';

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <BrowserRouter>
                    <Header></Header>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>

                        <Route exact path="/home">
                            <Home />
                        </Route>

                        <PrivateRoute path="/placeorder/:serviceId">
                            <PlaceOrder />
                        </PrivateRoute>

                        <PrivateRoute exact path="/my-orders">
                            <MyOrders />
                        </PrivateRoute>
                        <PrivateRoute exact path="/manage-all-orders">
                            <ManageAllOrders />
                        </PrivateRoute>
                        <PrivateRoute exact path="/add-service">
                            <AddService />
                        </PrivateRoute>

                        <Route exact path="/login">
                            <Login />
                        </Route>

                        <Route exact path="/register">
                            <Register />
                        </Route>

                        <Route path="*">
                            <Error />
                        </Route>
                    </Switch>
                    <Footer></Footer>
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
}

export default App;
