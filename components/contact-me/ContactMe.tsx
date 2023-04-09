import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BiMailSend } from "react-icons/bi";
function ContactMe() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  async function HandelEmail(e: { preventDefault: () => void }) {
    const validate = /\b[a-zA-Z0-9]+@\w+.\w/gi;
    const { email, message } = formData;
    e.preventDefault();

    if (email.match(validate) && !!message) {
      toast.promise(
        emailjs.send(
          "service_r2lm3zi",
          "template_hlrw9d9",
          { ...formData },
          "hkYqzWBQuYVKpqlgp"
        ),
        {
          pending: "please wait !",
          success: "email has been sent 👌",
          error: "something went wrong 🤯",
        }
      );
    } else {
      toast.error(
        "please make sure email is valid or message field not empty",
        {
          position: "top-right",
          autoClose: 15000,
          hideProgressBar: false,
          pauseOnHover: false,
          draggable: false,
          theme: "colored",
          className: "text-sm min-w-fit",
        }
      );
    }
  }
  return (
    <section
      className='py-6 flex-grow dark:bg-gray-800 dark:text-gray-50 mx-auto max-w-[770px]'
      id='Contact-me'
    >
      <div className='grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x'>
        <div className='py-6 md:py-0 md:px-6'>
          <h1 className='text-4xl mb-12 font-bold'>Get in touch</h1>
          <div className='space-y-4'>
            <p className='flex items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='w-5 h-5 mr-2 sm:mr-6'
              >
                <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z'></path>
              </svg>
              <span>+212601051898</span>
            </p>
            <p className='flex items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='w-5 h-5 mr-2 sm:mr-6'
              >
                <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z'></path>
                <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z'></path>
              </svg>
              <span>echbiymed@gmail.com</span>
            </p>
          </div>
        </div>
        <div className='px-5 w-full '>
          <label htmlFor='email' className='text-lg capitalize block mb-6'>
            email
          </label>
          <input
            type='text'
            className='p-2 rounded mb-8 block text-black w-full'
            name='email'
            id='email'
            autoFocus
            placeholder='example@gmail.com'
            onChange={(e) =>
              setFormData((pre) => ({ ...pre, email: e.target.value }))
            }
          />
          <label htmlFor='message' className='block capitalize mb-4'>
            message
          </label>
          <textarea
            name='message'
            id='message'
            cols={30}
            rows={6}
            onChange={(e) =>
              setFormData((pre) => ({ ...pre, message: e.target.value }))
            }
            className='text-black focus:outline-none p-2 block rounded capitalize'
            placeholder='write your message here :)'
          />
          <div className='w-full flex items-center justify-start mt-5'>
            <button
              className='p-2 bg-btn-primary min-w-[120px] capitalize flex items-center gap-2 justify-center rounded'
              onClick={HandelEmail}
            >
              send
              <BiMailSend />
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}

export default ContactMe;
