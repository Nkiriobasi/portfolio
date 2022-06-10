import React from 'react';
import { AiFillEye, AiFillGithub} from 'react-icons/ai';
import './Work.scss';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';

const projects = [
  { title: 'Netflix clone', 
    description: 'Built a netflix clone website', 
    projectLink: "https://netflixcloneee.netlify.app/", 
    codeLink: "https://github.com/Nkiriobasi/netflix-clone", 
    imageUrl: images.netflix,
    tag: "JAVASCRIPT"
  },
  { title: 'Netflix clone', 
    description: 'Built a netflix clone website', 
    projectLink: "https://netflixcloneee.netlify.app/", 
    codeLink: "https://github.com/Nkiriobasi/netflix-clone", 
    imageUrl: images.netflix,
    tag: "JAVASCRIPT"
  },
  { title: 'Netflix clone', 
    description: 'Built a netflix clone website', 
    projectLink: "https://netflixcloneee.netlify.app/", 
    codeLink: "https://github.com/Nkiriobasi/netflix-clone", 
    imageUrl: images.netflix,
    tag: "JAVASCRIPT"
  }
];


const Work = () => {

  return (
    <>
      <h2 className="head-text">My Creative <span>Porfolio</span> section</h2> 

      <div className="subhead__wrapper">
        <h2 className={"subhead-text app__flex p-text"}>Projects Gallery</h2>
      </div>

      <div className="app__work-portfolio">
        {projects.map((proj, index) => (
          <div className="app__work-wrapper app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={proj.imageUrl} alt={proj.title} />
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{proj.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{proj.description}</p>

              <div className="btn__wrapper">
                <span className="btn">
                  <a href={proj.projectLink} target="_blank" rel="noreferrer" className="btn-link"><AiFillEye /></a>
                </span>
                <span className="btn">
                  <a href={proj.codeLink} target="_blank" rel="noreferrer" className="btn-link"><AiFillGithub /></a>
                </span>
              </div>

              <div className="app__work-tag app__flex">
                <p className="p-text">{proj.tag}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AppWrap(Work, 'work');


{/* <motion.div
                whileHover={{opacity: [0, 1]}}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={proj.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{scale: [0, 1]}}
                    whileHover={{opacity: [1, 0.9]}}
                    transition={{duration: 0.25}}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={proj.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{scale: [0, 1]}}
                    whileHover={{opacity: [1, 0.9]}}
                    transition={{duration: 0.25}}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div> */}