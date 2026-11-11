import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { styles } from "../styles";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkActiveLogic = (title) => {
    if (title.toLowerCase() !== "resume") {
      setActive(title);
    }
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center fixed top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/80 backdrop-blur-xl border-b border-white/5 py-4 shadow-[0_8px_30px_-15px_rgba(6,8,24,0.8)]"
          : "bg-transparent py-6"
      }`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-3'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-heading font-semibold cursor-pointer tracking-tight'>
            Richa Kiran
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row items-center gap-9'>
          {navLinks.map((nav) =>
            nav.title.toLowerCase() === "resume" ? (
              <li key={nav.id}>
                <a
                  href='/resume.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn-outline !px-5 !py-2 !text-[14px]'>
                  Resume
                </a>
              </li>
            ) : (
              <li
                key={nav.id}
                className='group relative'
                onClick={() => handleLinkActiveLogic(nav.title)}>
                <a
                  href={`#${nav.id}`}
                  className={`text-[15px] font-medium transition-colors duration-200 ${
                    active === nav.title
                      ? "text-white"
                      : "text-secondary group-hover:text-white"
                  }`}>
                  {nav.title}
                </a>
                <span
                  className={`absolute left-0 -bottom-1.5 h-[2px] rounded-full bg-gradient-to-r from-accent to-accent-2 transition-all duration-300 ${
                    active === nav.title ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </li>
            )
          )}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[26px] h-[26px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } glass-panel p-6 absolute top-20 right-4 min-w-[170px] z-10 rounded-2xl shadow-glow-sm`}>
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) =>
                nav.title.toLowerCase() === "resume" ? (
                  <li key={nav.id} className='w-full'>
                    <a
                      href='/resume.pdf'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='btn-outline w-full !py-2 !text-[14px]'>
                      Resume
                    </a>
                  </li>
                ) : (
                  <li
                    key={nav.id}
                    className={`font-medium cursor-pointer text-[15px] transition-colors ${
                      active === nav.title
                        ? "text-white"
                        : "text-secondary hover:text-white"
                    }`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}>
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
