import React from 'react';
import Posts from '../App'
import back from '../assets/video/back.mp4'

const AppWithBackgroundVideo = () => {

   return (
      <>
         <video id="backgroundVideo" loop muted autoPlay>
            <source src={back} type='video/mp4' />  
         </video>
      </>
   )
}
export default AppWithBackgroundVideo


/* Вариант написания через модули, удобен при расширении приложения */
// import React from 'react';
// import Posts from '../Posts'
// import classes from './BackgroundVideo.module.css';

// const AppWithBackgroundVideo = () => {
//    const videoSource = back
//    return (
//       <div className={classes.Container} >
//          <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
//                <source src={videoSource} type="video/mp4" />
//          </video>
//          <div className={classes.Content}>
//             <div className={classes.SubContent} >
//                <Posts />
//             </div>
//          </div>      
//       </div>
//    )
// }

// export default AppWithBackgroundVideo