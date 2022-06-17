// import React, { useState} from 'react';
// import './Footer.scss';
// import { images } from '../../constants';
// import { AppWrap } from '../../wrapper';


// const Footer = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', message: ''});
//   const [isFormSubmitted, setIsFormSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const { name, email, message } = formData;

//   const handleChangeInput = (e) => {
//     const { name, value } = e.target;

//     setFormData({ ...formData, [name]: value})
//   }

//   const handleSubmit = () => {
//     setLoading(true);

//     const contact = {
//       name: name,
//       email: email,
//       message: message
//     }
//   }

//   return (
//     <>
//       <h2 className="head-text">Take a coffe & chat with me</h2>

//       <div className="app__footer-cards">
//         <div className="app__footer-card">
//           <img src={images.email} alt="email" />
//           <a href="mailto:obasinkiri@gmail.com" className="p-text">obasinkiri@gmail</a>
//         </div>
//         <div className="app__footer-card">
//           <img src={images.mobile} alt="mobile" />
//           <a href="tel : +234-9034197450" className="p-text">+234-9034197450</a>
//         </div>
//       </div>

//       <div className="app__footer-form app__flex">
//         <div className="app__flex">
//           <input type="text" className="p-text" placeholder="Your Name" value={name} name="name" onChange={handleChangeInput} />
//         </div>
//         <div className="app__flex">
//           <input type="email" className="p-text" placeholder="Your Email" value={email} name="email" onChange={handleChangeInput} />
//         </div>
//         <div>
//           <textarea className="p-text" placeholder="Your Message" value={message} name={message} onChange={handleChangeInput}></textarea>
//         </div>
//         <button type="button" className="p-text" onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
//       </div>
//     </>
//   );
// }

// export default AppWrap(Footer, "contact", 'footer', 'app__whitebg',);
