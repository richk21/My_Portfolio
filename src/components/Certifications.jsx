import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { link } from "../assets";
import { certifications } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const CertificationsCard = ({
  index,
  name,
  company,
  description,
  tags,
  image,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.3, 0.75)}>
      <Tilt
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        scale={1.01}
        transitionSpeed={450}
        className='glass-card p-5 m-1 sm:w-[340px] w-full'>
        <a
          href={image}
          target='_blank'
          rel='noopener noreferrer'
          className='block relative w-full h-[200px]'>
          <img
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-xl'
          />

          <div className='absolute top-3 right-3'>
            <div className='black-gradient border border-white/10 w-9 h-9 rounded-full flex justify-center items-center'>
              <img
                src={link}
                alt='view certificate'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </a>

        <div className='mt-5'>
          <h3 className='text-white font-heading font-semibold text-[18px] leading-snug'>
            {name}
          </h3>
          <h4 className='mt-1 text-accent-2 font-medium text-[14px]'>
            {company}
          </h4>
          <p className='mt-2 text-secondary text-[14px] leading-[22px]'>
            {description}
          </p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <span
              key={`${name}-${tag.name}`}
              className={`tag-chip ${tag.color}`}>
              #{tag.name}
            </span>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

function scrollLeft() {
  const scrollContainer = document.querySelector(".overflow-x-scroll");
  scrollContainer.scrollBy({ left: -500, behavior: "smooth" });
}

function scrollRight() {
  const scrollContainer = document.querySelector(".overflow-x-scroll");
  scrollContainer.scrollBy({ left: 500, behavior: "smooth" });
}

const Certifications = () => {
  return (
    <>
      <div className='mt-12 glass-panel rounded-[20px]'>
        <div className={`rounded-2xl ${styles.padding} min-h-[260px]`}>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>My Knowledge</p>
            <h2 className={styles.sectionHeadText}>Certifications.</h2>
          </motion.div>
          <div className='w-full flex'>
            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className='mt-3 mb-16 text-secondary text-[17px] max-w-3xl leading-[30px]'>
              As a computer science student, I have earned several
              industry-recognized certifications that demonstrate my proficiency
              in various programming languages and software development tools.
              These certifications have equipped me with valuable skills and
              expertise to excel in my career.
            </motion.p>
          </div>
        </div>
        <div
          className={`relative -mt-16 pb-14 ${styles.paddingX} overflow-x-scroll`}
          style={{ width: "100%" }}>
          <div className='flex flex-nowrap gap-7'>
            {certifications.map((certification, index) => (
              <CertificationsCard
                key={certification.name}
                index={index}
                {...certification}
              />
            ))}
          </div>

          <div
            className='absolute top-0 bottom-0 left-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 w-12'
            onClick={scrollLeft}>
            <div className='bg-primary/70 backdrop-blur border border-white/10 hover:border-accent/50 rounded-full h-9 w-9 flex items-center justify-center transition-all duration-300 cursor-pointer z-10'>
              <i className='fas fa-chevron-left text-white text-[13px]'></i>
            </div>
          </div>
          <div
            className='absolute top-0 bottom-0 right-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 w-12'
            onClick={scrollRight}>
            <div className='bg-primary/70 backdrop-blur border border-white/10 hover:border-accent/50 rounded-full h-9 w-9 flex items-center justify-center transition-all duration-300 cursor-pointer z-10'>
              <i className='fas fa-chevron-right text-white text-[13px]'></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "");
