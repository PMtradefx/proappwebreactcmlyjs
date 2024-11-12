import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (userData) {
      const nombre = userData.nombre || "";
      const apellidos = userData.apellidos || "";

      setUserName(`Bienvenido, ${nombre} ${apellidos}`.trim());
    } else {
      alert("No hay usuario almacenado");
    }
  }, []);

  const handleLogout = () => {
    if (window.confirm("¿Estás seguro de que deseas cerrar sesión?")) {
      localStorage.removeItem("userData");
      navigate("/");
    }
  };

  return (
    <header>
      <div className="logo">
        <img src="/LOGO-blanco-1024x312.png" alt="Uleam" />
      </div>
      <div className="datos">
        <div className="Saludo">
          <p>{userName}</p> {}
        </div>
        <div className="logout" onClick={handleLogout}>
          <img src="/logout.png" alt="Logout" />
        </div>
      </div>
    </header>
  );
}

export default Header;
