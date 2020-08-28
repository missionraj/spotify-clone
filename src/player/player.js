import React from 'react'

import SideBar from '../sidebar/SideBar';
import Body from '../body/Body';
import Footer from '../footer/Footer';
import './player.css'
function  Player({spotify}) {
    return (
        <div className="player">
            <div className="player__body"> 
                <SideBar />
                <Body  spotify={spotify}/>
            </div>
            <Footer />
        </div>
    )
}

export default Player
