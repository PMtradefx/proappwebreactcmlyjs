import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import TutoriaCalendar from "./calendario";
import Tutoria from "./tutoria";
import data from "./data.json"; // Asegúrate de importar el archivo JSON

const DashStu: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [esProfesor, setEsProfesor] = useState<boolean>(false);
  const [tutorias, setTutorias] = useState<any[]>([]); // Cambia el tipo según tu estructura

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData") || "{}");
    // Verificar si hay datos de usuario almacenados
    if (userData) {
      const rol = userData.rol;

      // Validar el rol del usuario
      if (rol === "Profesor") {
        setEsProfesor(true);
        // Cargar las tutorías de los profesores
        setTutorias(data.tutorias.profesores);
      } else if (rol === "Estudiante") {
        setEsProfesor(false);
        // Cargar las tutorías de los estudiantes
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

export default DashStu;
