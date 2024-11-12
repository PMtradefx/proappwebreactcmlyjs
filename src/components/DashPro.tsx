import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import TutoriaCalendar from "./calendario";
import TutoriaModal from "./tutoria";

const DashPro: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [esProfesor, setEsProfesor] = useState<boolean>(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Header />
      <TutoriaCalendar onOpenModal={handleOpenModal} />
      <TutoriaModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        esProfesor={esProfesor}
      />
      <Footer />
    </>
  );
};

export default DashPro;
