import css from './AboutUser.module.css';
export default function AboutUser() {
  return (
    <div className={css.maincontent}>
      <div className={css.about_user}>
        <h2 className={css.about_position}>Front-End Developer</h2>
        <h1 className={css.about_name}>Andrii Ihumentsev</h1>
        <p className={css.about_description}>
          Hello! I am a web developer with React, Next.js, Node.js stack. At the
          moment, I hold the position of a full-stack developer in a product
          company that promotes its products in the Ukrainian market, where I
          successfully apply my knowledge! I work with company projects on React
          and Node.js. I have some experience as a freelancer with successfully
          completed projects for developing web applications and sites for small
          and medium businesses, as well as improving existing applications. I
          also have practical experience in developing a mobile application on
          React-native. I treat any task with great responsibility! I am
          constantly improving my development and coding skills and learning new
          web development trends. There is a confirmed training in the IT
          Academy GoIT and a confident knowledge of HTML, CSS, JAVA SCRIPT. I
          want to improve my development skills in cooperation with experienced
          developers and gain experience in progressive companies with
          interesting projects!
        </p>
      </div>
      {/* Project */}
      <div className={css.projects}>
        <h3 className={css.Title}>Projects</h3>
        <ul className={css.project_list}>
          <li className={css.projeck_item}>
            <span className={css.project}>
              <a href="https://navchora.com.ua/" className={css.project_link}>
                Printing house ON YESTERDAY,
              </a>
              <span className={css.projeck_bracket}>
                status - under development
              </span>
              <span className={css.projeck_bracket}>[</span> REACT, NEXT JS,
              NOODE JS, EXPRESS, MySQL
              <span className={css.projeck_bracket}>]</span>
            </span>
          </li>
          <li className={css.projeck_item}>
            <span className={css.project}>
              <a
                href="https://skazzp.github.io/petly-front/"
                className={css.project_link}
              >
                PetLY,
              </a>
              <a
                href="https://github.com/ihumentsev/petly-back"
                className={css.project_link}
              >
                Github Link
              </a>
              <span className={css.projeck_bracket}>[</span> HTML5, REACT, NOODE
              JS, EXPRESS <span className={css.projeck_bracket}>]</span>
            </span>
          </li>
          <li className={css.projeck_item}>
            <span className={css.project}>
              <a
                href="https://ihumentsev.github.io/goit-markup-hw-08/"
                className={css.project_link}
              >
                WebStudio,
              </a>
              <a
                href="https://github.com/ihumentsev/goit-markup-hw-08.git"
                className={css.project_link}
              >
                Github Link
              </a>
              <span className={css.projeck_bracket}>[</span> HTML5, CSS3
              <span className={css.projeck_bracket}>]</span>
            </span>
          </li>
          <li className={css.projeck_item}>
            <span className={css.project}>
              <a
                href="https://ihumentsev.github.io/goitmasters-project/"
                className={css.project_link}
              >
                Donut MasterclassName,
              </a>
              <a
                href="https://github.com/ihumentsev/goitmasters-project.git"
                className={css.project_link}
              >
                Github Link
              </a>
              <span className={css.projeck_bracket}>[</span> HTML5, SASS,
              JavaScript
              <span className={css.projeck_bracket}>]</span>
            </span>
          </li>
          <li className={css.projeck_item}>
            <span className={css.project}>
              <a
                href="https://ihumentsev.github.io/js-team-project/"
                className={css.project_link}
              >
                EventBooster,
              </a>
              <a
                href="https://github.com/ihumentsev/js-team-project.git"
                className={css.project_link}
              >
                Github Link
              </a>
              <span className={css.projeck_bracket}>[</span> HTML5, SASS,
              JavaScript, Handlebars, Axios{' '}
              <span className={css.projeck_bracket}>]</span>
            </span>
          </li>
          <li className={css.projeck_item}>
            <span className={css.project}>
              <a
                href="https://ihumentsev.github.io/goit-react-hw-05-movies/"
                className={css.project_link}
              >
                MoviesSearching
              </a>
              <a
                href="https://github.com/ihumentsev/goit-react-hw-05-movies.git"
                className={css.project_link}
              >
                Github Link
              </a>
              <span className={css.projeck_bracket}>[</span> React.js, Axios
              <span className={css.projeck_bracket}>]</span>
            </span>
          </li>
        </ul>
      </div>
      {/* Work */}
      <div>
        <h3 className={css.Title}>Work Experience</h3>
        {/* Company 1 */}
        <div>
          <h4 className={css.work_positon}>
            Junior Full Stack Developer <br />
            <span className={css.organization}>LLCL-FORMAT</span>
          </h4>
          <p className={css.period}>
            December 2022 - up to now <span className={css.line}>|</span>{' '}
            Ukraine
          </p>
          <ul className={css.work_list}>
            <li className={css.work_list_item}>
              Development and maintenance of an application created using React
              (Next.js, Redux, Node.js, MySQL)
            </li>
            <li className={css.work_list_item}>
              Server side development. Working with the database, internal
              logic, building routes (API), architecture.
            </li>
          </ul>
        </div>
        {/* Company 2 */}
        <div>
          <h4 className={css.work_positon}>
            Front-End Developer <br />
            <span className={css.organization}>Freelance</span>
          </h4>
          <p className={css.period}>
            May 2022 - up to now <span className={css.line}>|</span> Ukraine
          </p>
          <ul className={css.work_list}>
            <li className={css.work_list_item}>
              website programming: html, css, js
            </li>
          </ul>
        </div>
        {/* Company 4 */}
        <div>
          <h3 className={css.Title}>Education</h3>
          <h4 className={css.work_positon}>
            <span className={css.organization}>IT School GoIT (Kyiv)</span>
          </h4>
          <h5>Full Stack Developer</h5>
          <p className={css.period}>
            May 2022 - up to now <span className={css.line}>|</span> Ukraine
          </p>
          <h4 className={css.work_positon}>
            <span className={css.organization}>
              Donetsk mining technical school
            </span>
          </h4>
          <h5>Mechanic, category C driver</h5>
          <p className={css.period}>
            September 2005 - up to May 2007
            <span className={css.line}>|</span> Ukraine
          </p>
        </div>
      </div>
    </div>
  );
}
