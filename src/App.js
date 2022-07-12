import { Route, Routes, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import Dashboard from './Pages/Dashboard';
import DashboardHome from './Pages/Dashboard/Routes/DashboardHome';
import AddItem from './Pages/Dashboard/Routes/Delifood/AddItem';
import AddCategory from './Pages/Dashboard/Routes/Delifood/AddCategory';
import Foods from './Pages/Dashboard/Routes/Delifood';
import Delifood from './Pages/Delifood';
import Items from './Pages/Delifood/Items';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import PageNotFound from './Pages/Shared/PageNotFound';
import AdminLogin from './Pages/AdminLogin';
import RequireAdmin from './Pages/Shared/RequireAdmin';

function App() {
  const path = useLocation().pathname;
  return (
    <>
      {!path.includes('/admin-dashboard') && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/admin-dashboard/login" element={<AdminLogin />}></Route>
        <Route
          path="/admin-dashboard"
          element={
            <RequireAdmin>
              <Dashboard />
            </RequireAdmin>
          }
        >
          <Route index element={<DashboardHome />} />
          <Route path="add-item" element={<AddItem />} />
          <Route path="add-category" element={<AddCategory />} />
          <Route path="manage-items" element={<Foods />} />
        </Route>
        <Route path="/projects/delifood/menu" element={<Delifood />}>
          <Route path=":category" element={<Items />} />
        </Route>
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      {!path.includes('/admin-dashboard') &&
        !path.includes('/projects/delifood') && <Footer />}

      <ToastContainer />
    </>
  );
}

export default App;
