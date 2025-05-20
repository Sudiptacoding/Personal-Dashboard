export default function Navbar() {
  return (
    <header className="bg-gray-800 shadow-md p-4">
      <nav className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <h1 className="md:text-xl text-sm font-bold text-blue-400 ">
          Dashboard 🦄
        </h1>
        <ul className="flex gap-6 text-sm">
          <li>
            <a href="#profile" className="hover:text-blue-300">
              Profile
            </a>
          </li>
          <li>
            <a href="#academics" className="hover:text-blue-300">
              Academics
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-300">
              Skills
            </a>
          </li>
          <li>
            <a href="#extras" className="hover:text-blue-300">
              More
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
