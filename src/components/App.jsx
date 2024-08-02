import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../redux/auth/operations";
import { selectIsRefreshing } from "../redux/auth/selectors";
import Loader from './Loader/Loader';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const ContactPage = lazy(() => import('../pages/ContactPage/ContactPage'));

const App = () => {
    const dispatch = useDispatch();
    const isRefreshing = useSelector(selectIsRefreshing);
useEffect(() => {
    dispatch(refreshUser());
}, [dispatch]);
return isRefreshing ? (
    <Loader/>
) : (
    <Layout>
        <Suspense fallback = {<Loader/>}>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RestrictedRoute component={<RegisterPage />} redirectTo="/contacts"/>}/>
        <Route path="/login" element={<RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />} />
        <Route path="/contacts" element={ <PrivateRoute component={<ContactPage />} redirectTo="/login"/>} />
        </Routes>
        </Suspense>
    </Layout>
);
};
export default App;