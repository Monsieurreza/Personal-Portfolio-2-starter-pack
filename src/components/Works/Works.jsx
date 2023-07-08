import { workExp } from '../../utils/data';
import { fadeIn, staggerContainer, textVariant2, zoomIn } from '../../utils/motion';
import css from './Works.module.scss';
import {motion} from 'framer-motion';

const Works = () => {
    return ( 

        <motion.section 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once:false, amount: 0.25}}
        className={`paddings ${css.wrapper}`}
        >
            <a className="anchor" id="work"></a>

            <div className={`flexCenter innerWidth ${css.container}`}>

             <span className= {`primaryText yPaddings ${css.title}`}>My Work Experience</span>


              <div className={`flexCenter ${css.experiences}`}>

                {
                    workExp.map((e,i)=>{
                       return (
                        <motion.div className={`flexCenter ${css.exp}`} 
                        variants={textVariant2}
                        key={i}>
                            <div className={css.post}>
                                <h1>{e.place}</h1>
                                <p>{e.tenure}</p>
                            </div>
                            <div className={css.role}>
                               <h1>{e.role}</h1>
                                <p>{e.detail}</p>
                            </div>
                        </motion.div>
                       );
                    })
                    }


                   <motion.div variants={zoomIn(1,1)} className={css.progressbar}>
                       <motion.div variants={fadeIn('down', 'tween', 2,1.5)} className={css.line}></motion.div>
                       <div><div className={css.circle} style={{backgroundColor:'#286f6c'}}></div> </div>               
                       <div><div className={css.circle} style={{backgroundColor:'#f2704e'}}></div></div>
                       <div><div className={css.circle} style={{backgroundColor:'#eec048'}}></div></div>
                  </motion.div>




              </div>  
            </div>

        </motion.section>
     );
};
 
export default Works;