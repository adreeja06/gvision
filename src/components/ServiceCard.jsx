const ServicesCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center transition-transform transform hover:-translate-y-2 hover:shadow-xl w-full lg:w-1/3">
      <div className="bg-teal-400 w-16 h-16 flex items-center justify-center rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <a href="#" className="text-teal-500 hover:underline text-sm">
        Learn more
      </a>
    </div>
  );
};
