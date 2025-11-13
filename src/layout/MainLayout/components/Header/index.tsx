import Navigation from "../Navigation";

function Header() {
    return (
        <header className="bg-blue-500 text-white p-4">
            <h1 className="text-2xl font-bold">My Application Header</h1>
            <Navigation />
        </header>
    );
}
export default Header;