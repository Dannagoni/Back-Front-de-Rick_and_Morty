import styled from "./About.module.css";
import imageSrc from '../../src/imagen/marconaranja2.png';
import imageSrc2 from '../../src/imagen/rickcartel.png';
import imageSrc3 from '../../src/imagen/nave.png';
import imageSrc4 from '../../src/imagen/morty.png';
import imageSrc5 from '../../src/imagen/morty2.png';

const About= () => {
    return (
        <div className={styled.containerAbout}>
            <div className={styled.imageletrero} style={{ backgroundImage: `url(${imageSrc})` }}></div>
            <div className={styled.image2} style={{ backgroundImage: `url(${imageSrc2})` }}></div>
            <div className={styled.image3} style={{ backgroundImage: `url(${imageSrc3})` }}></div>
            <div className={styled.image4} style={{ backgroundImage: `url(${imageSrc4})` }}></div>
            <div className={styled.image5} style={{ backgroundImage: `url(${imageSrc5})` }}></div>
            <h2 className={styled.aboutme}>ABOUT ME</h2>
            <h2 className={styled.rectangulo}>.</h2>
            <h2 className={styled.rectangulo2}>.</h2>
            <div className={styled.containerAbout2}>
            <div className={styled.titulo}>
            <h2 className={styled.titulo}>Danna Goñi</h2>
            </div>
            <h2>¡Estos son mis primeros pasos haciendo una app! Primera vez dando su funcionalidad y aplicando estilos. Esta página te permitirá conocer a todos los personajes del programa Rick and Morty; todas sus características, desde su especie hasta su origen. Podrás buscar personajes depende su género, ademas de seleccionar y guardar a tus favoritos!</h2>
        </div>
        </div>
        
    )
}
export default About;