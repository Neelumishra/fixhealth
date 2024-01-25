function Form1({setCity}:any) {
  return (
    <>
      <div>
        <h1 className="text-2xl">
          {" "}
          Book an Appointment for <br />{" "}
          <span>
            Rs 1000<span></span>
          </span>{" "}
          <b>FREE</b>
        </h1>
        <p className="text-xs  ">
          60+ Expert Physiotherapists for 200+ Conditions
        </p>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="name"
          name="name"
          id="name"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder="Your Age"
          required
        />
        <input
          onChange={(e) => setCity(e.target.value)}
          type="name"
          name="name"
          id="name"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder="Your City"
          required
        />
        <input
          type="name"
          name="name"
          id="name"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder="Your Company"
          required
        />
      </div>
    </>
  );
}

export default Form1;
