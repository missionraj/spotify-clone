import React from 'react'

import './body.css';

import Header from './header/Header';
import { useDataLayerValue } from '../Datalayer';
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import SongRow from './songrow/SongRow';



function Body() {
    let [ { discover_weekly }] = useDataLayerValue();
   
    return (
        <div className="body">
            <Header /> 
            <div className="body__info"> 
                <img src={discover_weekly?.images[0].url} alt="" />
                <div className="div__infoText"> 
                    <strong> Playlist </strong>
                    <h2> Discover Weekly </h2>
                    <p> { discover_weekly?.description } </p>
                </div>
            </div>
            <div className="body__songs"> 
                <div className="body__icons">
                    <PlayCircleFilledIcon className="body__shuffle" onClick={playMusic} />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>
                {
                    discover_weekly?.tracks.items.map((item,index) =>{
                        return <SongRow  track={item.track} key={index}/>  
                    })
                }
            </div>
        </div>
    )
}

export default Body
