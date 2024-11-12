import React, { useState } from "react";

interface TutoriaModalProps {
  isOpen: boolean;
  onClose: () => void;
  esProfesor: boolean;
}

const Tutoria: React.FC<TutoriaModalProps> = ({
  isOpen,
  onClose,
  esProfesor,
}) => {
  const tutoriasEstudiantes = [
    { estudiante: "Estudiante uleam 1" },
    { estudiante: "Estudiante uleam 2" },
    { estudiante: "Estudiante uleam 3" },
    { estudiante: "Estudiante uleam 4" },
    { estudiante: "Estudiante uleam 5" },
    { estudiante: "Estudiante uleam 6" },
  ];

  const tutoriasProfesores = [{ profesor: "Ing. Patricia Quiroz" }];

  const [estudiante, setEstudiante] = useState<string>("");
  const [fecha, setFecha] = useState<string>("");
  const [hora, setHora] = useState<string>("");
  const [descripcion, setDescripcion] = useState<string>("");

  const handleGuardar = () => {
    if (esProfesor) {
      if (!fecha) {
        alert("Por favor, selecciona una fecha");
      } else if (!hora) {
        alert("Por favor, selecciona una hora");
      } else {
        alert(`Fecha seleccionada: ${fecha} - Hora seleccionada: ${hora}`);
        onClose();
      }
    } else {
      if (!estudiante) {
        alert("Por favor, selecciona un estudiante");
      } else if (!fecha) {
        alert("Por favor, selecciona una fecha");
      } else if (!hora) {
        alert("Por favor, selecciona una hora");
      } else if (!descripcion) {
        alert("Por favor, ingrese una descripción");
      } else {
        alert(
          `Estudiante seleccionado: ${estudiante} - Fecha seleccionada: ${fecha} - Hora seleccionada: ${hora}`
        );
        onClose();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "650px",
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div style={{ display: "flex" }} className="encabezado">
          <div
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
            className="tutoriaa"
          >
            <h1>
              {esProfesor
                ? "Solicitar una nueva tutoría"
                : "Asignar nueva tutoría"}
            </h1>
          </div>
          <div
            className="cerrar"
            onClick={onClose}
            style={{ cursor: "pointer" }}
          >
            <img
              style={{ maxHeight: "30px", marginRight: "15px" }}
              src="/cerrar.png"
              alt="Cerrar"
            />
          </div>
        </div>

        {esProfesor ? (
          <div
            style={{ fontSize: "30px", paddingTop: "20px" }}
            className="datostutoria"
          >
            <p>
              <strong>Tutor: </strong> {tutoriasProfesores[0].profesor}
            </p>
            <div
              className="datostutorianueva"
              style={{
                fontSize: "18px",
                paddingTop: "20px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div className="fechatutorianueva">
                <p>
                  <strong>Fecha: </strong>
                  <input
                    type="date"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                    style={{
                      width: "100%",
                      height: "30px",
                      padding: "10px",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                    }}
                  />
                </p>
              </div>
              <div className="horatutorianueva">
                <p>
                  <strong>Hora: </strong>
                  <input
                    type="time"
                    value={hora}
                    onChange={(e) => setHora(e.target.value)}
                    style={{
                      width: "100%",
                      height: "30px",
                      padding: "10px",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                    }}
                  />
                </p>
              </div>
            </div>
            <button
              style={{
                backgroundColor: "#f68b30",
                border: "none",
                color: "white",
                padding: "10px 20px",
                cursor: "pointer",
                borderRadius: "5px",
                marginTop: "10px",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              type="button"
              className="guardarTutoria"
              onClick={handleGuardar}
            >
              Guardar
            </button>
          </div>
        ) : (
          <div>
            <div
              style={{
                fontSize: "18px",
                paddingTop: "20px",
                textAlign: "center",
              }}
              className="estudiantetutorianueva"
            >
              <p>
                <strong>Estudiante: </strong>
                <select
                  value={estudiante}
                  onChange={(e) => setEstudiante(e.target.value)}
                  style={{
                    width: "fit-content",
                    height: "40px",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                  }}
                >
                  <option value="" disabled>
                    Seleccionar estudiante
                  </option>
                  {tutoriasEstudiantes.map((tutoria, index) => (
                    <option key={index} value={tutoria.estudiante}>
                      {tutoria.estudiante}
                    </option>
                  ))}
                </select>
              </p>
            </div>
            <div
              className="datostutorianueva"
              style={{
                fontSize: "18px",
                paddingTop: "20px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div className="fechatutorianueva">
                <p>
                  <strong>Fecha: </strong>
                  <input
                    type="date"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                    style={{
                      width: "100%",
                      height: "30px",
                      padding: "10px",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                    }}
                  />
                </p>
              </div>
              <div className="horatutorianueva">
                <p>
                  <strong>Hora: </strong>
                  <input
                    type="time"
                    value={hora}
                    onChange={(e) => setHora(e.target.value)}
                    style={{
                      width: "100%",
                      height: "30px",
                      padding: "10px",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                    }}
                  />
                </p>
              </div>
            </div>
            <div
              style={{ marginTop: "20px" }}
              className="Descripciontutorianueva"
            >
              <p>
                <strong>Descripción: </strong>
              </p>
              <textarea
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                style={{
                  width: "100%",
                  height: "100px",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
                placeholder="Ingrese una descripción"
              />
            </div>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <button
                style={{
                  backgroundColor: "#f68b30",
                  border: "none",
                  color: "white",
                  padding: "10px 20px",
                  cursor: "pointer",
                  borderRadius: "5px",
                }}
                type="button"
                className="guardarTutoria"
                onClick={handleGuardar}
              >
                Guardar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tutoria;
