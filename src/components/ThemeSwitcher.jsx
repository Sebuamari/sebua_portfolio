import React, { useEffect } from "react";
import { LuSun } from "react-icons/lu";
import { RiMoonClearLine } from "react-icons/ri";
import ThemeSwitcherStyles from "../styles/ThemeSwitcher.module.scss";

const ThemeSwitcher = () => {
    const setDarkMode = () => {
        document.querySelector("body").setAttribute("data-theme", "dark");
        localStorage.setItem("currentTheme", "dark");
    }

    const setLightMode = () => {
        document.querySelector("body").setAttribute("data-theme", "light");
        localStorage.setItem("currentTheme", "light");
    }

    const toggleTheme = (e) => {
        e.target.checked ? setDarkMode() : setLightMode();
    }

    useEffect (() => {
        const currentTheme = localStorage.getItem("currentTheme") ?? "light";
        currentTheme === "light" ? setLightMode() : setDarkMode();
    },[]);

    return (
        <div className={ThemeSwitcherStyles.dark_mode}>
            <input
                className={ThemeSwitcherStyles.dark_mode_input}
                type='checkbox'
                id="darkmode_toggle"
                onChange={toggleTheme}
            />
            <label className={ThemeSwitcherStyles.dark_mode_label} for='darkmode_toggle'>
                <LuSun className={ThemeSwitcherStyles.sun} />
                <RiMoonClearLine className={ThemeSwitcherStyles.moon} />
            </label>
        </div>
    );
};

export default ThemeSwitcher;