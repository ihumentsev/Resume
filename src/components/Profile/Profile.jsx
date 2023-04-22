import css from './Profile.module.css';
import fotoUser from '../../image/photo_profile2.jpg';

export default function Profile() {
  return (
    <aside className={css.sidebar}>
      {/* <div className={css.lang_box}>
        <ul className={css.lang_list}>
          <li className={css.lang_item}>
            <a
              className={css.lang_link}
              href="https://cute-blancmange-dbe03e.netlify.app/"
            >
              EN
            </a>
          </li>
          <li className={css.lang_item}>
            <a
              className={css.lang_link}
              href="https://cute-blancmange-dbe03e.netlify.app/polish.html"
            >
              PL
            </a>
          </li>
        </ul>
      </div> */}
      <img
        src={fotoUser}
        width="250"
        height="250"
        className={css.fotouser}
        alt="user foto"
      />
      {/* Contakt */}
      <div className={css.contacts}>
        <h3 className={css.sidebar_title}>CONTACTS</h3>
        <ul className={css.contact_list}>
          <li className={css.contact_item}>
            <p>
              <span className={css.contact_type}></span>
              <a className={css.contact_link} href="tel:+380507408745">
                +38(050)740 8 745
              </a>
              <br />
              <span className={css.contact_type}></span>
              <a className={css.contact_link} href="tel:+380507408745">
                +48 787 060 899
              </a>
            </p>
          </li>
          <li>
            <span className={css.contact_type}></span>
            <a
              className={css.contact_link}
              href="mailto:a.ihumentsev@gmail.com"
            >
              a.ihumentsev@gmail.com
            </a>
          </li>
          <li>
            <span className={css.contact_type}></span>
            <a className={css.contact_link} href="https://t.me/Ihumentsev">
              Telegram
            </a>
          </li>
          <li>
            <span className={css.contact_type}></span>
            <a
              className={css.contact_link}
              href="https://www.linkedin.com/in/andrii-ihumentsev-48a33497/"
            >
              Linkedin
            </a>
          </li>
          <li>
            <span className={css.contact_type}></span>
            <a
              className={css.contact_link}
              href="https://github.com/ihumentsev"
            >
              Github
            </a>
          </li>

          <li>
            <p>
              <span className={css.contact_type}></span>
              <a
                className={css.contact_link}
                href="https://goo.gl/maps/ABCLVGtVFWNFyc957"
              >
                Lodz, Poland
              </a>
            </p>
          </li>
        </ul>
      </div>
      {/* skils */}
      <div className={css.skils}>
        <h3 className={css.sidebar_title}>TECH SKILLS</h3>
        <ul className={css.skils_list}>
          <li className={css.skils_item}>
            <span className={css.skils_text}>HTML5</span>
          </li>
          <li className={css.skils_item}>
            <span className={css.skils_text}>CSS/SASS</span>
          </li>
          <li className={css.skils_item}>
            <span className={css.skils_text}>GIT</span>
          </li>
          <li className={css.skils_item}>
            <span className={css.skils_text}>WebPack/Parsel</span>
          </li>
          <li className={css.skils_item}>
            <span className={css.skils_text}>JavaScript</span>
          </li>
          <li className={css.skils_item}>
            <span className={css.skils_text}>React.js</span>
          </li>
          <li className={css.skils_item}>
            <span className={css.skils_text}>Redux</span>
          </li>
          <li className={css.skils_item}>
            <span className={css.skils_text}>Node.js</span>
          </li>
          <li className={css.skils_item}>
            <span className={css.softskils_text}>Scrum/Agile</span>
          </li>
        </ul>
      </div>
      <div className={css.softskils}>
        <h3 className={css.sidebar_title}>SOFT SKILLS</h3>
        <ul className={css.softskils_list}>
          <li className={css.softskils_item}>
            <span className={css.softskils_text}>Communicative</span>
          </li>
          <li className={css.softskils_item}>
            <span className={css.softskils_text}>Autonomous</span>
          </li>
          <li className={css.softskils_item}>
            <span className={css.softskils_text}>CooperativeFlexible</span>
          </li>
          <li className={css.softskils_item}>
            <span className={css.softskils_text}>Flexible</span>
          </li>
          <li className={css.softskils_item}>
            <span className={css.softskils_text}>Teamwork</span>
          </li>
        </ul>
      </div>
      <div className={css.softskils}>
        <h3 className={css.sidebar_title}>LANGUAGE SKILLS</h3>
        <ul className={css.softskils_list}>
          <li className={css.softskils_item}>
            <span className={css.softskils_text}>Ukrainian — native</span>
          </li>
          <li className={css.softskils_item}>
            <span className={css.softskils_text}>Russian — native</span>
          </li>
          <li className={css.softskils_item}>
            <span className={css.softskils_text}>Polish — intermediate</span>
          </li>
          <li className={css.softskils_item}>
            <span className={css.softskils_text}>English - intermediate </span>
          </li>
        </ul>
      </div>
    </aside>
  );
}
