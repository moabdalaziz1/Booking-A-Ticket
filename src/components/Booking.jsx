import { useState, useMemo } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { booked } from '../features/ticketSlice';
import { toast } from 'react-toastify';

const Booking = () => {
  // INVOKE THE USEDISPATCH HOOK TO BE USED.
  const dispatch = useDispatch();
  // ACCESS THE APP WHOLE STATE.
  const { ticketData, ticketEdit, isEditClicked } = useSelector(
    (store) => store.booking
  );
  // MAKING A STATE SO WE CAN HANDLE THE FORM FIELDS VALUES.
  const [formData, setFormData] = useState({
    id: 0,
    from: '',
    to: '',
    date: '',
    guests: '',
    class: '',
  });
  // WE GONNA CHANGE THE FORMDATA VALUES WHEN ONLY THE STATE OF isEditClicked CHANGES (useMemo).
  useMemo(() => {
    return setFormData((prevState) => {
      return {
        ...prevState,
        from: ticketEdit.from,
        to: ticketEdit.to,
        date: ticketEdit.date,
        guests: ticketEdit.guests,
        class: ticketEdit.class,
      };
    });
  }, [isEditClicked]);
  // CONTROL THE FORM FIELDS.
  const handleFormChange = ({ target: { name, value } }) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // PREVENT THE DEFAULT BEHAVIOUR (RELOAD WHEN SUBMIT THE FORM).
  const submitForm = (e) => {
    e.preventDefault();
  };

  return (
    <div className="md:mt-[160px] mt-20 bg-white rounded-md sm:max-w-6xl w-11/12 mx-auto">
      <form className="flex flex-col md:flex-row" onSubmit={submitForm}>
        {/* FROM */}
        <div className="py-1.5 px-2.5 border-r-2 flex-1">
          <p className="capitalize font-medium text-slate-600">from</p>
          <select
            name="from"
            id="from"
            className="capitalize outline-none cursor-pointer py-2 w-full"
            required
            value={formData.from}
            onChange={handleFormChange}
          >
            <option disabled hidden value="">
              please select
            </option>
            <option value="cairo">cairo</option>
            <option value="riyadh">riyadh</option>
            <option value="new york">new york</option>
            <option value="paris">paris</option>
            <option value="rome">rome</option>
          </select>
        </div>

        {/* TO */}
        <div className="py-1.5 px-2.5 border-r-2 flex-1">
          <p className="capitalize font-medium text-slate-600">to</p>
          <select
            name="to"
            id="to"
            className="capitalize outline-none cursor-pointer py-2 w-full"
            required
            value={formData.to}
            onChange={handleFormChange}
          >
            <option disabled hidden value="">
              please select
            </option>
            <option value="cairo">cairo</option>
            <option value="riyadh">riyadh</option>
            <option value="new york">new york</option>
            <option value="paris">paris</option>
            <option value="rome">rome</option>
          </select>
        </div>

        {/* DATE */}
        <div className="py-1.5 px-2.5 border-r-2 flex-1">
          <p className="capitalize font-medium text-slate-600">journey date</p>
          <input
            type="date"
            name="date"
            className="outline-none py-2 w-full"
            required
            value={formData.date}
            onChange={handleFormChange}
          />
        </div>

        {/* GUESTS */}
        <div className="py-1.5 px-2.5 border-r-2 flex-1">
          <p className="capitalize font-medium text-slate-600">guests</p>
          <select
            name="guests"
            id="guests"
            className="capitalize outline-none cursor-pointer py-2 w-full"
            required
            value={formData.guests}
            onChange={handleFormChange}
          >
            <option disabled hidden value="">
              please select
            </option>
            <option value="1 person">1 person</option>
            <option value="2 persons">2 persons</option>
            <option value="3 persons">3 persons</option>
            <option value="4 persons">4 persons</option>
            <option value="5 persons">5 persons</option>
          </select>
        </div>

        {/* TRAVELLING CLASS */}
        <div className="py-1.5 px-2.5 flex-1">
          <p className="capitalize font-medium text-slate-600">class</p>
          <select
            name="class"
            id="class"
            className="capitalize outline-none cursor-pointer py-2 w-full"
            required
            value={formData.class}
            onChange={handleFormChange}
          >
            <option disabled hidden value="">
              please select
            </option>
            <option value="business">business</option>
            <option value="economy">economy</option>
          </select>
        </div>

        {/* ADD A TICKET BUTTON */}
        <button
          type="submit"
          className={`capitalize  px-8 py-4 
          font-bold transition-all 
          flex items-center justify-center gap-1.5
          ${
            ticketData.length > 2
              ? 'bg-[#ccc] text-[#666]'
              : 'bg-indigo-600 hover:bg-indigo-700 text-white'
          }`}
          disabled={ticketData.length === 3 ? true : false}
          onClick={() => {
            if (
              formData.from.length &&
              formData.to.length &&
              formData.date.length &&
              formData.guests.length &&
              formData.class.length > 0
            ) {
              dispatch(booked(formData));
              toast.success('Ticket Booked Successfully!');
              // Back to the default values of the form after submit it.
              setFormData({
                ...formData,
                id: formData.id + 1,
                from: '',
                to: '',
                date: '',
                guests: '',
                class: '',
              });
            }
          }}
        >
          <FaPlus /> <span>book</span>
        </button>
      </form>
    </div>
  );
};

export default Booking;
