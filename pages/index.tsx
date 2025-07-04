
import Card from "../components/common/Card";
import Button from "../components/common/Button";
import { PLACEHOLDER_IMAGE } from "../constants";

const HomePage: React.FC = () => {
    const handleClick = () => alert("Button clicked!");

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <Card
                title="Sample Property"
                description="This is a description of the property."
                image={PLACEHOLDER_IMAGE}
            />
            <div className="mt-4">
                <Button label="Book Now" onClick={handleClick} />
            </div>
        </div>
    );
};

export default HomePage;
