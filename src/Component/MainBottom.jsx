import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import styles from'./Mainbottom.module.css';
import { AiOutlineHome } from 'react-icons/ai';
import { FcAbout } from 'react-icons/fc';
import { MdOutlineCastForEducation } from 'react-icons/md';
import { GiSkills,} from 'react-icons/gi';
import { RiContactsBookLine } from 'react-icons/ri';


function MainBottom(props) {
  const navigate = useNavigate();
  function handleClick(path) {
    navigate(path);
  }
  return (
    <div>
      
      <div className={styles.box}>
       <nav>
        <ul>
          <li>
            <a href={'/'}><h1>Home</h1><AiOutlineHome /></a>
          </li>
        </ul>
       </nav>
      </div>
      <div className={styles.box}>
       <nav>
        <ul>
          <li>
            <a href={'/about'}>About<FcAbout /></a>
          </li>
        </ul>
       </nav>
      </div>
      <div className={styles.box}>
       <nav>
        <ul>
          <li>
            <a href={'/education'}>Education<MdOutlineCastForEducation /></a>
          </li>
        </ul>
       </nav>
      </div>
      <div className={styles.box}>
        <nav>
         <ul>
          <li>
            <a href={'/skills'}>Skills<GiSkills /></a>
          </li>
        </ul>
       </nav>
      </div>
      <div className={styles.box}>   
       <nav>
         <ul>
          <li>
            <a href={'/contact'}>Contact<RiContactsBookLine /></a>
          </li>
        </ul>
       </nav>
      </div> 
    </div>
  )
}

export default MainBottom
