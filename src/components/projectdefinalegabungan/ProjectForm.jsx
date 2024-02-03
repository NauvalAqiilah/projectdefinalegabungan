import React, { useState } from "react";
import Project from "./Project";

const ProjectForm = ({ project: initialProject, onSave, onCancel }) => {
  const [project, setProject] = useState(initialProject);
  const [errors, setErrors] = useState({
    sekolah: "",
    tingkatan: "",
    alamat: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValid()) return;
    onSave(project);
  };

  const handleChange = (event) => {
    const { type, name, value, checked } = event.target;

    let updatedValue = type === "chechbox" ? checked : value;

    if (type === "number") {
      updatedValue = Number(updatedValue);
    }

    const change = {
      [name]: updatedValue,
    };

    let updatedProject;

    setProject((p) => {
      updatedProject = new Project({ ...p, ...change });
      return updatedProject;
    });

    setErrors(() => validate(updatedProject));
  };

  const validate = (project) => {
    let errors = {
      sekolah: "",
      tingkatan: "",
      alamat: ""
    };

    if (project.sekolah.length === 0) {
      errors.sekolah = "Isi nama sekolah";
    }
    if (project.sekolah.length > 0 && project.sekolah.length < 3) {
      errors.sekolah = "Nama sekolah minimal memiliki lebih dari 3 huruf";
    }
    if (project.tingkatan.length === 0){
      errors.tingkatan = "Isi tingkatan sekolahnya"
    }
    if (project.alamat.length === 0){
      errors.alamat = "Isi alamatnya"
    }
    return errors;
  };

  const isValid = () => {
    return (
      errors.sekolah.length === 0 &&
      errors.tingkatan.length === 0 &&
      errors.alamat.length === 0
    );
  };

  return (
    <form className="input-group vertical" onSubmit={handleSubmit}>
      <label htmlFor="sekolah"> Nama Sekolah </label>
      <input
        type="text"
        name="sekolah"
        placeholder="Masukan Nama Sekolah"
        value={project.sekolah}
        onChange={handleChange}
      />

      <label htmlFor="tingkatan"> Tingkatan </label>
      <input
        type="Text"
        name="tingkatan"
        placeholder="Masukan Tingkatan Sekolah"
        value={project.tingkatan}
        onChange={handleChange}
      />

      <label htmlFor="alamat"> Alamat </label>
      <textarea
        type="text"
        name="alamat"
        placeholder="Masukan Alamat Sekolah"
        value={project.alamat}
        onChange={handleChange}
      ></textarea>

      {/* <label htmlFor="isActive"> Active </label>
      <input
        type="checkbox"
        name="isActive"
        value={project.isActive}
        onChange={handleChange}
      /> */}

      <div className="input-group">
        <button className="primary bordered medium">Save</button>
        <span />
        <button
          type="button"
          className="danger bordered medium secondary"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ProjectForm;
