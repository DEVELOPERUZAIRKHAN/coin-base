import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/Home/Home.jsx";
import Error from "./pages/Error/Error.jsx"
import Login from "./pages/Login/Login.jsx"
import Signup from "./pages/Signup/Signup.jsx"
import styles from "./App.module.css";
import Crypto from "./pages/Crypto/Crypto.jsx";
import Protected from "./components/Protected/Protected.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import { useSelector } from "react-redux";
function App() {
  const isAuth= useSelector(state=>state.user.auth);
  
  return (

    <div className={styles.container}>
      <BrowserRouter>
        <div className={styles.layout}>
          <Navbar />

          <Routes>

 




            <Route
              path="/"
              exact
              element={
                <div className={styles.main}>
                  <Home  />
                </div>
              }
            />



            <Route
              path="submit"
              exact
              element={
                <Protected isAuth={isAuth}>

                <div className={styles.main}>
                  Submit page
                </div>
                </Protected>
              }
            />


            <Route
              path="login"
              exact
              element={
                <div className={styles.main}>
                  <Login/>
                </div>
              }
            />
            <Route
              path="logout"
              exact
              element={
                <div className={styles.main}>
                  logout page
                </div>
              }
            />





            <Route
              path="signup"
              exact
              element={
                <div className={styles.main}>
               <Signup/>
                </div>
              }
            />


            <Route
              path="blogs"
              exact
              element={
                <Protected isAuth={isAuth}>


                <div className={styles.main}>
                  <Blog/>
                </div>
                </Protected>
              }
            />


            <Route
              path="crypto"
              exact
              element={
                <div className={styles.main}>
                  <Crypto />
                </div>
              }
            />


            <Route
              path="/"
              exact
              element={
                <div className={styles.main}>
                  <Home />
                </div>
              }
            />


              <Route path="*" element={
                <div className={styles.main} >
                  <Error/>
                </div>
              } />






          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
