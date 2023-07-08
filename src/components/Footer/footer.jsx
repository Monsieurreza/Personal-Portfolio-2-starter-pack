import css from './footer.module.scss';
import {motion} from 'framer-motion'
import {footerVariants, staggerChildren} from '../../utils/motion'

const Footer = () => {
    return ( 
        <motion.section 
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{once:false, amount:0.25}}
        className={`paddings ${css.wrapper}`}
        >

            <motion.div 
            variants={footerVariants}
            className={`innerWidth yPadding flexCenter ${css.container}`}>

                <div className={css.left}>
                    <span className="primaryText">
                    Let's make something <br/> amazing together.
                    </span>
                    <span className="primaryText">
                        Start by <a href='mailto:me.nezhad@gmail.com'>saying Hi</a>
                    </span>

                </div>

                <div className={css.right}>
                    <div className={css.info}>
                        <span className="secondaryText">Information</span>
                        <p>Tehran, Iran</p>
                    </div>
                    <div className={css.menu}>
                        <li>Services</li>
                        <li>Work</li>
                        <li>Notes</li>
                        <li>Experience</li>
                    </div>


                </div>


            </motion.div>
        </motion.section>
     );
}
 
export default Footer;