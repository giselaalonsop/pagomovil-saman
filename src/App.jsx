import { FaClipboard } from "react-icons/fa"; // Importamos el ícono de copiar
import "./App.css";

function App() {
  // Función para copiar al portapapeles
  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("¡Texto copiado al portapapeles!");
      })
      .catch((err) => {
        alert("Error al copiar: " + err);
      });
  };

  return (
    <>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      <div className="flex items-center justify-center h-screen w-screen px-4">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto w-full">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl rounded-3xl"></div>
          <div className="relative px-4 py-6 bg-white shadow-lg sm:rounded-3xl rounded-3xl sm:p-10">
            <div className="max-w-md mx-auto">
              <h2 className="text-xl font-bold text-gray-700 mb-4 text-center sm:text-left">
                Datos de Pago Bancarios:
              </h2>
              <div className="text-left space-y-2">
                <p className="text-black flex justify-between items-center">
                  <span className="font-bold text-gray-600">Banco:</span>
                  <span>Provincial</span>
                  <div />
                </p>
                <p className="text-black flex justify-between items-center">
                  <span className="font-bold text-gray-600">Teléfono:</span>
                  <span>04144999947</span>
                  <FaClipboard
                    className="cursor-pointer text-gray-600 hover:text-gray-800"
                    onClick={() => copyToClipboard("04144999947")}
                  />
                </p>
                <p className="text-black flex justify-between items-center">
                  <span className="font-bold text-gray-600">Cédula:</span>
                  <span>V-15722705</span>
                  <FaClipboard
                    className="cursor-pointer text-gray-600 hover:text-gray-800"
                    onClick={() => copyToClipboard("V-15722705")}
                  />
                </p>
              </div>
            </div>

            <div className="w-full flex justify-center mt-4"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
