import React from "react";
// import { projectAPI } from "./projectAPI";

const ProjectDetail = (props) => {
  const { project } = props;

  return (
    <div className="row">
      <div className="col-sm-6">
        <div className="card large">
          <img src={project.foto} alt={project.sekolah} className="rounded" />
          <section className="section-dark">
            <h3 className="strong">
              <strong>{project.sekolah}</strong>
            </h3>
            <p>{project.tingkatan}</p>
            <p>{project.alamat}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
