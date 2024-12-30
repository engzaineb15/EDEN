// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home/Home';
// import Login from './pages/Login/Login';
// import SignUp from './pages/SignUp/SignUp';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<SignUp />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import ForgetPassword from './pages/ForgetPassword/ForgetPassword';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import LocalMarket from './pages/LocalMarket/LocalMarket';
import GlobalMarket from './pages/GlobalMarket/GlobalMarket';
import MonitorMarket from './pages/MonitorMarket/MonitorMarket';
import AboutContactUs from './pages/AboutContactUs/AboutContactUs';
import DashBordHome from './pages/DashBord/DashBordHome';
// 


function App() {

 
  return (
    // <ColorModeContext.Provider value={colorMode}>
    // <ThemeProvider theme={theme}>
      // <CssBaseline />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/local" element={<LocalMarket />} />
        <Route path="/global" element={<GlobalMarket />} />
        <Route path="/monitor" element={<MonitorMarket />} />
        <Route path="/about" element={<AboutContactUs />} />
        <Route path="/dashboard" element={<DashBordHome />} />

        {/* 
         */}

            {/* <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} /> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
