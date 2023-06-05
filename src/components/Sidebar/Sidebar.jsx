import { useEffect, useState } from "react";
import axios from "axios";
import Details from "./Details";

const menuItems = [
  {
    name: "Aberturas",
    searchKey: "aberturas",
    imgSrc: "Aberturas.png",
  },
  {
    name: "Equipamiento",
    searchKey: "equipamiento",
    imgSrc: "Equipamiento.png",
  },
  {
    name: "Terminaciones",
    searchKey: "terminaciones",
    imgSrc: "Terminaciones.png",
  },
];

const axiosOptions = {
  method: "get",
  baseURL: "https://us-central1-prueba-front-280718.cloudfunctions.net/",
};

const Sidebar = ({
  selectedMenuItemSearchKey,
  setSelectedMenuItemSearchKey,
}) => {
  const [selectedMenuItemName, setSelectedMenuItemName] = useState("");
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [data, setData] = useState([]);

  const handleMenuItemClick = (searchKey) =>
    setSelectedMenuItemSearchKey(searchKey);

  useEffect(() => {
    if (selectedMenuItemSearchKey) {
      setIsLoadingData(true);

      axios
        .get(selectedMenuItemSearchKey, axiosOptions)
        .then(({ data }) => {
          // se setea el nombre en esta instancia para que la data y el nombre cambien al mismo tiempo.
          const selectedMenuItem = menuItems.find(
            ({ searchKey }) => searchKey === selectedMenuItemSearchKey
          );
          setSelectedMenuItemName(selectedMenuItem.name);
          setData(data);
        })
        .catch(({ response: errorResponse }) =>
          console.log("ERROR", errorResponse)
        )
        .finally(() => setIsLoadingData(false));
    }
  }, [selectedMenuItemSearchKey]);

  const handleDetailsClose = () => {
    setSelectedMenuItemSearchKey("");
    setSelectedMenuItemName("");
    setData([]);
  };

  return (
    <>
      <aside className="bg-gray-100 text-gray-600 w-24 fixed drop-shadow-lg left-0 top-24 bottom-24 h-screen z-10">
        <div className="flex flex-col justify-center h-full">
          {menuItems.map(({ name, searchKey, imgSrc }) => (
            <button
              key={searchKey}
              className={`py-4 px-6 h-30 hover:bg-gray-200 flex flex-col items-center ${
                selectedMenuItemSearchKey === searchKey
                  ? "bg-gray-200"
                  : "bg-gray-100"
              }`}
              onClick={() => handleMenuItemClick(searchKey)}
            >
              <img src={imgSrc} alt={name} />
              <span className="text-xs">{name}</span>
            </button>
          ))}
        </div>
      </aside>
      <aside
        className={`bg-gray-100 text-gray-600 w-[40rem] fixed left-24 top-24 bottom-24 h-screen transition-all duration-300 transform ${
          selectedMenuItemSearchKey ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Details
          onDetailsClose={handleDetailsClose}
          {...{
            selectedMenuItemName,
            data,
            isLoadingData,
          }}
        />
      </aside>
    </>
  );
};

export default Sidebar;
