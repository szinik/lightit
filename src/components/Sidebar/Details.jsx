import { useEffect, useState } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowPathIcon,
} from "@heroicons/react/20/solid";

const renderOptions = (data, handleOptionClick) =>
  data.map((option, index) => (
    <div
      key={index}
      className="text-left w-full p-5 text-gray-500 font-medium cursor-pointer flex justify-between bg-white rounded-lg mb-5"
      onClick={() => handleOptionClick(option)}
    >
      {option.name}
      <ChevronRightIcon className="w-6 h-6 text-gray-600" />
    </div>
  ));

const renderSelectedOptionItems = (items) => (
  <ul className="grid grid-cols-3 gap-y-2">
    {items.map(({ name, img }) => (
      <li key={name} className="flex flex-col items-center gap-3">
        <img src={img} alt={name} className="w-36 h-36" />
        <span className="text-gray-600 font-medium">{name}</span>
      </li>
    ))}
  </ul>
);

const Details = ({
  selectedMenuItemName,
  onDetailsClose,
  data,
  isLoadingData,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const clearSelectedOption = () => setSelectedOption(null);
  const handleOptionClick = (option) => setSelectedOption(option);
  const title = selectedOption ? selectedOption.name : selectedMenuItemName;

  useEffect(() => {
    clearSelectedOption();
  }, [selectedMenuItemName]);

  return (
    <div className="flex h-full">
      {isLoadingData ? (
        <div className="w-full h-full items-center flex flex-col justify-center">
          <ArrowPathIcon className="w-10 animate-spin" />
          <span>Fetching data...</span>
        </div>
      ) : (
        <div className="text-left w-full h-96 p-5">
          {selectedOption && (
            <div
              className="flex items-center mb-5 cursor-pointer"
              onClick={clearSelectedOption}
            >
              <ChevronLeftIcon className="w-5 h-5 text-gray-600" />
              <span>{selectedMenuItemName}</span>
            </div>
          )}
          <span className="text-accent text-xl font-bold">{title}</span>
          <div className="mt-5">
            {selectedOption
              ? renderSelectedOptionItems(selectedOption.items)
              : renderOptions(data, handleOptionClick)}
          </div>
        </div>
      )}
      <div className="flex justify-end items-center h-full bg-white">
        <div
          className="h-24 flex items-center bg-gray-100 rounded-r-lg cursor-pointer"
          onClick={onDetailsClose}
        >
          <ChevronLeftIcon className="w-8 h-8 text-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default Details;
