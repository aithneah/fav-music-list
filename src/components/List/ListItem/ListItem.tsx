import React from 'react'
import './ListItem.css'
import { AiFillStar, AiFillDelete } from "react-icons/ai";

interface ListItemProps {
    title: string,
    isFavorite: boolean,
    id: number,
    toggleFavoriteAlbum: () => void,
    deleteAlbum: () => void,
}

function ListItem(props: ListItemProps) {
    return (<div className='listItem'>
        {props.title}
        <div className='listItemIcons'>
            <AiFillStar size={21} className="listStarIcon" fill={props.isFavorite ? "#000000" : "#DADADA"} onClick={() => props.toggleFavoriteAlbum()}/>
            <AiFillDelete size={21} className="listDeleteIcon" fill='#DADADA' onClick={() => props.deleteAlbum()}/>
        </div>
    </div>)
}

export default ListItem;