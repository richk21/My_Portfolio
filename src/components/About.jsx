import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, link }) => (
  <Tilt
    tiltMaxAngleX={10}
    tiltMaxAngleY={10}
    scale={1.02}
    transitionSpeed={450}
    className='w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.4, 0.75)}
      className='w-full pink-green-gradient p-[1.5px] rounded-2xl shadow-card'>
      <a href={link} target='_blank' rel='noopener noreferrer'>
        <div className='bg-tertiary/90 glass-card rounded-2xl py-8 px-6 min-h-[220px] flex flex-col justify-center items-center gap-5 text-center'>
          <div className='w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center'>
            <img
              src={icon}
              alt={title}
              className='w-9 h-9 object-contain'
            />
          </div>

          <h3 className='text-white text-[18px] font-heading font-semibold'>
            {title}
          </h3>
        </div>
      </a>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        As a full-stack web developer and computer science student, I see code
        as both a craft and a playground. I love diving into new technologies —
        from building blockchain apps and deploying on the cloud to crafting
        sleek frontends and robust backends. With every project, I aim to create
        elegant, seamless experiences that push boundaries and showcase the
        power of diverse tech stacks.
      </motion.p>

      <div className='mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
