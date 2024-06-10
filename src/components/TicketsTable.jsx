import { useSelector, useDispatch } from 'react-redux';
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { removeTicket, editTicket } from '../features/ticketSlice';
import { toast } from 'react-toastify';

const TicketsTable = () => {
  const dispatch = useDispatch();
  const { ticketData } = useSelector((store) => store.booking);

  return (
    <div className="mt-10 sm:max-w-6xl w-11/12 mx-auto flex flex-col">
      {ticketData.length === 0 ? null : (
        <table className="w-full text-center text-white capitalize font-bold mb-20">
          <thead className="text-xs uppercase bg-slate-500 text-white">
            <tr>
              <th scope="col" className="py-3">
                from
              </th>
              <th scope="col" className="py-3">
                to
              </th>
              <th scope="col" className="py-3">
                date
              </th>
              <th scope="col" className="py-3">
                guests
              </th>
              <th scope="col" className="py-3">
                class
              </th>
              <th scope="col" className="py-3">
                delete / edit
              </th>
            </tr>
          </thead>
          {ticketData.map((ticket) => (
            <tbody key={ticket.id}>
              <tr className="bg-white text-black sm:text-[16px] text-[12px]">
                <td className="md:px-6 sm:px-2 px-0 py-4">{ticket.from}</td>
                <td className="md:px-6 sm:px-2 px-0 py-4">{ticket.to}</td>
                <td className="md:px-6 sm:px-2 px-0 py-4">{ticket.date}</td>
                <td className="md:px-6 sm:px-2 px-0 py-4">{ticket.guests}</td>
                <td className="md:px-6 sm:px-2 px-0 py-4">{ticket.class}</td>
                {/* ANOTHER SOLUTION BUT WE WILL NOT BE ABLE TO USE THE ID */}
                {/* {Object.values(ticket).map((ticketValue, index) => (
                  <td key={index} className="px-6 py-4">
                    {ticketValue}
                  </td>
                ))} */}
                {/* REMOVE / EDIT BUTTONS */}
                <td className="px-6 py-4 flex justify-between gap-5 text-2xl">
                  <button
                    className="text-red-600 transition-all hover:scale-125"
                    onClick={() => {
                      const confirm = window.confirm(
                        'Are You Sure You Want To Delete This Ticket'
                      );
                      if (!confirm) return;
                      dispatch(removeTicket(ticket.id));
                      toast.success('Ticket Removed Successfully!');
                    }}
                  >
                    <MdDelete />
                  </button>
                  <button
                    className="text-emerald-600 transition-all hover:scale-125"
                    onClick={() => {
                      dispatch(editTicket(ticket.id));
                      dispatch(removeTicket(ticket.id));
                    }}
                  >
                    <FaEdit />
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      )}
    </div>
  );
};

export default TicketsTable;
