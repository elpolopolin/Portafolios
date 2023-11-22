import React from "react";

function Contact() {
  return (
    <section className="contact bg-gray-800 text-white py-16" id="contact">
      <div className="container mx-2">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Contact</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="contact-form mb-8">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-gray-700 rounded-md p-3 w-full focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="bg-gray-700 rounded-md p-3 w-full mt-4 focus:outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="bg-gray-700 rounded-md p-3 w-full mt-4 focus:outline-none"
              ></textarea>
              <button className="bg-green-500 rounded-md p-3 mt-4 hover:bg-green-300 transition duration-300 focus:outline-none">
                Send Message
              </button>
            </div>
          </div>

          <div className="contact-info">
            <p className="mb-4">Av. Libertador 1897, CABA</p>
            <p className="mb-4">Email: poloracan@company.com</p>
            <p className="mb-4">Fax: 9239 3923</p>
            <p className="mb-4">Indones: kdi polods</p>
            <p className="mb-4">YoungPoyin: Delicious Food</p>
            <p>Phone: +911 1109 4459</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;