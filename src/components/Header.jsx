import HeaderStyles from "../styles/Header.module.scss";
import ThemeSwitcher from "./ThemeSwitcher.jsx";
import HamburgerMenu from './HamburgerMenu';

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
            <a id={HeaderStyles.nav_title} href="/" data-text="&lt;Full-stack developer/&gt;">
              &lt;Full-stack developer/&gt;
            </a>
            <div className={HeaderStyles.inner_container}>
              <HamburgerMenu onClick={toggleClasses}/>
              <div className={HeaderStyles.menu_items}>
                <ThemeSwitcher />
                <a href="/about" data-text="<About/>">&lt;About/&gt;</a>
                <a href="/skills" data-text="<Skills/>">&lt;Skills/&gt;</a>
                <a href="/projects" data-text="<Projects/>">&lt;Projects/&gt;</a>
                <a href="/contact" data-text="<Contact/>">&lt;Contact/&gt;</a>
              </div>
            </div>
        </nav>
      </div>
    );
  }
  
  export default Header;
  