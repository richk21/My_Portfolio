import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

import Tilt from "react-parallax-tilt";
import { contactlogos } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, slideIn } from "../utils/motion";
import { EarthCanvas } from "./canvas";

const ContactLogoCard = ({ index, name, logo, url }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.4, 0.75)}>
      <Tilt scale={1.08} transitionSpeed={400}>
        <a
          href={url}
          target='_blank'
          rel='noopener noreferrer'
          className='w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-accent/50 transition-colors'>
          <img
            src={logo}
            alt={name}
            className='w-5 h-5 object-contain'
          />
        </a>
      </Tilt>
    </motion.div>
  );
};

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Richa Kiran",
          from_email: form.email,
          to_email: "richa21kiran@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] glass-card p-8'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className='flex gap-3 mt-5'>
          {contactlogos.map((contactlogo, index) => (
            <ContactLogoCard
              key={contactlogo.name}
              index={index}
              {...contactlogo}
            />
          ))}
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-10 flex flex-col gap-7'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-3 text-[14px]'>
              Your Name
            </span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='field-input'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-3 text-[14px]'>
              Your email
            </span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='field-input'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-3 text-[14px]'>
              Your Message
            </span>
            <textarea
              rows={6}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='field-input resize-none'
            />
          </label>

          <button type='submit' className='btn-primary w-fit mt-2'>
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
