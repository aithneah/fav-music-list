import React from 'react'
import { AiFillDelete, AiFillStar } from 'react-icons/ai'
import './GridItem.css'

interface GridItemProps {
    title: string,
    isFavorite: boolean,
    id: number,
    toggleFavoriteAlbum: () => void,
    deleteAlbum: () => void,
}

function GridItem(props: GridItemProps) {
    return (<div className='gridItemBody'>
        <div className='gridItemIcons'>
            <AiFillStar size={21} className="listStarIcon" fill={props.isFavorite ? "#000000" : "#DADADA"} onClick={() => props.toggleFavoriteAlbum()} />
            <AiFillDelete size={21} className="listDeleteIcon" fill='#DADADA' onClick={() => props.deleteAlbum()} />
        </div>
        <div className='gridItemTitle'>{props.title}</div>
    </div>)
}

export default GridItem