import { Link } from 'react-router-dom'
import HeaderStyles from "../styles/Header.module.scss";
import ThemeSwitcher from "./ThemeSwitcher.jsx";
import HamburgerMenu from './HamburgerMenu.jsx';

function Header() {
    const toggleClasses = () => {
      document.querySelector(`.${HeaderStyles.hamburger_container}`).
          classList.toggle(HeaderStyles.hamburger_container_active);

      document.querySelector(`.${HeaderStyles.menu_items}`).
          classList.toggle(HeaderStyles.menu_items_active);
    };
    
    return (
      <div className={HeaderStyles.header}>
        <nav className={HeaderStyles.header_container}>
            <Link id={HeaderStyles.nav_title} to="/" data-text="&lt;Full-stack developer/&gt;">
              &lt;Full-stack developer/&gt;
            </Link>
            <div className={HeaderStyles.inner_container}>
              <HamburgerMenu onClick={toggleClasses}/>
              <div className={HeaderStyles.menu_items}>
                <ThemeSwitcher />
                <Link to="/about" data-text="<About/>">&lt;About/&gt;</Link>
                <Link to="/skills" data-text="<Skills/>">&lt;Skills/&gt;</Link>
                <Link to="/projects" data-text="<Projects/>">&lt;Projects/&gt;</Link>
                <Link to="/contact" data-text="<Contact/>">&lt;Contact/&gt;</Link>
              </div>
            </div>
        </nav>
      </div>
    );
  }
  
  export default Header;
  