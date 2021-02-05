import React, { Component } from 'react'
import {motion} from 'framer-motion';


export default class Contact extends Component {
    render() {
        return (
            <div style={{position:"absolute",left:"-100",color:"orange",backgroundColor:"black",width:"100%",height:"80vh"}}>
                <motion.p
                animate={{rotateZ:360}}>
                    <motion.h1 animate={{left:0,x:400,y:200,scale:1.5}}>This is a contact page</motion.h1>
                </motion.p>
            </div>
        )
    }
}
