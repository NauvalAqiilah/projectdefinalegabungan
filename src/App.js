import React from "react";
import "./app.css";
import ProjectPage from "./components/projectdefinalegabungan/ProjectPage";
import ProjectsPage from "./components/projectdefinalegabungan/ProjectsPage";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
// import HomePage from "./components/homepage/HomePage.jsx"

function App() {
  // const[data, setData]=useState([])

  // useEffect(()=>{
  //   fetch("http://localhost:3004")
  //   .then((res) => res.json())
  //   .then((json) => setData(json))
  // },[])

  return (
    <BrowserRouter>
      <header className="sticky">
        <span className="logo"></span>

        <img src="Sekiro.png" alt="logo" width="49" height="99" />

        {/* <NavLink to="/" className="button rounded">
          <span className="icon-home"></span>
          Home 
        </NavLink> */}

        <NavLink to="/projects" className="button rounded">
          <span className="icon-home" />
          Projects
        </NavLink>
      </header>

      <div className="container">
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/:id" element={<ProjectPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

// <div className="row">

//         {data.map(item =>(
//             <figure className="card">
//                 <p>{item.id}</p>
//                 <img src={item.imageUrl} alt="" />
//                 <p>Nama : {item.name}</p>
//                 <p>Deskripsi : {item.description}</p>
//                 <p>Tanggal :{item.contractSignedOn}</p>
//                 <p>Budget : {item.budget}</p>
//             </figure>
//         ))}

// </div>
