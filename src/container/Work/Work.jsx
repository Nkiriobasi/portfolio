import React from 'react';
import { AiFillEye, AiFillGithub} from 'react-icons/ai';
import './Work.scss';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';

const projects = [
  { title: 'Netflix clone', 
    description: 'This is a web app, built with vanilla js, showing some functionalities of the netflix web app.', 
    projectLink: "https://netflixcloneee.netlify.app/", 
    codeLink: "https://github.com/Nkiriobasi/netflix-clone", 
    imageUrl: images.netflix,
    tag: "JAVASCRIPT"
  },
  { title: 'Netflix clone', 
    description: 'This is a web app, built with vanilla js, showing some functionalities of the netflix web app.', 
    projectLink: "https://netflixcloneee.netlify.app/", 
    codeLink: "https://github.com/Nkiriobasi/netflix-clone", 
    imageUrl: images.netflix,
    tag: "JAVASCRIPT"
  },
  { title: 'Food Recipe App', 
    description: 'Built a food recipe app with vanilla js, showing how to fetch data from an external api.', 
    projectLink: "https://food-recipe-app22.netlify.app/", 
    codeLink: "https://github.com/Nkiriobasi/food-recipe-app-with-javascript", 
    imageUrl: images.foodRecipe,
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
                <a href={proj.projectLink} target="_blank" rel="noreferrer" className="btn-link"><AiFillEye /></a>
                <a href={proj.codeLink} target="_blank" rel="noreferrer" className="btn-link"><AiFillGithub /></a>
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

