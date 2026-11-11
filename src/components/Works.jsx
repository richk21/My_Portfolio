import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { github, link } from "../assets";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const StatusTag = ({ status }) => {
  const isActive = status === "active";

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
        isActive
          ? "bg-accent-2/10 border-accent-2/40 text-accent-2"
          : "bg-white/5 border-white/10 text-secondary"
      }`}>
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          isActive ? "bg-accent-2 animate-pulse" : "bg-secondary"
        }`}
      />
      {isActive ? "Active" : "Completed"}
    </span>
  );
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
  status,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.4, 0.75)}>
      <Tilt
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        scale={1.01}
        transitionSpeed={450}
        className='glass-card p-5 sm:w-[360px] w-full'>
        <div className='relative w-full h-[220px]'>
          <img
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-xl'
          />

          {status && (
            <div className='absolute top-3 left-3'>
              <StatusTag status={status} />
            </div>
          )}

          <div className='absolute inset-0 flex justify-end items-start gap-2 m-3'>
            {live_demo_link && (
              <div
                onClick={() => window.open(live_demo_link, "_blank")}
                title='Live demo'
                className='black-gradient border border-white/10 w-9 h-9 rounded-full flex justify-center items-center cursor-pointer hover:border-accent-2/60 transition-colors'>
                <img
                  src={link}
                  alt='live demo'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            )}
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              title='Source code'
              className='black-gradient border border-white/10 w-9 h-9 rounded-full flex justify-center items-center cursor-pointer hover:border-accent/60 transition-colors'>
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-heading font-semibold text-[20px]'>
            {name}
          </h3>
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

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Personal Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-16 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
