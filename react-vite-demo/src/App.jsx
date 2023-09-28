import {AuthProvider} from './components/auth/useAuth.jsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import Home from './components/view/Home.jsx';
import Modules from './components/view/Modules.jsx';
import Students from './components/view/Students.jsx';
import PageNotFound from './components/view/PageNotFound.jsx';
import Login from './components/view/Login.jsx';


function App() {
  //Initialisation ------------------------------------------------------
  //state  --------------------------------------------------------------
  //Handlers ------------------------------------------------------------
  //View ----------------------------------------------------------------

  return (
    <AuthProvider>  
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element= {<Home/>}/>
            <Route path="/modules" element={<Modules/>} />
            <Route path="/students"element={<Students/>}/>
            <Route path="/login"element={<Login/>}/>
            <Route path="/*"element={<PageNotFound />}/>
          </Routes>    
        </Layout>
      </BrowserRouter>
    </AuthProvider>
   
  )
}

export default App
