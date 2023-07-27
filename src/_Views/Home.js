import BannerImage from "../Components/images/train-pictures-39.jpg"
import {motion} from "framer-motion";
function HomePage() {

    const btn = `<button>test1</button>`;

    return(
      <motion.div className={"home"}
                  style={{backgroundImage: `url(${BannerImage})`, backgroundRepeat: 'no-repeat', height: "1000px",width: "3000px"}}
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  transition={{delay: 1.5}}
                  exit={{opacity: 0}}
      >

         <div className="headerContainer" style={{textIndent: "900px"}}>
             <p> {btn} <button>test1</button> <button>test1</button></p>
             <h2>Welcome to YardCenter</h2>
             <p>  Master Your Yard</p>
         </div>
      </motion.div>
    );
}

export default HomePage;
