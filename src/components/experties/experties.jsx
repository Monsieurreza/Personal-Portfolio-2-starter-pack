import { WhatDoIHelp, projectExperience } from '../../utils/data';
import { fadeIn, staggerContainer, textVariant } from '../../utils/motion';
import css from './experties.module.scss';
import { motion } from 'framer-motion';


const Experties = () => {
    return ( 

        <motion.section 
        className={css.wrapper}
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{once:false, amount: 0.25}}
        >
            <a className="anchor" id="experties"></a>


            <div className={`padding yPadding flexCenter innerWidth ${css.container}`}>

                {/* {left side} */}
                <div className={css.leftside}>
                {
                        projectExperience.map((exp,i)=>{
                            return <motion.div 
                            variants={fadeIn('right',"tween",(i+1)*0.2,1)}
                            className={css.exp} 
                            key={i}
                            >
                                <div className="flexCenter" style={{background: exp.bg}} >
                                    <exp.icon  size={25} color='white'/>
                                 </div>
                                    <div className={css.description}>
                                        <span>{exp.name}</span>
                                        <span className='secondaryText'>{exp.projects} Projects</span>
                                    </div>
                            </motion.div>
                        })
                    }
                </div>
                

                {/* {right side} */}
                <motion.div 
                variants={textVariant(0.5)}
                className={css.rightside}
                >
                    <span className="primaryText">What do I help?</span>
                    {
                    WhatDoIHelp.map((paragraph, i)=> 
                    <span className='secondaryText' key={i}>{paragraph}
                    </span>
                    )}

                    <div className={`flexCenter ${css.stats}`}>
                        <div className={`flexCenter ${css.stat}`}>
                                <span className='primaryText'>285+</span>
                                <span className='secondaryText'>Project Completed</span>
                            </div>


                        <div className={`flexCenter ${css.stat}`}>
                            <sapn className='primaryText'>190+</sapn>
                            <sapn className='secondaryText'>Happy Clients</sapn>
                        </div>
                    </div>
                    
            
                </motion.div>
            
            </div>


        </motion.section>


     );
}
 
export default Experties;