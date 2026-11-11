import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import profilepic from "../assets/profile.jpg";
import { styles } from "../styles";

const Landing = () => {
  return (
    <section className='relative w-full h-screen mx-auto flex items-center overflow-hidden'>
      {/* soft dot-grid texture, fading toward the edges, replaces the old swirl background image */}
      <div
        className='absolute inset-0 z-0 opacity-50'
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.09) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 0%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 0%, transparent 75%)",
        }}
      />
      <div
        className={`relative z-10 w-full max-w-7xl mx-auto ${styles.paddingX} flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8 mt-16`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className='flex-1 flex flex-col items-start text-left max-w-xl'>
          <h1 className={styles.landingHeadText}>
            Hi, I'm{" "}
            <span className='bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent'>
              Richa
            </span>
          </h1>
          <p className={`${styles.landingSubText} mt-4`}>
            Full-stack developer, always exploring, learning and building.
          </p>

          <div className='mt-10 flex flex-wrap items-center gap-4'>
            <a href='#contact' className='btn-primary'>
              Get in Touch
            </a>
            <a
              href='/resume.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='btn-outline'>
              Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className='relative flex-shrink-0'>
          <div className='absolute -inset-6 rounded-[28px] bg-gradient-to-br from-accent/30 to-accent-2/20 blur-2xl' />
          <Tilt
            className='relative'
            tiltMaxAngleX={12}
            tiltMaxAngleY={12}
            glareEnable
            glareMaxOpacity={0.2}
            glareColor='#8F88FF'
            glareBorderRadius='24px'>
            <div className='green-black-gradient p-[4px] rounded-[24px] shadow-card'>
              <img
                src={profilepic}
                alt='Richa Kiran'
                className='w-[230px] h-[230px] xs:w-[280px] xs:h-[280px] object-cover rounded-[22px] bg-tertiary'
              />
            </div>
          </Tilt>
        </motion.div>
      </div>

      <div className='absolute xs:bottom-10 bottom-16 w-full flex justify-center items-center z-10'>
        <a href='#about'>
          <div className='w-[32px] h-[58px] rounded-3xl border-2 border-white/15 flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 22, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-2.5 h-2.5 rounded-full bg-gradient-to-r from-accent to-accent-2'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Landing;
