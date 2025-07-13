import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { education } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const EducationCard = ({ education }) => {
  return (
    <div className='bg-tertiary p-5 rounded-2xl w-full'>
      <div class='flex flex-row'>
        <img
          src={education.icon}
          alt={education.school}
          className='w-[5%] h-[5%] object-contain mr-4'
        />
        <div>
          <h3 className='text-white text-[24px] font-bold'>
            {education.field}
          </h3>
          <p
            className='text-secondary text-[16px] font-semibold'
            style={{ margin: 0 }}>
            {education.field}
          </p>
        </div>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {education.points.map((point, index) => (
          <li
            key={`education-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My academic background
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Academic Milestones.
        </h2>
      </motion.div>
      <div className='mt-10 flex flex-col'>
        {education.map((school, index) => (
          <div className='mt-10' key={`education-${index}`}>
            <EducationCard key={`education-${index}`} education={school} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
