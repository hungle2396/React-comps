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

interface OptionProps {
    label: string;
    value: string;
}

interface DropdownProps {
    options: OptionProps[];
    onChange: (option: OptionProps) => void;
    value: OptionProps | null;
}

interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}

interface ModalProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClose: () => void;
    actionBar?: JSX.Element;
}

type State = {
    count: number;
    valueToAdd: number;
}

type Action = {
    type: string;
    payload?: any;
}