import './About.css';
import logo from "../../assets/HTML5.png";
import css from "../../assets/css.png";
import js from "../../assets/javascript.png";
import react from "../../assets/react.png";
import icon from "../../assets/theme_pattern.svg"
import bootstrap from "../../assets/bootstrap.png";
import { useState } from 'react';

export default function About() {
  const [active, setActive] = useState("skills");

  return (
    <section className='m-auto skills-section'>
      <div className="container ">
        <div className='heading-wrapper d-flex flex-column position-relative align-items-center'>
        <h1 className=" mt-2 fw-bold skills-heading">
          My <span className="skills">Skills</span>

        </h1>
        <img className='position-absolute z-n1v' src={icon} alt="vijay" />
        </div>

        <div className="row row-content align-items-start justify-content-center  flex-sm-row flex-row">
          
          {/* Paragraph + Toggle Buttons */}
          <div className="col-sm-5 d-flex flex-column justify-content-center align-items-center gap-6 mb-3 mb-sm-0 skill-paragraph">
            <p>
              I specialize in building responsive and user-friendly web
              applications using HTML, CSS, JavaScript, and React.js. I enjoy
              creating clean designs with Bootstrap and modern styling
              techniques. I am comfortable with Git & GitHub for version
              control and always eager to learn new tools and technologies to
              improve my frontend development skills.
            </p>

            <div className="toggle-buttons mt-3">
              <button
                className={active === "skills" ? "toggle-btn active" : "toggle-btn"}
                onClick={() => setActive("skills")}
              >
                Skills
              </button>
              <button
                className={active === "tools" ? "toggle-btn active" : "toggle-btn"}
                onClick={() => setActive("tools")}
              >
                Tools
              </button>
            </div>
          </div>

          {/* Logos / Content Section */}
          <div className="col-sm-7 col-12 d-flex flex-wrap justify-content-center gap-4 logo-div">
            {active === "skills" ? (
              <>
                <div className="logo-html text-center">
                  <p className="logo-name mt-2">HTML</p>
                  <img src={logo} alt="HTML Logo" />
                </div>
                <div className="logo-html text-center">
                  <p className="logo-name mt-2">CSS</p>
                  <img src={css} alt="CSS Logo" />
                </div>
                <div className="logo-html text-center">
                  <p className="logo-name mt-2">JavaScript</p>
                  <img src={js} alt="JavaScript Logo" />
                </div>
                <div className="logo-html text-center">
                  <p className="logo-name mt-2">Bootstrap</p>
                  <img src={bootstrap} alt="Bootstrap Logo" />
                </div>
                <div className="logo-html text-center">
                  <p className="logo-name mt-2">React</p>
                  <img src={react} alt="React Logo" />
                </div>
              </>
            ) : (
              <>
                <div className="logo-html text-center">
                  <p className="logo-name mt-2">Git</p>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git Logo" />
                </div>
                <div className="logo-html text-center">
                  <p className="logo-name mt-2">GitHub</p>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub Logo" />
                </div>
                <div className="logo-html text-center">
                  <p className="logo-name mt-2">VS Code</p>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code Logo" />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
