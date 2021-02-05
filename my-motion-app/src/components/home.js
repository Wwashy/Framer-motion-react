import React, { Component } from 'react'
import { motion } from 'framer-motion';

class home extends Component {
    render() {
        return (
            <div style={{ backgroundColor: "black", width: "100%", height: "80vh", textAlign: "center" }}>
                {/* <div>
                    <motion.p
                    initial={{ fontSize: "20px", color: "blue" }}
                    animate={{ fontSize: "50px", color: "skyblue", x: 400, y: 200 }}
                    >This is home page</motion.p>
                    
                </div> */}
                <motion.div
                    initial={{ x: "-100vw" }}
                    animate={{ x: 0 }}
                    transition={{type:"spring",stiffness:120,delay:1.5}}
                >
                    <button>
                        get started
                 </button>
                </motion.div>
            </div>
        )
    }
}

export default home
