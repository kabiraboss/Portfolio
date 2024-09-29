import styles from './ProjectsStyles.module.css';
import good from '../../assets/good.jpg';
import vr from '../../assets/vr.jpg';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  const handleGithubRedirect = () => {
    window.location.href = "https://github.com/kabiraboss/good-health"; 
  };
  const handleGithub = () => {
    window.location.href = "https://github.com/kabiraboss/vertualworld"; 
  };
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={vr}
          
          link="https://vertualworld.netlify.app"
          h3="Vertual-World"
          p="website: click here"
         
          
        />
        <ProjectCard
          src={good}
          link="https://good-healthrk.netlify.app"
          h3="Good-Health"
           p="website: click here"
         
        />
        
       
      
      </div>
      <div className={styles.rk}> 
        <p onClick={handleGithub}>Code: click here</p>
      </div>
      <div className={styles.kk}> 
        <p onClick={handleGithubRedirect}>Code: click here</p>
      </div>
   
   
     
    
    </section>
  );
}

export default Projects;
