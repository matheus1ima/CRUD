import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

//Páginas iniciais
import Home from "./components/Home";
import About from "./components/About";

//Menu do Estudante
import CreateStudent from "./components/crud/student/CreateStudent";
import ListStudent from "./components/crud/student/ListStudent";
import EditStudent from "./components/crud/student/EditStudent";

//Menu do Professor
import CreateProfessor from "./components/crud/professor/CreateProfessor";
import ListProfessor from "./components/crud/professor/ListProfessor";
import EditProfessor from "./components/crud/professor/EditProfessor";

function App() {
  //DropDown que o professor ensinou em sala (estudante)
  function studentDropDown() {
    return (
      <li class="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#void"
          id="navbarDropdownMenuLink"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Estudante
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li className="navitem">
            <Link to="/createStudent" className="nav-link">
              Criar Estudante
            </Link>
          </li>
          <li className="navitem">
            <Link to="/listStudent" className="nav-link">
              Listar Estudante
            </Link>
          </li>
        </ul>
      </li>
    );
  }

  //DropDown que o professor ensinou em sala (professor)
  function professorDropDown() {
    return (
      <li class="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#void"
          id="navbarDropdownMenuLink"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Professor
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li className="navitem">
            <Link to="/createProfessor" className="nav-link">
              Criar Professor
            </Link>
          </li>
          <li className="navitem">
            <Link to="/listProfessor" className="nav-link">
              Listar Professor
            </Link>
          </li>
        </ul>
      </li>
    );
  }

  return (
    <div className="container">
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <Link to={"/"} className="navbar-brand" style={{ paddingLeft: 10 }}>
          CRUD
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="navitem">
              <Link to="/" className="nav-link">
                Início
              </Link>
            </li>
            <li className="navitem">
              <Link to="/about" className="nav-link">
                Sobre
              </Link>
            </li>
            {studentDropDown()}
            {professorDropDown()}
          </ul>
        </div>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="about" element={<About />} />

        <Route path="createStudent" element={<CreateStudent />} />
        <Route path="listStudent" element={<ListStudent />} />
        <Route path="editStudent/:id" element={<EditStudent />} />

        <Route path="createProfessor" element={<CreateProfessor />} />
        <Route path="listProfessor" element={<ListProfessor />} />
        <Route path="editProfessor/:id" element={<EditProfessor />} />
      </Routes>
    </div>
  );
}

export default App;
