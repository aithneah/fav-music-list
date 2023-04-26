import React from 'react'
import { FavAlbumList } from '../../helpers'
import './Grid.css'
import GridItem from './GridItem/GridItem'

interface GridProps {
    albums: FavAlbumList,
    toggleFavoriteAlbum: (id: number) => void,
    deleteAlbum: (id: number) => void,
}

function Grid(props: GridProps) {
    return (<div className='gridView'>
        {props.albums.map((album) => {
            return (<GridItem key={album.id} title={album.title} id={album.id} isFavorite={album.isFavorite} deleteAlbum={() => props.deleteAlbum(album.id)} toggleFavoriteAlbum={() => props.toggleFavoriteAlbum(album.id)}/>)
        })}
    </div>)
}

export default Grid