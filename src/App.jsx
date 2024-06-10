import './App.css';
import Booking from './components/Booking';
import Navbar from './components/Navbar';
import TicketsTable from './components/TicketsTable';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div
      className={`bg-[url(./assets/images/travel-bg1.jpg)] sm:h-screen h-full bg-cover bg-no-repeat`}
    >
      <ToastContainer theme="dark" autoClose={4000} transition={Zoom} />
      <Navbar />
      <section>
        <Booking />
        <TicketsTable />
      </section>
    </div>
  );
}

export default App;
