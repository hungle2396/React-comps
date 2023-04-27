import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

const Dropdown = ({ options, value, onChange }: DropdownProps) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const handleOptionClick = (option: OptionProps) => {
        // Update the option value
        onChange(option);

        // Close the option selection
        setIsOpen(false);
    };

    const renderedOptions = options.map((option) => {
        return (
            <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => handleOptionClick(option)} key= {option.value}>
                {option.label}
            </div>
        )
    });


    return (
        <div className="w-48 relative">
            <Panel className="flex justify-between items-center cursor-pointer" onClick={handleClick}>{value?.label || "Select..."}
            <GoChevronDown />
            </Panel>
            {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
        </div>
    )
};

export default Dropdown;