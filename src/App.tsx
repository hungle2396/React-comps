import { useState } from "react";
import Modal from "./components/Modal";
import Button from "./components/Button";

const App = () => {
    

    return (
        <div>
            <Button primary>Open Modal</Button>
            <Modal />
        </div>
    )
};

export default App;