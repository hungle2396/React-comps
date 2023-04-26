import { GoBell } from "react-icons/go";
import Button from "../components/Button";

const ButtonPage = () => {

    const handleClick = () => {
        console.log("Click!");
    };

    return (
        <div>
            <div>
                <Button className="mb-5" secondary outline rounded onClick={handleClick}>
                    <GoBell />
                    Button 1
                </Button>
            </div>
            <div>
                <Button danger outline>Button 2</Button>
            </div>
            <div>
                <Button warning>Button 3</Button>
            </div>
            <div>
                <Button primary outline>Button 4</Button>
            </div>
            <div>
                <Button secondary rounded>Button 5</Button>
            </div>
            <div>
                <Button primary outline>Button 6</Button>
            </div>
        </div>
    )
};

export default ButtonPage;