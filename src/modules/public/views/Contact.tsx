/* eslint-disable no-template-curly-in-string */
import { useNavigate } from "react-router-dom";
import { addMetaData } from "core/helpers/seoHelpers";
import { Link } from "react-router-dom";
import { Mail, Phone } from "react-feather";
import { useState } from "react";
import InputField from "core/components/formfields/InputField";
import TextField from "core/components/formfields/TextField";
import { btn } from "core/consts/styling";

const Contact = () => {
  const navigate = useNavigate();

  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleFormChange = (e: any) => {
    const { name, value } = e?.target;

    setFeedback((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleSubmitFeedback = (e: any) => {
    e?.preventDefault();
  };

  return (
    <>
      {addMetaData({
        title: "Ocean Global Chemicals Nigeria - Contact",
        description:
          "We are available 24/7 days a week. Call us on +234 090 000 00000, or mail us on oceanglobalchems@gmail.com",
      })}

      <div className="m-[0px] mx-auto mb-[34px] h-full w-11/12 overflow-hidden pt-[20px] md:w-4/5">
        <section className="mb-[28px]">
          <header className="flex flex-wrap items-center gap-3 text-[12px] text-black-shade">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <Link to="/contact" className="text-black hover:underline">
              Contact
            </Link>
          </header>
        </section>

        <section className="mb-[28px] flex flex-col gap-2 lg:flex-row">
          <div className="w-full lg:w-1/3">
            <div className="flex flex-col justify-between gap-3 rounded-[4px] border border-gray p-5 sm:flex-row lg:flex-col lg:gap-5 lg:p-3">
              <div className="mr-3 w-full border-b border-r border-r-white pb-5 sm:w-1/2 sm:border-b-white sm:border-r-black lg:w-full lg:border-b lg:border-b-black lg:border-r-white lg:pb-5">
                <div className="mb-3 flex items-center gap-2">
                  <div className="rounded-full bg-brand p-2">
                    <Phone className="h-[14px] w-[14px] text-white" />
                  </div>
                  <p className="font-[500]">Call Us Today</p>
                </div>

                <p className="mb-3">We are available 24/7, 7 days a week</p>

                <a href="tel:+" className="hover:underline">
                  Phone: +234 709 000 0000
                </a>
              </div>

              <div className="w-full sm:w-1/2 lg:w-full">
                <div className="mb-3 flex items-center gap-2">
                  <div className="rounded-full bg-brand p-2">
                    <Mail className="h-[14px] w-[14px] text-white" />
                  </div>
                  <p className="font-[500]">Write To Us</p>
                </div>

                <p className="mb-3">
                  Fill out our form and we will contact you within 24 hours
                </p>

                <a
                  href="mailto:oceanglobalchems@gmail.com"
                  className="hover:underline"
                >
                  Email: oceanglobalchems@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="mt-5 w-full p-0 lg:mt-0 lg:w-2/3 lg:p-5">
            <form onSubmit={handleSubmitFeedback}>
              <div className="mb-3 flex flex-col items-center gap-2 sm:flex-row">
                <InputField
                  boxStyle="w-full sm:w-1/3"
                  label="Your Name"
                  isRequired
                  disabled
                  name="name"
                  value={feedback?.name}
                  onChange={handleFormChange}
                />

                <InputField
                  disabled
                  boxStyle="w-full sm:w-1/3"
                  label="Your Email"
                  name="email"
                  type="email"
                  value={feedback?.email}
                  onChange={handleFormChange}
                />

                <InputField
                  disabled
                  boxStyle="w-full sm:w-1/3"
                  label="Your Phone Number"
                  isRequired
                  name="phoneNumber"
                  value={feedback?.phoneNumber}
                  onChange={handleFormChange}
                />
              </div>

              <TextField
                disabled
                boxStyle="mb-3"
                label="Your Message"
                textareaStyle="w-full bg-shade"
                placeholder="Message here..."
                isRequired
                name="message"
                value={feedback?.message}
                onChange={handleFormChange}
                rows={5}
              />

              <div className="flex items-center justify-end">
                <button
                  disabled
                  className={`${btn} w-full border bg-brand text-[12px] font-[500] text-white sm:w-1/3 lg:w-1/3`}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
