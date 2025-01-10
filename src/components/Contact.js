const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4 text-center">
        Contact Us Page
      </h1>
      <form>
        <input
          type="text"
          className="border-black p-2 m-2"
          placeholder="Name"
        />
        <input
          type="text"
          className="border-black p-2 m-2"
          placeholder="Message"
        />
        <button className=" font-bold border border-black p-2 m-2 bg-gray-300 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
