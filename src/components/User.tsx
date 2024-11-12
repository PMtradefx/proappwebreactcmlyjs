export interface Users {
  id: number;
  cedula: string;
  usuario: string;
  password: string;
  nombre: string;
  apellidos: string;
  rol: "Admin" | "Estudiante" | "Profesor";
  correo: string;
  tutor?: string;
  fase?: string;
}
export default Users;
