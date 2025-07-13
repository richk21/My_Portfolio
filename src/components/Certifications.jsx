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
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-black-200 p-5 m-5 rounded-2xl sm:w-[360px] w-full'>
        <a href={image} target='_blank' rel='noopener noreferrer'>
          <div className='relative w-full h-[230px]'>
            <img
              src={image}
              alt='project_image'
              className='w-full h-full object-cover rounded-2xl'
            />

            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className='w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
                <img
                  src={link}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          </div>
        </a>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <h4 className='text-white font-bold text-[24px]'>{company}</h4>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
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
      <div className={`mt-12 bg-black-100 rounded-[20px]`}>
        <div
          className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>My Knowledge</p>
            <h2 className={styles.sectionHeadText}>Certifications.</h2>
          </motion.div>
          <div className='w-full flex'>
            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className='mt-3 mb-20 text-secondary text-[17px] max-w-3xl leading-[30px]'>
              As a computer science student, I have earned several
              industry-recognized certifications that demonstrate my proficiency
              in various programming languages and software development tools.
              These certifications have equipped me with valuable skills and
              expertise to excel in my career.
            </motion.p>
          </div>
        </div>
        <div
          className={`-mt-20 pb-14 ${styles.paddingX} overflow-x-scroll`}
          style={{ width: "100%" }}>
          <div className='flex flex-nowrap gap-7'>
            {certifications.map((certifications, index) => (
              <CertificationsCard
                key={certifications.name}
                index={index}
                {...certifications}
              />
            ))}
          </div>

          <div
            className='absolute top-0 bottom-0 left-0 flex items-center justify-center opacity-0 hover:opacity-100 w-10'
            onClick={scrollLeft}>
            <div className='hover:rounded-full hover:bg-gray-600 h-8 w-8 flex items-center justify-center transition-all duration-300 cursor-pointer z-10'>
              <i className='fas fa-chevron-left text-white'></i>
            </div>
          </div>
          <div
            className='absolute top-0 bottom-0 right-0 flex items-center justify-center opacity-0 hover:opacity-100 w-10'
            onClick={scrollRight}>
            <div className='hover:rounded-full hover:bg-gray-600 h-8 w-8 flex items-center justify-center transition-all duration-300 cursor-pointer z-10'>
              <i className='fas fa-chevron-right text-white'></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "");
