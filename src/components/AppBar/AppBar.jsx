import Select from "../Select";

const AppBar = () => {
  return (
    <>
      <header className="bg-primary sticky z-20 h-24">
        <nav
          className="mx-auto flex w-5/6 items-center justify-between p-6 lg:px-8 h-full"
          aria-label="Global"
        >
          <img
            src="https://lightit.io/images/Logo-white-small.svg"
            alt="Light it"
          />
          <Select />
        </nav>
      </header>
    </>
  );
};

export default AppBar;
