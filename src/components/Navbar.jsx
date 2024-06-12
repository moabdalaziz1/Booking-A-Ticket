import { MdFlightTakeoff } from 'react-icons/md';

const Navbar = () => {
  return (
    <header className="bg-slate-200 px-5 py-3 w-full">
      <nav className="font-bold flex items-center justify-between text-lg max-w-6xl mx-auto">
        <a href="/" className="flex items-center gap-2">
          <MdFlightTakeoff className="text-4xl text-indigo-800" />
          <div className='uppercase text-2xl'>
            <span className="text-slate-500">flight</span>
            <span className="text-indigo-800 ml-2">booking</span>
          </div>
        </a>
        <button
          className="bg-indigo-600 text-white px-6
          py-2 rounded-sm transition-all border-2
        hover:text-indigo-600 hover:bg-white hover:border-indigo-600"
        >
          Login
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
