import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { BallCanvas } from "./canvas";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-6'>
      {technologies.map((technology) => (
        <div
          className='w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-accent/40 transition-colors duration-300'
          key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
