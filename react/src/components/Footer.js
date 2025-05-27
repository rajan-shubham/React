// Footer component for footer section
const Footer = () => {
    const year = new Date().getFullYear();
  return (
      <footer className="w-full h-12 flex items-center justify-center bg-orange-400">
        
          Created By &nbsp;
          <i className="fa-solid fa-heart"></i>
          <a href="https://www.linkedin.com/in/shubham-kumar-617760258/" target="_blank">
          Shubham Rajan 
          </a>
          <i className="fa-solid fa-copyright"></i>
        &nbsp;&copy;&nbsp;{year}
          <strong>
          &nbsp;Food<span>Fire</span>
          </strong>
        
      </footer>
    );
  };
  
  export default Footer;