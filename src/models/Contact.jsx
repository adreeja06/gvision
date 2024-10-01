import React from "react";

// eslint-disable-next-line react/prop-types
const Contact = ({ closeForm }) => {
  // Function to handle redirection
  const handleRedirect = (event) => {
    event.preventDefault(); // Prevent form submission
    window.location.href = "https://consentiuminc.online/dashboard#/user/dashboard";
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="popup-form absolute mt-12 text-black">
        <form className="w-80 md:w-96 space-y-5 bg-white p-5 rounded-xl">
          <h1 className="text-4xl font-semibold text-center text-backgroundColor">
            {/* Add a title or leave it empty */}
          </h1>
          <div className="flex flex-col">
            <input
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="text"
              name="userFirstName"
              id="userFirstName"
              placeholder="First Name"
            />
          </div>
          <div className="flex flex-col">
            <input
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="text"
              name="userLastName"
              id="userLastName"
              placeholder="Last Name"
            />
          </div>
          <div className="flex flex-col">
            <input
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="Your Email"
            />
          </div>
          <div className="flex flex-col">
            <input
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="number"
              name="userNumber"
              id="userNumber"
              placeholder="Phone No."
            />
          </div>
          <div className="flex gap-5">
            <button
              className="bg-backgroundColor text-white px-10 py-2 rounded-md hover:bg-hoverColor transition duration-300"
              onClick={handleRedirect}
            >
              Past Records
            </button>
            <button
              type="button" // Ensure this button doesn't trigger form submission
              className="bg-backgroundColor text-white px-10 py-2 rounded-md hover:bg-hoverColor transition duration-300"
              onClick={closeForm}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
