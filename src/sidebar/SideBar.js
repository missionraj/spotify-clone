import React from 'react'
import './sidebar.css';
import SidebarOption from './SidebarOption/SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

import {useDataLayerValue } from '../Datalayer'


function SideBar() {
    const [{ playlists }, dispatch ] = useDataLayerValue();
    return (
        <div className="sidebar">
            <img
                className="sidebar__logo"
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt=""
            />
            <SidebarOption text="Home" Icon={HomeIcon} />         
            <SidebarOption text="Search" Icon={SearchIcon} />         
            <SidebarOption text="Your Library" Icon={LibraryMusicIcon}/> 
            
            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />  
            {
                playlists?.items?.map((playlist,index)=>{
                    return <SidebarOption text={playlist.name} id={playlist.id} key={index}/>      
                })
            }
        </div>
    )
}

export default SideBar
