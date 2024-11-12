// Login.tsx
import { useState, FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Users } from "../components/User";
import styles from "./css/login.module.css";
import data from "./data.json";

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [users, setUsers] = useState<Users[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setUsers(data.users);
  }, []);

  const authenticateUser = (
    username: string,
    password: string
  ): Users | null => {
    return (
      users.find(
        (user) => user.usuario === username && user.password === password
      ) || null
    );
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username && password) {
      const userData = authenticateUser(username, password);

      if (userData) {
        localStorage.setItem("userData", JSON.stringify(userData));

        switch (userData.rol) {
          case "Admin":
            navigate("/dashadm");
            break;
          case "Estudiante":
            navigate("/dashStu");
            break;
          case "Profesor":
            navigate("/dashPro");
            break;
          default:
            alert("Rol inválido");
        }
      } else {
        alert("Usuario o contraseña incorrecto");
      }
    } else {
      alert("Ingrese usuario y contraseña");
    }
  };

  return (
    <div className={styles.cuerpo}>
      <div className={styles.cuerpologin}>
        <div className={styles.loginbody}>
          <div className={styles.logoLogin}>
            <img src="/LOGO-blanco-1024x312.png" alt="Logo" />
          </div>
          <div className={styles.formulariologin}>
            <h1>Ingreso</h1>
            <form onSubmit={handleSubmit} className={styles.login}>
              <input
                type="text"
                name="usuario"
                placeholder="Ingrese su usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                name="password"
                placeholder="Ingrese su contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className={styles.botonlogin}>
                Ingresar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
