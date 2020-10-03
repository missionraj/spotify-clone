import React from 'react'
import './SidebarOption.css';


import { useDataLayerValue } from '../../Datalayer'
import SpotifyWebApi from "spotify-web-api-js";

const spotify =  new SpotifyWebApi();



function SidebarOption({text, Icon, id}) {

    const [{}, dispatch] = useDataLayerValue();
    const getSongsFromPlaylists = () => { 
        spotify.getPlaylist(id).then(res=>{
            dispatch({
              type:'SET_DISCOVER_WEEKLY',
              discover_weekly : res
            })
        })
    }
    return (
        <div className="sideBarOption"  onClick={getSongsFromPlaylists}>
            {Icon && <Icon className="sideBarOption__icon"/>}
            {Icon ? <h4>{text}</h4> : <p>{text}</p>}
        </div>
    )
}

export default SidebarOption
