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
  const [estudiante, setEstudiante] = useState<string>("");
  const [fecha, setFecha] = useState<string>("");
  const [hora, setHora] = useState<string>("");
  const [descripcion, setDescripcion] = useState<string>("");

  const handleGuardar = () => {
    if (esProfesor) {
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
          `Estudiante seleccionado: ${estudiante} - Fecha: ${fecha} - Hora: ${hora}`
        );
        onClose();
      }
    } else {
      if (!fecha) {
        alert("Por favor, selecciona una fecha");
      } else if (!hora) {
        alert("Por favor, selecciona una hora");
      } else {
        alert(`Fecha seleccionada: ${fecha} - Hora seleccionada: ${hora}`);
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
          <div className="cerrar" onClick={onClose}>
            <img
              style={{ maxHeight: "30px", marginRight: "15px" }}
              src="/cerrar.png"
              alt=""
            />
          </div>
        </div>
        {esProfesor ? (
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
                <strong>Estudiante:</strong>
                <select
                  id="estudiante"
                  style={{
                    width: "fit-content",
                    height: "40px",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                  }}
                  value={estudiante}
                  onChange={(e) => setEstudiante(e.target.value)}
                >
                  <option value="" disabled>
                    Seleccionar estudiante
                  </option>
                  {/* Aquí puedes mapear los estudiantes disponibles */}
                  <option value="Estudiante 1">Estudiante 1</option>
                  <option value="Estudiante 2">Estudiante 2</option>
                  <option value="Estudiante 3">Estudiante 3</option>
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
              <div
                className="fechatutorianueva"
                style={{
                  fontSize: "18px",
                  paddingTop: "20px",
                  display: "flex",
                  justifyContent: "space-between  ",
                  width: "100%",
                }}
              >
                <div className="fechatutoria">
                  <p>
                    <strong>Fecha:</strong>
                    <input
                      type="date"
                      style={{
                        width: "100%",
                        height: "30px",
                        padding: "10px",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                      }}
                      value={fecha}
                      onChange={(e) => setFecha(e.target.value)}
                    />
                  </p>
                </div>
                <div className="horatutoria">
                  <p>
                    <strong>Hora:</strong>
                    <input
                      type="time"
                      style={{
                        width: "100%",
                        height: "30px",
                        padding: "10px",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                      }}
                      value={hora}
                      onChange={(e) => setHora(e.target.value)}
                    />
                  </p>
                </div>
              </div>
            </div>
            <div
              style={{ marginTop: "20px" }}
              className="Descripciontutorianueva"
            >
              <p>
                <strong>Descripción:</strong>
                <textarea
                  value={descripcion}
                  style={{
                    width: "100%",
                    height: "100px",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                  }}
                  onChange={(e) => setDescripcion(e.target.value)}
                  placeholder="Ingrese una descripción"
                />
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                style={{
                  backgroundColor: "#f68b30",
                  border: "none",
                  color: "white",
                  padding: "10px 20px",
                  cursor: "pointer",
                  borderRadius: "5px",
                }}
                onClick={handleGuardar}
              >
                Guardar
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div
              className="datostutorianueva"
              style={{
                fontSize: "18px",
                paddingTop: "20px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div
                className="fechatutorianueva"
                style={{
                  fontSize: "18px",
                  paddingTop: "20px",
                  display: "flex",
                  justifyContent: "space-between  ",
                  width: "100%",
                }}
              >
                <div className="fechatutoria">
                  <p>
                    <strong>Fecha:</strong>
                    <input
                      type="date"
                      style={{
                        width: "100%",
                        height: "30px",
                        padding: "10px",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                      }}
                      value={fecha}
                      onChange={(e) => setFecha(e.target.value)}
                    />
                  </p>
                </div>
                <div className="horatutoria">
                  <p>
                    <strong>Hora:</strong>
                    <input
                      type="time"
                      style={{
                        width: "100%",
                        height: "30px",
                        padding: "10px",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                      }}
                      value={hora}
                      onChange={(e) => setHora(e.target.value)}
                    />
                  </p>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                style={{
                  backgroundColor: "#f68b30",
                  border: "none",
                  color: "white",
                  padding: "10px 20px",
                  cursor: "pointer",
                  borderRadius: "5px",
                }}
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
