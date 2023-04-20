import { motion } from "framer-motion";

import { styles } from "../styles";
import Tilt from "react-parallax-tilt";
import profilepic from "../assets/profile.jpeg";
import { fadeIn, textVariant } from "../utils/motion";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto bg-opacity-40`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
        </div>

        <div className="flex items-center">
        <Tilt className='xs:w-[250px] w-full align:left'>
        <motion.div
          //className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
            <img
              src={profilepic}
              alt='web-development'
              className='w-100 h-100 object-contain w-full green-black-gradient p-[5px] rounded-[20px] shadow-card'
            />
        </motion.div>
      </Tilt>
      <div className="align:left" style={{ marginLeft: "25px"}}>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#60A7B4]'>Richa</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Passionate front-end, web, and app developer<br className='sm:block hidden' />
          committed to crafting engaging and impactful<br className='sm:block hidden' />
          digital solutions.
          </p>
          </div>
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
