import React from 'react'
import { FavAlbumList, UserFavAlbumList } from '../../helpers';
import ListItem from './ListItem/ListItem';
import './List.css'

interface ListProps {
    albums: FavAlbumList,
    toggleFavoriteAlbum: (id: number) => void,
    deleteAlbum: (id: number) => void,
}

function List(props: ListProps) {
    return (<div className='list'>
        {props.albums.map((album) => {
            return (<ListItem key={album.id} title={album.title} id={album.id} isFavorite={album.isFavorite} deleteAlbum={() => props.deleteAlbum(album.id)} toggleFavoriteAlbum={() => props.toggleFavoriteAlbum(album.id)}/>)
        })}
    </div>)
}

export default List;