import React, { useState } from "react";
import { Route, Routes, Link, useParams } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Sidebar = ({ toggleDropdown, activeDropdown }) => {
  console.log("toggleDropDown", toggleDropdown);
  console.log("toggleDropDown", activeDropdown);

  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <nav>
        <ul className="space-y-2">
          {["Agenda", "Contabilidad", "Informes", "Documentación"].map(
            (category, idx) => (
              <li className="opcion-con-desplegable" key={idx}>
                <div
                  className="flex items-center justify-between p-2 hover:bg-gray-700 cursor-pointer"
                  onClick={() => toggleDropdown(category)}
                >
                  <div className="flex items-center gap-2">
                    <div className="ml-2">
                      <MdOutlineKeyboardArrowRight />
                    </div>
                    <span>{category}</span>
                  </div>
                  <i className="fas fa-chevron-down text-xs"></i>
                </div>
                <ul
                  className={`desplegable ml-4 ${
                    activeDropdown === category ? "block" : "hidden"
                  }`}
                >
                  {category === "Agenda" && (
                    <>
                      <li>
                        <Link
                          to="/home/gestion-de-citas"
                          className="block p-2 hover:bg-gray-700 flex items-center"
                        >
                          <i className="fas fa-chevron-right mr-2 text-xs"></i>
                          Gestion de citas
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/home/polizas"
                          className="block p-2 hover:bg-gray-700 flex items-center"
                        >
                          <i className="fas fa-chevron-right mr-2 text-xs"></i>
                          Polizas
                        </Link>
                      </li>
                    </>
                  )}
                  {category === "Contabilidad" && (
                    <>
                      <li>
                        <Link
                          to="/home/tratamientos"
                          className="block p-2 hover:bg-gray-700 flex items-center"
                        >
                          <i className="fas fa-chevron-right mr-2 text-xs"></i>
                          Tratamientos
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/home/gastos"
                          className="block p-2 hover:bg-gray-700 flex items-center"
                        >
                          <i className="fas fa-chevron-right mr-2 text-xs"></i>
                          Gastos
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/home/facturas"
                          className="block p-2 hover:bg-gray-700 flex items-center"
                        >
                          <i className="fas fa-chevron-right mr-2 text-xs"></i>
                          Facturas
                        </Link>
                      </li>
                    </>
                  )}
                  {category === "Informes" && (
                    <>
                      <li>
                        <Link
                          to="/home/presupuestos"
                          className="block p-2 hover:bg-gray-700 flex items-center"
                        >
                          <i className="fas fa-chevron-right mr-2 text-xs"></i>
                          Presupuestos
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/home/informe-medico"
                          className="block p-2 hover:bg-gray-700 flex items-center"
                        >
                          <i className="fas fa-chevron-right mr-2 text-xs"></i>
                          Informe médico
                        </Link>
                      </li>
                    </>
                  )}
                  {category === "Documentación" && (
                    <>
                      <li>
                        <Link
                          to="/home/firmas-pendientes"
                          className="block p-2 hover:bg-gray-700 flex items-center"
                        >
                          <i className="fas fa-chevron-right mr-2 text-xs"></i>
                          Firmas pendientes
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/home/documentos"
                          className="block p-2 hover:bg-gray-700 flex items-center"
                        >
                          <i className="fas fa-chevron-right mr-2 text-xs"></i>
                          Documentos
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              </li>
            )
          )}
        </ul>
      </nav>
    </aside>
  );
};

const Content = () => {
  const { section } = useParams();
  console.log("section", section);
  return (
    <div>
      <h1 className="text-xl text-black">Hello</h1>
    </div>
  );
};

const Home = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (category) => {
    setActiveDropdown(activeDropdown === category ? null : category);
  };

  return (
    <div className="bg-gray-100 flex">
      <Sidebar
        toggleDropdown={toggleDropdown}
        activeDropdown={activeDropdown}
      />
      <main className="flex-1">
        <Routes>
          <Route path="/home/:section" element={<Content />} />
        </Routes>
      </main>
    </div>
  );
};

export default Home;
