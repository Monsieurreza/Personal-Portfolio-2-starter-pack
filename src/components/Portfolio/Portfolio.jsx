import { fadeIn, staggerChildren } from '../../utils/motion';
import css from './portfolio.module.scss';
import {motion} from 'framer-motion';




const Porfolio = () => {
    return ( 

      <motion.section 
      variants={staggerChildren}
      initial='hidden'
      whileInView='show'
      viewport={{once:false, amount:0.25}}
      className={`paddings ${css.wrapper}`}>
        
        <a className="anchor" id="portfoli"></a>


        <div className={`innerWidth flexCenter ${css.container}`}>
            <div className={`flexCenter ${css.heading}`}>
                <div>
                    <span className='primaryText'>
                        My Latest Works
                    </span>
                    <p style={{marginTop:'10px'}}>
                        Perfect Solution for Digital Experience                       
                    </p>
                </div>

                <span className="secondaryText">Explore More Works</span>
            </div>

            {/* {images of portfolieo} */}

            <div className={`flexCenter ${css.showCase}`}>
                <motion.img 
                variants={fadeIn('up','tween', 0.5, 0.6)}
                src=".\showCase1.png" alt="project" />
                <motion.img 
                variants={fadeIn('up','tween', 0.7, 0.6)}
                src=".\showCase2.png" alt="project" />
                <motion.img 
                variants={fadeIn('up','tween', 0.9, 0.6)}
                src=".\showCase3.png" alt="project" />
            </div>

            

        </div>

      </motion.section>

     );
}
 
export default Porfolio;