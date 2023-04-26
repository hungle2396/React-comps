interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    primary?: boolean;
    secondary?: boolean;
    success?: boolean;
    warning?: boolean;
    danger?: boolean;
    outline?: boolean;
    rounded?: boolean;
}

interface AccordionProps {
    items: {
        id: string;
        label: string;
        content: string;
    }[];
}

interface DropdownProps {
    options: {
        label: string;
        value: string;
    }[]
}