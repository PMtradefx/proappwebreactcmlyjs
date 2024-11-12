import { useEffect, useState } from "react";
import "./css/dashes.css"; // Asegúrate de agregar estilos para el componente

interface TutoriaCalendarProps {
  onOpenModal: () => void;
}

const TutoriaCalendar: React.FC<TutoriaCalendarProps> = ({ onOpenModal }) => {
  const [tutorias, setTutorias] = useState([]);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    // Obtener los datos de las tutorías
    const tutoriasData = [
      {
        dia: "Lunes",
        hora: "10:00",
        duracion: 2,
        fase: 1,
        salon: "Sala de profesores tiempo completo",
        estudiante: "Estudiante Uleam 1",
        proyecto: "tesis 1",
      },
      {
        dia: "Viernes",
        hora: "12:00",
        duracion: 1,
        fase: 1,
        salon: "Sala de profesores tiempo completo",
        estudiante: "Estudiante Uleam 2",
        proyecto: "tesis 2",
      },
      {
        dia: "Martes",
        hora: "16:00",
        duracion: 2,
        fase: 2,
        salon: "Sala de profesores tiempo completo",
        estudiante: "Estudiante Uleam 3",
        proyecto: "tesis 3",
      },
      {
        dia: "Miércoles",
        hora: "17:00",
        duracion: 1,
        fase: 1,
        salon: "Sala de profesores tiempo completo",
        estudiante: "Estudiante Uleam 4",
        proyecto: "tesis 4",
      },
      {
        dia: "Jueves",
        hora: "12:00",
        duracion: 2,
        fase: 2,
        salon: "Sala de profesores tiempo completo",
        estudiante: "Estudiante Uleam 5",
        proyecto: "tesis 5",
      },
      {
        dia: "Viernes",
        hora: "8:00",
        duracion: 1,
        fase: 2,
        salon: "Sala de profesores tiempo completo",
        estudiante: "Estudiante Uleam 6",
        proyecto: "tesis 6",
      },
    ];

    setTutorias(tutoriasData);
  }, []);

  const getHourIndex = (hora) => {
    const hour = hora.split(":")[0];
    return [...Array(14).keys()].findIndex((i) => 7 + i === parseInt(hour));
  };

  const getDayIndex = (dia) => {
    const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
    return days.indexOf(dia);
  };

  const handleBoxClick = (tutoria) => {
    setModalData(tutoria);
  };

  const handleCloseModal = () => {
    setModalData(null);
  };

  const handleConfirmTutoria = () => {
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
          <div className="navflechas">
            <img src="img/flecha-izquierda.png" alt="" />
            <img
              src="img/angulo-de-la-flecha-apuntando-hacia-la-derecha.png"
              alt=""
            />
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
                  <td>{hour} </td>
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
                              height: `${tutoria.duracion * 40}px`, // Ajusta la altura según sea necesario
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
              onClick={handleConfirmTutoria}
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

export default TutoriaCalendar;
