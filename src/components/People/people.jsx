import Slider from 'react-slick';
import { footerVariants, staggerChildren } from '../../utils/motion';
import css from './people.module.scss';
import {motion} from 'framer-motion'
import { comments, sliderSettings } from '../../utils/data';



const People = () => {
    return ( 
        <motion.section 
        variants={staggerChildren}
        initial='hidden'
        whileInView='show'
        viewport={{once:false, amount:0.25}}
        className={`paddings ${css.wrapper}`}>

         <a className="anchor" id="people"></a>

        <motion.div 
        variants={footerVariants}
        className={`yPaddings innerWidth ${css.container}`}>
            
        <div className={`flexCenter ${css.heading}`}>
            <span className="primaryText">People Talk about Us</span>
            <p style={{marginTop:'2rem'}}>
            I got a job that was in accordance with the salary and field of work
            </p>
            <p>
            The process of submitting an appilication was quite cosy
            </p>
        </div>
        
        {/* {carousel} */}

        <dic className={`flexcenter ${css.comments}`}>
            <Slider
             {...sliderSettings}
             className={css.slider}
            >
                {
                    comments.map((comment,i)=>{
                        return(
                            <div className={css.comment} key={i}>
                                <img src={comment.img} alt="" />
                                <p>{comment.comment}</p>

                                <div className={css.line}></div>

                                <div className={css.bio}>
                                    <span>{comment.name}</span>
                                    <span>{comment.post}</span>
                                </div>
                            </div>
                        )
                    })
                }

            </Slider>

        </dic>

        </motion.div>
        
        </motion.section>
     );
}
 
export default People;