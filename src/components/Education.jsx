import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { education } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const EducationCard = ({ education }) => {
  return (
    <div className='glass-card p-6 w-full'>
      <div className='flex flex-row items-start gap-4'>
        <div className='w-14 h-14 flex-shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center'>
          <img
            src={education.icon}
            alt={education.school}
            className='w-8 h-8 object-contain'
          />
        </div>
        <div className='flex-1'>
          <h3 className='text-white text-[20px] font-heading font-semibold'>
            {education.school}
          </h3>
          <p className='mt-1 text-accent-2 text-[15px] font-medium'>
            {education.field}
          </p>
          <p className='mt-1 text-secondary text-[13px]'>
            {education.graddDate} &middot; {education.location}
          </p>
        </div>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {education.points.map((point, index) => (
          <li
            key={`education-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wide leading-[22px]'>
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
      <div className='mt-10 flex flex-col gap-6'>
        {education.map((school, index) => (
          <EducationCard key={`education-${index}`} education={school} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
