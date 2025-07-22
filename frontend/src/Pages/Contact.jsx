import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import SmallLoader from "../Components/SmallLoader";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();
  const [requestLoader, setRequestLoader] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setRequestLoader(true);
    console.log(form.current);

    emailjs
      .sendForm("service_chhlto9", "template_hvlf9ye", form.current, {
        publicKey: "6G3bip3AbmyowHBk9",
      })
      .then(
        (response) => {
          // console.log('SUCCESS!', response.status, response.text);
          toast.success(`${response.text} , Form submitted successfully`);
          setRequestLoader(false);
        },
        (error) => {
          // console.log('FAILED...', error.text);
          toast.error(error.text);
          setRequestLoader(false);
        }
      );
  };

  return (
    <div className="bg-gradient-to-br from-purple-300 to-orange-200 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8 bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="bg-purple-600 text-white md:w-1/2 p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              Contact Us
            </h2>
            <p className="text-lg mb-8">
              Have questions or suggestions? Reach out to us using the form.
              Drop an E-mail, call or message.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <svg
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:socialteacherstg@gmail.com"
                  className="hover:underline font-bold"
                >
                  dronalearningdata@gmail.com
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center">
                  <svg
                    className="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="hover:underline font-bold">+91 7019835235</span>
                </div>

                <div className="flex items-center">
                  <svg
                    className="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="hover:underline font-bold">+91 8088048571</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="hover:underline font-bold">+91 8884466899</span>
                </div>
              </div>
            </div>
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="md:w-1/2 p-8 md:p-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Get in touch
            </h1>
            <p className="text-gray-600 mb-8">You can reach us anytime</p>
            <div className="space-y-4">
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
                placeholder="Your Name"
              />
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
                placeholder="Your Email"
              />
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
                placeholder="Phone Number"
              />
              <input
                type="number"
                id="class"
                name="class"
                min={1}
                max={12}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
                placeholder="Class"
              />
              <input
                type="text"
                id="board"
                name="board"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
                placeholder="Board"
              />
              {/* <div>
                <label
                  htmlFor="course-preference"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Course preference
                </label>
                <select
                  name="course-preference"
                  id="course-preference"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                >
                  <option value="ADLP">ADLP</option>
                  <option value="Test Series">Test Series</option>
                  <option value="Live interactive classes">
                    Live interactive classes
                  </option>
                  <option value="General">General</option>
                </select>
              </div> */}
              <textarea
                id="message"
                required
                name="message"
                placeholder="How can we help you?"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 h-28 resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 transition duration-200 flex items-center justify-center"
              >
                {requestLoader ? <SmallLoader /> : "Submit form"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
