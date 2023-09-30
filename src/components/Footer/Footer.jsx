import scss from './Footer.module.scss';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Container from 'components/Shared/Container';





const Footer = () =>{

    return (<footer className={scss.footer}>
        <Container >
            <div className={scss.footerContainer}>
<p className={scss.text}>Developer <span className={scss.name}>Mariia Stetsiuk</span> </p>
<ul className={scss.list}>
    <li className={scss.item}><a href="https://www.linkedin.com/in/mariia-stetsiuk/" className={scss.link} target='blank'>
        <AiFillLinkedin size='30px'  className={scss.icon}/>
        </a></li>
    <li className={scss.item}><a href="https://github.com/mariastetciuk" className={scss.link} target='blank'>
        <AiFillGithub size='30px' className={scss.icon}/>
        </a></li>
</ul>
</div>
</Container>
    </footer>
    )
}

export default Footer;