import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Top from "./Pages/Top";
import About from "./Pages/About";
import Novel from "./Pages/Novel";
import Illust from "./Pages/Illust";
import Comic from "./Pages/Comic";
import Dialy from "./Pages/Dialy";
import Contact from "./Pages/Contact";
import Tech from "./Pages/Tech";
import "./App.css";
import SideMenu from "./Components/SideMenu";
import Admin from "./Pages/Admin";
import PrivateRoute from "./Util/PrivateRoute";
import LoginPage from "./Pages/Login";
import { AuthProvider } from "./Scripts/Auth";

function App() {
  return (
    <>
      <header className="App-header" />
      <body>
        <Box sx={{ display: "flex" }}>
          <SideMenu width={200} />
        </Box>
        <Box component="main" sx={{ flexGrow: 1, p: 3, ml: "200px" }}>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Top />} />
              <Route path="/about" element={<About />} />
              <Route path="/novel" element={<Novel />} />
              <Route path="/illust" element={<Illust />} />
              <Route path="/comic" element={<Comic />} />
              <Route path="/dialy" element={<Dialy />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/tech" element={<Tech />} />
              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/admin"
                element={
                  <PrivateRoute>
                    <Admin />
                  </PrivateRoute>
                }
              />
            </Routes>
          </AuthProvider>
        </Box>
      </body>
    </>
  );
}

export default App;
