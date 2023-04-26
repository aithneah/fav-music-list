import { Select } from 'antd'
import React from 'react'
import './AlbumsDataHeader.css'
import { AiOutlineMenu, AiFillAppstore } from "react-icons/ai"
import { dateEN, datePL, Language, sortedByEN, sortedByPL, Sorting, titleEN, titlePL, View } from '../../helpers'

interface AlbumsDataHeaderProps {
    lang: Language,
    selectedView: View,
    setSelectedView: (view: View) => void,
    selectedSorting: Sorting,
    setSelectedSorting: (sorting: Sorting) => void,
}

function AlbumsDataHeader(props: AlbumsDataHeaderProps) {
    return (<div className='listHeader'>
        <div className='sortBox'>
            <div className='sortedBy'>{props.lang === Language.EN ? sortedByEN : sortedByPL}:</div>
            <Select
                defaultValue="id"
                value={props.selectedSorting}
                style={{ width: 120 }}
                onChange={(e) => props.setSelectedSorting(e === 'id' ? Sorting.id : (e === 'name' ? Sorting.name : Sorting.dateAdded))}
                options={[
                    { value: 'id', label: 'id' },
                    { value: 'dateAdded', label: props.lang === Language.EN ? dateEN : datePL },
                    { value: 'name', label: props.lang === Language.EN ? titleEN : titlePL },
                ]}
            />
        </div>
        <div>
            <AiOutlineMenu fill={props.selectedView === View.list ? '#000000' : '#B7B7B7'} size={25} className="listIcon headerIcon" onClick={() => props.setSelectedView(View.list)}/>
            <AiFillAppstore fill={props.selectedView === View.grid ? '#000000' : '#B7B7B7'} size={25} className="headerIcon" onClick={() => props.setSelectedView(View.grid)} />
        </div>
    </div>)
}

export default AlbumsDataHeader