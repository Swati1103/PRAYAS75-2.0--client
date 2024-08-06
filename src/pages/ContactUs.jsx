import { useState } from "react";
import { useAuth } from "../auth";
import { toast } from "react-toastify";

const defaultContactFormData = {
  username: "",
  email: "",
  phone: "",
  message: "",
};

export const ContactUs = () => {
  const [data, setData] = useState(defaultContactFormData);
  const [userData, setUserData] = useState(true);
  const { user, API } = useAuth();

  if (userData && user) {
    setData({
      username: user.username,
      email: user.email,
      phone: user.phone,
      message: "",
    });
    setUserData(false);
  }

  const handleContactForm = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API}/api/form/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // console.log("response: ", response);
      // alert(response);

      if (response.ok) {
        setData(defaultContactFormData);
        const responseData = await response.json();
        // console.log(responseData);
        // console.log(responseData);
        toast.success("Message Sent Successfully");
      } else {
        // Handle API error here
        toast.error("Message Not Sent");
        console.error("API Error:", response.status, response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // lets tackle our handleInput
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({
      ...data,
      [name]: value,
    });
  };
  return (
    <div>
      <div className="bg-blue-50 py-6">
      {/* NEW */}
      <div className="px-1 pt-4 ">
        <div className="text-center">
          <span className="mb-2 block text-base font-semibold text-[#478CCF]">
            Contact Us
          </span>
          <h2 className="mb-2 text-[32px] font-bold uppercase text-dark dark:text-white sm:text-[40px] lg:text-[36px] xl:text-[40px]">
            GET IN TOUCH WITH US
          </h2>
        </div>
        <section className="relative z-10 overflow-hidden bg-blue-50 dark:bg-dark  lg:py-[40px] mx-auto">
          <div className="container ">
            <div className="flex justify-center ">
              <div className="w-full px-4 lg:w-1/2 xl:w-5/12  ">
                <div className="relative p-8 bg-white rounded-lg shadow-xl dark:bg-dark-2 sm:p-12">
                  <form onSubmit={handleContactForm}>
                    <div className="mb-6">
                      <input
                        type="text"
                        name="username"
                        id="username"
                        autoComplete="off"
                        placeholder="Your Name*"
                        onChange={handleInput}
                        required
                        className="border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
                      />
                    </div>
                    <div className="mb-6">
                      <input
                         type="email"
                         name="email"
                         id="email"
                         autoComplete="off"
                         placeholder="Email*"
                         onChange={handleInput}
                         required
                        className="border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
                      />
                    </div>
                    <div className="mb-6">
                      <input
                      type="num"
                      placeholder="Phone No.*"
                      required
                        className="border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
                      />
                    </div>
                    <div className="mb-6">
                      <textarea
                        placeholder="Description*"
                        name="message"
                        id="message"
                        autoComplete="off"
                        onChange={handleInput}
                        required
                        className="border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none"
                      ></textarea>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="w-full p-3 text-white font-bold transition border rounded border-[#478CCF] bg-[#478CCF] hover:bg-opacity-90"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                  <div>
                    <span className="absolute -top-10 -right-9 z-[-1]">
                      <svg
                        width="100"
                        height="100"
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                          fill="#478CCF"
                        />
                      </svg>
                    </span>
                    <span className="absolute -right-10 top-[90px] z-[-1]">
                      <svg
                        width="34"
                        height="134"
                        viewBox="0 0 34 134"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="31.9993"
                          cy="132"
                          r="1.66667"
                          transform="rotate(180 31.9993 132)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="31.9993"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 31.9993 117.333)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="31.9993"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 31.9993 102.667)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="31.9993"
                          cy="88"
                          r="1.66667"
                          transform="rotate(180 31.9993 88)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="31.9993"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 31.9993 73.3333)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="31.9993"
                          cy="45"
                          r="1.66667"
                          transform="rotate(180 31.9993 45)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="31.9993"
                          cy="16"
                          r="1.66667"
                          transform="rotate(180 31.9993 16)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="31.9993"
                          cy="59"
                          r="1.66667"
                          transform="rotate(180 31.9993 59)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="31.9993"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 31.9993 30.6666)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="31.9993"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 31.9993 1.66665)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="17.3333"
                          cy="132"
                          r="1.66667"
                          transform="rotate(180 17.3333 132)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="17.3333"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 17.3333 117.333)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="17.3333"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 17.3333 102.667)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="17.3333"
                          cy="88"
                          r="1.66667"
                          transform="rotate(180 17.3333 88)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="17.3333"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 17.3333 73.3333)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="17.3333"
                          cy="45"
                          r="1.66667"
                          transform="rotate(180 17.3333 45)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="17.3333"
                          cy="16"
                          r="1.66667"
                          transform="rotate(180 17.3333 16)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="17.3333"
                          cy="59"
                          r="1.66667"
                          transform="rotate(180 17.3333 59)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="17.3333"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 17.3333 30.6666)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="17.3333"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 17.3333 1.66665)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="2.66536"
                          cy="132"
                          r="1.66667"
                          transform="rotate(180 2.66536 132)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="2.66536"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 2.66536 117.333)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="2.66536"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 2.66536 102.667)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="2.66536"
                          cy="88"
                          r="1.66667"
                          transform="rotate(180 2.66536 88)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="2.66536"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 2.66536 73.3333)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="2.66536"
                          cy="45"
                          r="1.66667"
                          transform="rotate(180 2.66536 45)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="2.66536"
                          cy="16"
                          r="1.66667"
                          transform="rotate(180 2.66536 16)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="2.66536"
                          cy="59"
                          r="1.66667"
                          transform="rotate(180 2.66536 59)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="2.66536"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 2.66536 30.6666)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="2.66536"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 2.66536 1.66665)"
                          fill="#478CCF"
                        />
                      </svg>
                    </span>
                    <span className="absolute -left-7 -bottom-7 z-[-1]">
                      <svg
                        width="107"
                        height="134"
                        viewBox="0 0 107 134"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="104.999"
                          cy="132"
                          r="1.66667"
                          transform="rotate(180 104.999 132)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="104.999"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 104.999 117.333)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="104.999"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 104.999 102.667)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="104.999"
                          cy="88"
                          r="1.66667"
                          transform="rotate(180 104.999 88)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="104.999"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 104.999 73.3333)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="104.999"
                          cy="45"
                          r="1.66667"
                          transform="rotate(180 104.999 45)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="104.999"
                          cy="16"
                          r="1.66667"
                          transform="rotate(180 104.999 16)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="104.999"
                          cy="59"
                          r="1.66667"
                          transform="rotate(180 104.999 59)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="104.999"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 104.999 30.6666)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="104.999"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 104.999 1.66665)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="90.3333"
                          cy="132"
                          r="1.66667"
                          transform="rotate(180 90.3333 132)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="90.3333"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 90.3333 117.333)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="90.3333"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 90.3333 102.667)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="90.3333"
                          cy="88"
                          r="1.66667"
                          transform="rotate(180 90.3333 88)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="90.3333"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 90.3333 73.3333)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="90.3333"
                          cy="45"
                          r="1.66667"
                          transform="rotate(180 90.3333 45)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="90.3333"
                          cy="16"
                          r="1.66667"
                          transform="rotate(180 90.3333 16)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="90.3333"
                          cy="59"
                          r="1.66667"
                          transform="rotate(180 90.3333 59)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="90.3333"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 90.3333 30.6666)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="90.3333"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 90.3333 1.66665)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="75.6654"
                          cy="132"
                          r="1.66667"
                          transform="rotate(180 75.6654 132)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="31.9993"
                          cy="132"
                          r="1.66667"
                          transform="rotate(180 31.9993 132)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="75.6654"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 75.6654 117.333)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="31.9993"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 31.9993 117.333)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="75.6654"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 75.6654 102.667)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="31.9993"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 31.9993 102.667)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="75.6654"
                          cy="88"
                          r="1.66667"
                          transform="rotate(180 75.6654 88)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="31.9993"
                          cy="88"
                          r="1.66667"
                          transform="rotate(180 31.9993 88)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="75.6654"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 75.6654 73.3333)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="31.9993"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 31.9993 73.3333)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="75.6654"
                          cy="45"
                          r="1.66667"
                          transform="rotate(180 75.6654 45)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="31.9993"
                          cy="45"
                          r="1.66667"
                          transform="rotate(180 31.9993 45)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="75.6654"
                          cy="16"
                          r="1.66667"
                          transform="rotate(180 75.6654 16)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="31.9993"
                          cy="16"
                          r="1.66667"
                          transform="rotate(180 31.9993 16)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="75.6654"
                          cy="59"
                          r="1.66667"
                          transform="rotate(180 75.6654 59)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="31.9993"
                          cy="59"
                          r="1.66667"
                          transform="rotate(180 31.9993 59)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="75.6654"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 75.6654 30.6666)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="31.9993"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 31.9993 30.6666)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="75.6654"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 75.6654 1.66665)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="31.9993"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 31.9993 1.66665)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="60.9993"
                          cy="132"
                          r="1.66667"
                          transform="rotate(180 60.9993 132)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="17.3333"
                          cy="132"
                          r="1.66667"
                          transform="rotate(180 17.3333 132)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="60.9993"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 60.9993 117.333)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="17.3333"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 17.3333 117.333)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="60.9993"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 60.9993 102.667)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="17.3333"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 17.3333 102.667)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="60.9993"
                          cy="88"
                          r="1.66667"
                          transform="rotate(180 60.9993 88)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="17.3333"
                          cy="88"
                          r="1.66667"
                          transform="rotate(180 17.3333 88)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="60.9993"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 60.9993 73.3333)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="17.3333"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 17.3333 73.3333)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="60.9993"
                          cy="45"
                          r="1.66667"
                          transform="rotate(180 60.9993 45)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="17.3333"
                          cy="45"
                          r="1.66667"
                          transform="rotate(180 17.3333 45)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="60.9993"
                          cy="16"
                          r="1.66667"
                          transform="rotate(180 60.9993 16)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="17.3333"
                          cy="16"
                          r="1.66667"
                          transform="rotate(180 17.3333 16)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="60.9993"
                          cy="59"
                          r="1.66667"
                          transform="rotate(180 60.9993 59)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="17.3333"
                          cy="59"
                          r="1.66667"
                          transform="rotate(180 17.3333 59)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="60.9993"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 60.9993 30.6666)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="17.3333"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 17.3333 30.6666)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="60.9993"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 60.9993 1.66665)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="17.3333"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 17.3333 1.66665)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="46.3333"
                          cy="132"
                          r="1.66667"
                          transform="rotate(180 46.3333 132)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="2.66536"
                          cy="132"
                          r="1.66667"
                          transform="rotate(180 2.66536 132)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="46.3333"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 46.3333 117.333)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="2.66536"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 2.66536 117.333)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="46.3333"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 46.3333 102.667)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="2.66536"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 2.66536 102.667)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="46.3333"
                          cy="88"
                          r="1.66667"
                          transform="rotate(180 46.3333 88)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="2.66536"
                          cy="88"
                          r="1.66667"
                          transform="rotate(180 2.66536 88)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="46.3333"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 46.3333 73.3333)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="2.66536"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 2.66536 73.3333)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="46.3333"
                          cy="45"
                          r="1.66667"
                          transform="rotate(180 46.3333 45)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="2.66536"
                          cy="45"
                          r="1.66667"
                          transform="rotate(180 2.66536 45)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="46.3333"
                          cy="16"
                          r="1.66667"
                          transform="rotate(180 46.3333 16)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="2.66536"
                          cy="16"
                          r="1.66667"
                          transform="rotate(180 2.66536 16)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="46.3333"
                          cy="59"
                          r="1.66667"
                          transform="rotate(180 46.3333 59)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="2.66536"
                          cy="59"
                          r="1.66667"
                          transform="rotate(180 2.66536 59)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="46.3333"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 46.3333 30.6666)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="2.66536"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 2.66536 30.6666)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="46.3333"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 46.3333 1.66665)"
                          fill="#478CCF"
                        />
                        <circle
                          cx="2.66536"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 2.66536 1.66665)"
                          fill="#478CCF"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="ml-4 font-serif">
          {/* <button className="close-btn">&times;</button> */}
          <p>
            Thank you for reaching to us.
            <br />
            We would be contacting you soon.
          </p>
        </div>
      </div>
    </div>
  );
};
