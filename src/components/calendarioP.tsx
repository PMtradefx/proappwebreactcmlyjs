import { useState } from "react";
import "./css/dashes.css";

interface Tutoria {
  dia: string;
  hora: string;
  duracion: number;
  fase: number;
  salon: string;
  estudiante?: string;
  profesor?: string;
  proyecto?: string;
}

interface TutoriaCalendarProps {
  onOpenModal: () => void;
  tutorias: Tutoria[];
  rol: String;
}

const TutoriaCalendarP: React.FC<TutoriaCalendarProps> = ({
  onOpenModal,
  tutorias,
  rol,
}) => {
  const [modalData, setModalData] = useState<Tutoria | null>(null);

  const handleBoxClick = (tutoria: Tutoria) => {
    setModalData(tutoria);
  };

  const handleCloseModal = () => {
    setModalData(null);
  };

  const handleConfirmTutoriaP = () => {
    if (
      window.confirm("¿Estás seguro de confirmar la realización de la tutoría?")
    ) {
      if (
        window.confirm(
          "Se cumplieron los requerimientos pendientes en esta tutoría?"
        )
      ) {
        alert("Tutoría confirmada");
      } else {
        alert("Tutoría confirmada");
      }
      handleCloseModal();
    }
  };

  return (
    <div>
      <div className="superior">
        <div className="Titulo">
          <h1>Tutorías Asignadas</h1>
        </div>
        <div className="navegacioncalendario">
          <div className="botonsolicitud">
            <button className="tutorianueva" onClick={onOpenModal}>
              Solicitar Nueva tutoría
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Lunes</th>
              <th>Martes</th>
              <th>Miércoles</th>
              <th>Jueves</th>
              <th>Viernes</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(14).keys()].map((i) => {
              const hour = `${7 + i}:00`;
              return (
                <tr key={i}>
                  <td>{hour}</td>
                  {[...Array(5).keys()].map((j) => {
                    const dia = [
                      "Lunes",
                      "Martes",
                      "Miércoles",
                      "Jueves",
                      "Viernes",
                    ][j];
                    const tutoria = tutorias.find(
                      (t) => t.dia === dia && t.hora === hour
                    );
                    return (
                      <td key={j} style={{ position: "relative" }}>
                        {tutoria && (
                          <div
                            onClick={() => handleBoxClick(tutoria)}
                            style={{
                              backgroundColor:
                                tutoria.fase === 1 ? "#34C759" : "#f68b30",
                              position: "absolute",
                              top: "0",
                              left: "0",
                              width: "100%",
                              height: `${tutoria.duracion * 40}px`,
                              borderRadius: "10px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              color: "#fff",
                              fontSize: "12px",
                              cursor: "pointer",
                            }}
                          >
                            {tutoria.fase === 1
                              ? "Tutoría Fase 1"
                              : "Tutoría Fase 2"}
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {modalData && (
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
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h1>Tutoría Asignada</h1>
              <button
                onClick={handleCloseModal}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <img
                  style={{ maxHeight: "30px" }}
                  src="/cerrar.png"
                  alt="Cerrar"
                />
              </button>
            </div>
            <div style={{ fontSize: "30px", paddingTop: "20px" }}>
              <p>
                <strong>Fecha: </strong> {modalData.dia}{" "}
              </p>
              <p>
                <strong>Hora: </strong> {modalData.hora}{" "}
              </p>
              <p>
                <strong>Salon: </strong>
                {modalData.salon}{" "}
              </p>
              <p>
                <strong>Fase: </strong>{" "}
                {modalData.fase === 1 ? "Fase Diseño" : "Fase Resultados"}{" "}
              </p>
              <p>
                <strong>Proyecto: </strong>
                {modalData.proyecto}{" "}
              </p>
              <p>
                <strong>Tutor: </strong> {modalData.estudiante}{" "}
              </p>
            </div>
            <button
              onClick={handleConfirmTutoriaP}
              style={{
                backgroundColor: "#f68b30",
                border: "none",
                color: "white",
                padding: "10px 20px",
                cursor: "pointer",
                borderRadius: "5px",
                marginTop: "25px",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Confirmar tutoría
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TutoriaCalendarP;
