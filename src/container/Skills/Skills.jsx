import React from 'react';
import './Skills.scss';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';


const skills = [
  {
    name: "HTML",
    imageUrl: images.html
  },
  {
    name: "CSS",
    imageUrl: images.css
  },
  {
    name: "Javascript",
    imageUrl: images.javascript
  },
  {
    name: "Git",
    imageUrl: images.git
  },
  {
    name: "React",
    imageUrl: images.react
  },
  {
    name: "Sass",
    imageUrl: images.sass
  },
  {
    name: "Tailwind",
    imageUrl: images.tailwind
  },
  {
    name: "Next",
    imageUrl: images.nextjs
  }
]


const workexp = [
  {
    name: "Intern Frontend Developer",
    company: "Sidehustle",
    desc: "I work as an intern frontend developer at sidehustle",
    year: 2020
  },
  {
    name: "Intern Frontend Developer",
    company: "Zuri",
    desc: "I work as an intern frontend developer at zuri",
    year: 2020
  }
]

const Skills = () => {
  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map(skill => (
            <motion.div
              whileInView={{opacity: [0, 1]}}
              transition={{duration: 0.5}}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div className="app__flex">
                <img src={skill.imageUrl} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="app__skills-exp">
          {workexp.map(exp => (
            <section key={exp.company}>
              <motion.div
                whileInView={{opacity: [0, 1]}}
                transition={{duration: 0.5}}
                className="app__skills-exp-work"
              >
                <p className="p-text">{exp.year}</p>
                <p className="p-text">{exp.company}</p>
                <h4 className="bold-text">{exp.name}</h4>
                <p className="p-text">{exp.desc}</p>
              </motion.div>
            </section>
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default AppWrap(Skills, "skills");
