import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CircleUserRound, LogIn } from "lucide-react";

const UserMenu = () => {
  const [open, setOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setLoggedIn(!!token);
  }, []);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="text-xl cursor-pointer flex items-center justify-center p-2 rounded hover:bg-gray-700 transition"
      >
        {loggedIn ? <CircleUserRound /> : <LogIn />}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-800 text-white rounded shadow-lg z-50">
          {loggedIn ? (
            <ul>
              <li>
                <Link
                  to="/profile"
                  className="block px-4 py-2 hover:bg-gray-700"
                  onClick={() => setOpen(false)}
                >
                  Perfil
                </Link>
              </li>
              <li>
                <Link
                  to="/settings"
                  className="block px-4 py-2 hover:bg-gray-700"
                  onClick={() => setOpen(false)}
                >
                  Configurações
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    localStorage.removeItem("token");
                    setOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-700"
                >
                  Sair
                </button>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <Link
                  to="/auth"
                  className="block px-4 py-2 hover:bg-gray-700"
                  onClick={() => setOpen(false)}
                >
                  Entrar
                </Link>
              </li>
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default UserMenu;
