import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import TutoriaCalendar from "./calendarioP";
import Tutoria from "./tutoria";
import data from "./data.json"; // Asegúrate de importar el archivo JSON

const DashPro: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [esProfesor, setEsProfesor] = useState<boolean>(false);
  const [tutorias, setTutorias] = useState<any[]>([]); // Cambia el tipo según tu estructura

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData") || "{}");
    // Verificar si hay datos de usuario almacenados
    if (userData) {
      const rol = userData.rol;

      if (rol === "Profesor") {
        setEsProfesor(true);
        setTutorias(data.tutorias.profesores);
      } else if (rol === "Estudiante") {
        setEsProfesor(false);
        setTutorias(data.tutorias.estudiantes);
      }
    }
  }, []);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Header />
      <TutoriaCalendar onOpenModal={handleOpenModal} tutorias={tutorias} />
      <Tutoria
        isOpen={modalOpen}
        onClose={handleCloseModal}
        esProfesor={esProfesor}
      />
      <Footer />
    </>
  );
};

export default DashPro;
