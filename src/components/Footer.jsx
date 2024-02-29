import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
          <h2>Santhosh mani</h2>
          <p>&copy; 2024 Santhosh mani</p>
        </div>
        <div className="socials-container">
          <div className="social">
            <FaLinkedin />
          </div>
          <div className="social">
            <FaGithub />
          </div>
          <div className="social">
            <FaTwitter />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
