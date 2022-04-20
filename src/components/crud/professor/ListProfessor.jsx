import React from "react";
import ProfessorTableRow from "./ProfessorTableRow";
import { professors } from "./data";

const ListProfessor = () => {
  function generateTable() {
    if (!professors) return;
    return professors.map((professor, i) => {
      return <ProfessorTableRow professor={professor} key={i} />;
    });
  }

  return (
    <div>
      <h3>Lista de Professores</h3>
      <table className="table table-striped">
        <thead>
          <th>ID</th>
          <th>Nome</th>
          <th>Universidade</th>
          <th>Titulação</th>
          <th colSpan="2"></th>
        </thead>
        <tbody>{generateTable()}</tbody>
      </table>
    </div>
  );
};

export default ListProfessor;
