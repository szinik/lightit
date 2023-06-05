import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const options = [
  {
    id: 1,
    name: "Guardar y salir",
  },
  {
    id: 2,
    name: "Salir sin guardar",
  },
  {
    id: 3,
    name: "Guardar y continuar",
  },
];

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const Select = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <div className="relative w-64 h-full">
          <div className="flex h-full">
            <Listbox.Button className="relative flex justify-between w-48 cursor-pointer items-center rounded-md  bg-white p-1.5 ring-1 ring-opacity-25 ring-inset ring-borders">
              <span className="ml-3 block truncate text-slate-600">
                {selected.name}
              </span>
              <span className="pointer-events-none inset-y-0 right-0 flex items-center">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-slate-600"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
          </div>
          <Transition
            show={open}
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-borders ring-opacity-25 sm:text-sm">
              {options.map((person) => (
                <Listbox.Option
                  key={person.id}
                  className={({ active }) =>
                    classNames(
                      active ? "bg-accent text-white" : "text-gray-900",
                      "relative cursor-pointer select-none py-2 pl-3 pr-9 "
                    )
                  }
                  value={person}
                >
                  {({ selected, active }) => (
                    <>
                      <div className="flex items-center">
                        <span
                          className={classNames(
                            selected ? "font-semibold" : "font-normal",
                            "ml-3 block truncate"
                          )}
                        >
                          {person.name}
                        </span>
                      </div>

                      {selected ? (
                        <span
                          className={classNames(
                            active ? "text-white" : "text-accent",
                            "absolute inset-y-0 right-0 flex items-center pr-4"
                          )}
                        >
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      )}
    </Listbox>
  );
};

export default Select;
