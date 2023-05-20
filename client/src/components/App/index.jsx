import './App.css'
import { BrowserRouter, useRoutes } from 'react-router-dom';
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import SignIn from '../SignIn';
import LandingPage from '../LandingPage';
import Navbar from '../Navbar';
import CheckoutSideMenu from '../CheckoutSideMenu';

function AppRoutes(){
  let routes = useRoutes([
    { path: '/', element: <LandingPage />},
    { path: '/clothes', element: <Home />},
    { path: '/electronics', element: <Home />},
    { path: '/furnitures', element: <Home />},
    { path: '/toys', element: <Home />},
    { path: '/others', element: <Home />},
    { path: '/home', element: <Home />},
    { path: '/my-account', element: <MyAccount />},
    { path: '/my-order', element: <MyOrder />},
    { path: '/my-orders', element: <MyOrders />},
    { path: '/my-orders/last', element: <MyOrder />},
    { path: '/my-orders/:id', element: <MyOrder />},
    { path: '/sign-in', element: <SignIn />},
    { path: '/*', element: <NotFound />},
  ]);

  return routes;
}

function App() {

  return (
    <BrowserRouter>
      <AppRoutes />
      <Navbar />
      <CheckoutSideMenu />
    </BrowserRouter>
  );
};

export default App;
