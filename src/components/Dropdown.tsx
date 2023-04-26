import { useState } from "react";

const Dropdown = ({ options }: DropdownProps) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        
        // Normal function
        setIsOpen(!isOpen);

        // functional update - can be use for open and close component
        // setIsOpen((currentIsOpen) => !currentIsOpen);
    }

    const renderedOptions = options.map((option) => {
        return <div key={option.value}>
            {option.label}
        </div>
    });


    return (
        <div>
            <div onClick={handleClick}>Select...</div>
            {isOpen && <div>{renderedOptions}</div>}
        </div>
    )
};

export default Dropdown;