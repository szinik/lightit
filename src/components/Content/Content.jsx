import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowUpIcon,
  ArrowRightIcon,
  PlusIcon,
  MinusIcon,
} from "@heroicons/react/20/solid";

const IconButton = ({ children, onClick }) => (
  <button onClick={onClick} className="w-6 h-6 text-gray-600 text-4xl">
    {children}
  </button>
);

const Content = ({ isSidebarOpen }) => {
  return (
    <main className="flex-1 ml-24">
      {isSidebarOpen && (
        <div className="fixed flex w-80 z-90 top-[8rem] right-10 justify-between">
          <div className="w-36 h-14 bg-gray-50 rounded-lg drop-shadow-lg flex flex-col justify-evenly items-center">
            <button
              onClick={() => console.log("Fijar button clicked")}
              className="w-full h-full"
            >
              <span className="text-gray-600 text-xl">Fijar</span>
            </button>
          </div>
          <div className="w-36 h-14 bg-gray-50 rounded-lg drop-shadow-lg flex flex-col justify-evenly items-center">
            <button
              onClick={() => console.log("Borrar button clicked")}
              className="w-full h-full"
            >
              <span className="text-gray-600 text-xl">Borrar</span>
            </button>
          </div>
        </div>
      )}
      <div className="fixed flex w-36 z-90 bottom-10 right-10 justify-between">
        <div className="w-10 h-20 bg-gray-50 rounded-lg drop-shadow-lg flex flex-col justify-evenly items-center">
          <IconButton onClick={() => console.log("Plus icon clicked")}>
            <PlusIcon />
          </IconButton>
          <IconButton onClick={() => console.log("Minus icon clicked")}>
            <MinusIcon />
          </IconButton>
        </div>
        <div className="w-20 h-20 bg-gray-50 rounded-lg drop-shadow-lg flex flex-col justify-center items-center">
          <IconButton onClick={() => console.log("Arrow up icon clicked")}>
            <ArrowUpIcon />
          </IconButton>
          <div className="flex justify-around w-full">
            <IconButton onClick={() => console.log("Arrow left icon clicked")}>
              <ArrowLeftIcon />
            </IconButton>
            <IconButton onClick={() => console.log("Arrow right icon clicked")}>
              <ArrowRightIcon />
            </IconButton>
          </div>
          <IconButton onClick={() => console.log("Arrow down icon clicked")}>
            <ArrowDownIcon />
          </IconButton>
        </div>
      </div>
    </main>
  );
};

export default Content;
