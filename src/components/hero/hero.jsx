import { fadeIn, slideIn, staggerContainer } from '../../utils/motion';
import css from './Hero.module.scss';
import {motion} from 'framer-motion';


const Hero = () => {
    return ( 


        <section className={`paddings ${css.wrapper}`}>

            <motion.div 
            className={`innerWidth ${css.container}`}
            variants={staggerContainer}
            initial="hidden"
            whileInView = "show"
            viewport={{once:false, amount: 0.25}}
            > 

                {/* {Upper Elements} */}

                <div className={css.upperElements}>
                    <motion.span 
                    className='primaryText'
                    variants={fadeIn('right','tween',0.2,1)}

                    >Hy There, <br/> I'm Monsieur Reza. </motion.span>

                    <motion.span 
                    className='secondaryText'
                    variants={fadeIn('left','tween',0.2,1)}
                    
                    >I Design beautiful simple <br/> things, And I love what i do</motion.span>


                </div>

                {/* {person image} */}
                <motion.div 
                className={css.person}
                variants={fadeIn('up','tween',0.3,1)}
                >
                <motion.img 
                src="./person.png" alt=""
                variants={slideIn('up','tween',0.5,1.3)}
                
                />
                </motion.div>

                {/* {email} */}

                <a href="mailto:me.nezhad@gmail.com" className={css.email}>me.nezhad@gmail.com</a>




                {/* {Lower Elements} */}

                <div className={css.lowerElements}>
                    <motion.div 
                    className={css.experience}
                    variants={fadeIn('right','tween',0.2,1)}
                    >
                        <div className="primaryText">10</div>
                        <div className="secondaryText">
                            <div>Years</div>
                            <div>Experience</div>
                        </div>
                    </motion.div>
                    <motion.div 
                    className={css.certificate}
                    variants={fadeIn('left','tween',0.2,1)}
                    >
                        <img src="./certificate.png" alt="" />
                        <span>CERTIFIED PROFATIONAL</span>
                        <span>UI/UX DESIGNER</span>
                    </motion.div>
                </div>

            </motion.div>
        </section>


     );
}
 
export default Hero;