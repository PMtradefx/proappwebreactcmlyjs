import React from "react";

interface User {
  id: number;
  cedula: string;
  nombre: string;
  correo: string;
  rol: string;
  tutor: string;
  fase: string;
}

interface UserTableProps {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
}

const UserTable: React.FC<UserTableProps> = ({ users, onEdit, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Cédula</th>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Rol</th>
          <th>Tutor</th>
          <th>Fase</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.cedula}</td>
            <td>{user.nombre}</td>
            <td>{user.correo}</td>
            <td>{user.rol}</td>
            <td>{user.tutor}</td>
            <td>{user.fase}</td>
            <td>
              <button className="btn btnedit" onClick={() => onEdit(user)}>
                Editar
              </button>
              <button
                className="btn btndanger"
                onClick={() => onDelete(user.id)}
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
