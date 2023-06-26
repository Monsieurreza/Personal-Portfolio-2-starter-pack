import css from "./Header.module.scss";
import {BiPhoneCall,BiMenuAltRight} from 'react-icons/bi'
import {motion} from 'framer-motion'
import { getMenuStyles, headerVariants } from "../../utils/motion";
import { useState } from "react";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import useOutsideAlerter from '../../hooks/useOutsideAlerter'


const Header = () => {

    const [menuOpend, setMenuOpened] = useState (false);
    const headerShadow = useHeaderShadow();
    // const menuRef = useRef(null)


//to handle click outside of sidebar on mobile

// useOutsideAlerter({
//     menuRef,
//     setMenuOpened,
// });





    return ( 
        <motion.div 
        initial='hidden' 
        whileInView='show' 
        variants={headerVariants} 
        viewport={{ once: true, amount: 0.25 }} 
        className={`paddings ${css.wrapper}`} 
        style={{boxShadow: headerShadow}} 
        >
            <div className={`flexCenter InnerWidth ${css.container}`}>
                <div className={css.name}>
                    Monsieur Reza
                </div>

                <ul 
                
                style={getMenuStyles(menuOpend)} 
                className={`flexCenter ${css.menu}`}
                >
                    <li><a href="#experties">Searvices</a></li>
                    <li><a href="#work">Experience</a></li>
                    <li><a href="#portfo"></a>Portfolio</li>
                    <li><a href="#people">Tesstmonials</a></li>
                    <li className={`flexCenter ${css.phone}`}>
                        <p>+989127062493</p>
                        {<BiPhoneCall size={"40px"} /> }
                    </li>
                </ul>

                {/* (this is only for medium and small screens) */}

                <div className={css.menuicon}
                onClick={()=>setMenuOpened((prev)=>!prev)}
                
                >
                    <BiMenuAltRight size={'30px'}/>
                </div>


            </div>
        </motion.div>
     );
}
 
export default Header;