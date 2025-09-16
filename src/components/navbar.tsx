

export default function Navbar() {
    return (
        <>
            <nav className="p-4 w-full mb-30">
                <ul className="flex justify-end space-x-4 gap-6 mr-10">
                    <li>
                        <a href="#" className="text-white">Home</a>
                    </li>
                    <li>
                        <a href="#" className="text-white">About</a>
                    </li>
                    <li>
                        <a href="#" className="text-white">Contact</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}