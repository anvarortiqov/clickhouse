import './scss/main.scss';
import Header from "./components/header/header";
// import { Routes, Route } from "react-router-dom";
// import HomePage from './pages/home/home';
// import AboutPage from "./pages/about/about";
// import ServicePage from "./pages/services/services";
// import WorkPage from "./pages/work/work";
// import NewPage from './pages/news/news';
// import ContactPage from './pages/contacts/contacts';

function App() {
  return (
    <>
      <Header/>
        {/* <Routes>
          <Route path="homepage" element={<HomePage/>} />
          <Route path="aboutpage" element={AboutPage}/>
          <Route path="servicepage" element={ServicePage} />
          <Route path="workpage" element={<WorkPage/>} />
          <Route path="newpage" element={<NewPage/>} />
          <Route path="contactpage" element={<ContactPage/>} />
      </Routes> */}
    </>
  );
}
 
export default App;
