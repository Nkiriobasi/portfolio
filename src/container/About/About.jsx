import React from 'react';
import './About.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';

const abouts = [
  { title: 'Frontend Developer', description: 'An excellent frontend developer.', imgUrl: images.about01},
  { title: 'Web Design', description: 'A good Web Designer.', imgUrl: images.about02},
  { title: 'Web Animations', description: 'Also good in web animations.', imgUrl: images.about03}
];

const About = () => {
  return (
    <>
      <h2 className="head-text">I Know that <span>Good Apps</span><br/> means <span>Good Business</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1}}
            whileHover={{ scale: 1.1}}
            transition={{ duration: 0.5, type: 'tween'}}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default About;