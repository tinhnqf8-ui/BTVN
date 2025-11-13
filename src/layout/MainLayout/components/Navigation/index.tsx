import { Link } from "react-router";

function Navigation() {
    return (
        <nav className=" p-4">
            <ul className="flex space-x-4">
                <li><Link to="/" className="text-white hover:underline">Home</Link></li>
                <li><Link to="about" className="text-white hover:underline">ABOUT</Link></li>

            </ul>
        </nav>
    );
}
export default Navigation;