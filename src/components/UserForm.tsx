import React, { useEffect, useState } from "react";
import { Users } from "./User";

interface UserFormProps {
  user?: Users | null;
  onSubmit: (user: Users) => void;
  onCancel: () => void;
}

const UserForm: React.FC<UserFormProps> = ({ user, onSubmit, onCancel }) => {
  const [cedula, setCedula] = useState(user?.cedula || "");
  const [nombre, setNombre] = useState(user?.nombre || "");
  const [correo, setCorreo] = useState(user?.correo || "");
  const [rol, setRol] = useState(user?.rol || "");
  const [tutor, setTutor] = useState(user?.tutor || "");
  const [fase, setFase] = useState(user?.fase || "");
  const [editUserId, setEditUserId] = useState<number | null>(
    user ? user.id : null
  );

  useEffect(() => {
    if (user) {
      setCedula(user.cedula);
      setNombre(user.nombre);
      setCorreo(user.correo);
      setRol(user.rol);
      setTutor(user.tutor);
      setFase(user.fase);
      setEditUserId(user.id);
    }
  }, [user]);

  // Funciones de validación
  function validarCedula(cedula: string) {
    const regex = /^\d{10}$/;
    return regex.test(cedula);
  }

  function validarNombre(nombre: string) {
    const regex = /^[A-Za-z\s]+$/;
    return regex.test(nombre);
  }

  function validarEmail(email: string) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function validarRol(rol: string) {
    return rol !== "";
  }
  function validarEstudiante(rol: string, tutor: string, fase: string) {
    if (rol === "estudiante") {
      if (tutor === "") {
        alert("Por favor, selecciona un tutor para el estudiante.");
        return false;
      }
      if (fase === "") {
        alert("Por favor, selecciona una fase para el estudiante.");
        return false;
      }
    }
    return true;
  }

  function validarFormulario() {
    if (!validarCedula(cedula)) {
      alert("Cédula no válida. Debe contener 10 dígitos.");
      return false;
    }

    if (!validarNombre(nombre)) {
      alert("Nombre no válido. Solo se permiten letras y espacios.");
      return false;
    }

    if (!validarEmail(correo)) {
      alert(
        "Correo no válido. Por favor, ingresa un correo electrónico válido."
      );
      return false;
    }

    if (!validarRol(rol)) {
      alert("Por favor, selecciona un rol.");
      return false;
    }

    if (!validarEstudiante(rol, tutor, fase)) {
      return false;
    }

    return true;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validarFormulario()) {
      return;
    }

    const newUser: Users = {
      id: editUserId || Date.now(),
      cedula,
      nombre,
      correo,
      rol,
      tutor,
      fase,
    };
    onSubmit(newUser);
  };

  const handleRolChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRol = e.target.value;
    setRol(selectedRol);
    if (selectedRol === "estudiante") {
      setTutor("");
      setFase("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ textAlign: "center" }}>
        <h1 id="modal-title">
          {user ? "Actualizar Usuario" : "Registrar Nuevo Usuario"}
        </h1>
        <div className="datosusuario">
          <p>
            <strong>Cédula:</strong>
            <input
              type="text"
              id="cedula"
              value={cedula}
              onChange={(e) => setCedula(e.target.value)}
              required
            />
          </p>
          <p>
            <strong>Nombre:</strong>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </p>
          <p>
            <strong>Correo electrónico:</strong>
            <input
              type="email"
              id="correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
          </p>
          <p>
            <strong>Rol:</strong>
            <select id="rol" value={rol} onChange={handleRolChange} required>
              <option value="" disabled>
                Seleccionar rol
              </option>
              <option value="estudiante">Estudiante</option>
              <option value="profesor">Profesor</option>
              <option value="admin">Administrador</option>
            </select>
          </p>
          {rol === "estudiante" && (
            <>
              <div id="tutor">
                <p>
                  <strong>Tutor:</strong>
                  <select
                    id="tutor-select"
                    value={tutor}
                    onChange={(e) => setTutor(e.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Seleccionar tutor
                    </option>
                    <option value="Tutor 1">Tutor 1</option>
                    <option value="Tutor 2">Tutor 2</option>
                    <option value="Tutor 3">Tutor 3</option>
                  </select>
                </p>
              </div>
              <div id="fasediv">
                <p>
                  <strong>Fase:</strong>
                  <select
                    id="fase"
                    value={fase}
                    onChange={(e) => setFase(e.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Seleccionar fase
                    </option>
                    <option value="fase 1">Fase de diseño</option>
                    <option value="fase 2">Fase de resultados</option>
                  </select>
                </p>
              </div>
            </>
          )}
          <input type="hidden" id="edit-user-id" value={editUserId || ""} />
        </div>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button type="submit" className="btn btnprimary">
            {user ? "Actualizar" : "Registrar"}
          </button>
          <button type="button" className="btn btndanger" onClick={onCancel}>
            Cancelar
          </button>
        </div>
      </div>
    </form>
  );
};

export default UserForm;
