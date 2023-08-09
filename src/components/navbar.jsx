import { ModeToggle } from "./ui/mode-toggle";

const Navbar = () => {
    return (
        <nav className="sticky top-0 w-full flex justify-between items-center py-5 bg-white dark:bg-darkModeElements lg:px-16 md:px-12 px-5 z-10 ">
            <h3 className="text-xl font-extrabold">Where in the world?</h3>
            <ModeToggle />
        </nav>
    )
}

export default Navbar