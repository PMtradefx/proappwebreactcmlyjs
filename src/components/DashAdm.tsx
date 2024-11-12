import "./css/dashadm.css";
import React, { useState, useEffect } from "react";
import UserForm from "./UserForm";
import UserTable from "./UserTable";
import Header from "./Header";
import Footer from "./Footer";
import { XMLParser } from "fast-xml-parser";

interface User {
  id: number;
  cedula: string;
  nombre: string;
  correo: string;
  rol: string;
  tutor: string;
  fase: string;
}

const DashAdm: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch("./data.xml")
      .then((response) => response.text())
      .then((xml) => {
        const parser = new XMLParser();
        const result = parser.parse(xml);
        const loadedUsers: User[] = result.users.user.map((user: any) => ({
          id: parseInt(user.id),
          cedula: user.cedula,
          nombre: user.nombre,
          correo: user.correo,
          rol: user.rol,
          tutor: user.tutor,
          fase: user.fase,
        }));
        setUsers(loadedUsers);
      })
      .catch((err) => {
        console.error("Error fetching XML:", err);
      });
  }, []);

  const saveUser = (user: User) => {
    const updatedUsers = editingUser
      ? users.map((u) => (u.id === user.id ? user : u))
      : [...users, user];

    setUsers(updatedUsers);
    localStorage.setItem("usuarios", JSON.stringify(updatedUsers));
    setEditingUser(null);
    setIsModalOpen(false);
  };

  const editUser = (user: User) => {
    setEditingUser(user);
    setIsModalOpen(true);
  };

  const deleteUser = (id: number) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
    localStorage.setItem("usuarios", JSON.stringify(updatedUsers));
  };

  return (
    <>
      <Header />
      <div className="superior">
        <div className="Titulo">
          <h1>Gestión de usuario</h1>
        </div>
        <div className="navegacioncalendario">
          <div className="botonsolicitud">
            <button
              className="resgistronuevo"
              onClick={() => {
                setEditingUser(null);
                setIsModalOpen(true);
              }}
            >
              Registrar nuevo usuario
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsModalOpen(false)}>
              ×
            </span>
            <UserForm
              user={editingUser || undefined}
              onSubmit={saveUser}
              onCancel={() => setIsModalOpen(false)}
            />
          </div>
        </div>
      )}

      <UserTable users={users} onEdit={editUser} onDelete={deleteUser} />
      <Footer />
    </>
  );
};

export default DashAdm;
