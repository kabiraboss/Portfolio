import styles from './HeroStyles.module.css';
import heroImg from '../../assets/rkc.jpeg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import down from '../../assets/down.svg';
import wdown from '../../assets/wdown.svg';

import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';

import CV from '../../assets/MyCV.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
 
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const arrow = theme === 'light' ? down : wdown;
  

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of rohit"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Rohit
          <br />
          Kumar
        </h1>
        <h2> React Developer</h2>
        <span>
          
          <a href="https://github.com/kabiraboss" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
         
        </span>
        <p className={styles.description}>
          With a passion for developing modern React web apps for commercial
          businesses.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
      <img
          className={styles.down}
          src={arrow}
          alt="Color mode icon"
      
        />
    
    </section>
  );
}

export default Hero;
