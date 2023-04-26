import React, { useEffect, useState } from 'react';
import './App.css';
import AlbumsDataHeader from './components/AlbumsDataHeader/AlbumsDataHeader';
import { Button, ConfigProvider, Input, Modal } from 'antd';
import List from './components/List/List';
import { addNewAlbumButtonEN, addNewAlbumButtonPL, compareByDate, compareById, FavAlbumList, JSONAlbum, Language, modalErrorEN, modalErrorPL, modalInputPlaceholderEN, modalInputPlaceholderPL, Sorting, View } from './helpers';
import Grid from './components/Grid/Grid';
import AppHeader from './components/AppHeader/AppHeader';
import CustomButton from './components/Button/CustomButton';


function App() {
  const [userFavList, setFavList] = useState<FavAlbumList>([])
  const [selectedLanguage, setSelectedLanguage] = useState(Language.EN)
  const [selectedView, setSelectedView] = useState<View>(View.list)
  const [selectedSorting, setSelectedSorting] = useState<Sorting>(Sorting.id)
  const [isModalOpen, setModalVisibility] = useState(false)
  const [newAlbumTitle, setNewAlbumTitle] = useState<string | undefined>()
  const [isModalErrorVisible, setModalErrorVisbility] = useState(false)

  useEffect(() => {
    if (document.cookie) {
      setFavList(JSON.parse(document.cookie)
        .map((album: JSONAlbum) => ({ id: album.id, title: album.title, dateAdded: new Date(album.dateAdded), isFavorite: album.isFavorite })))
    } else {
      setFavList([])
    }

  }, [])

  function sortBy(sorting: Sorting): FavAlbumList {
    if (sorting === Sorting.id) {
      return [...userFavList].sort((a, b) => compareById(a, b))
    }
    if (sorting === Sorting.name) {
      return [...userFavList].sort((a, b) => a.title.localeCompare(b.title))
    }
    if (sorting === Sorting.dateAdded) {
      return [...userFavList].sort((a, b) => compareByDate(a, b))
    }
    return []
  }

  function addNewAlbum(title: string): void {
    const newUserFavList = [...userFavList]
    newUserFavList.push({ id: userFavList.length === 0 ? 0 : userFavList[userFavList.length - 1].id + 1, title: title, dateAdded: new Date(), isFavorite: false })
    setFavList(userFavList => newUserFavList)
    document.cookie = JSON.stringify(newUserFavList)
  }

  function deleteAlbum(id: number): void {
    const newUserFavList = userFavList.filter((album) => album.id !== id)
    setFavList(userFavList => newUserFavList)
    document.cookie = JSON.stringify(newUserFavList)
  }

  function setAsFavorite(id: number): void {
    const newUserFavList = userFavList.map((album) => ({ ...album, isFavorite: album.id === id ? !album.isFavorite : album.isFavorite }))
    setFavList(userFavList => newUserFavList)
    document.cookie = JSON.stringify(newUserFavList)
  }

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#473ADC',
          fontFamily: 'Inter',
          fontSize: 16.
        },
      }}
    >
      <div className="App">
        <div className='body'>
          <AppHeader lang={selectedLanguage} setSelectedLanguage={setSelectedLanguage} />
          <div className='content'>
            <CustomButton text={selectedLanguage === Language.EN ? addNewAlbumButtonEN : addNewAlbumButtonPL} onClick={() => setModalVisibility(true)} />
            <AlbumsDataHeader selectedSorting={selectedSorting} setSelectedSorting={setSelectedSorting} lang={selectedLanguage} selectedView={selectedView} setSelectedView={setSelectedView} />
            {selectedView === View.list && <List
              albums={sortBy(selectedSorting)}
              deleteAlbum={(id) => deleteAlbum(id)}
              toggleFavoriteAlbum={(id) => setAsFavorite(id)} />}
            {selectedView === View.grid && <Grid
              albums={sortBy(selectedSorting)}
              deleteAlbum={(id) => deleteAlbum(id)}
              toggleFavoriteAlbum={(id) => setAsFavorite(id)} />}
          </div>
        </div>
        <Modal
          open={isModalOpen}
          onCancel={() => {
            setNewAlbumTitle(undefined)
            setModalErrorVisbility(false)
            setModalVisibility(false)
          }}
          centered
          title={selectedLanguage === Language.EN ? addNewAlbumButtonEN : addNewAlbumButtonPL}
          footer={[
            <Button key="back" type="primary" onClick={() => {
              if (newAlbumTitle) {
                addNewAlbum(newAlbumTitle)
                setModalVisibility(false)
                setNewAlbumTitle(undefined)
              } else {
                setModalErrorVisbility(true)
              }

            }}>
              Add album
            </Button>,
          ]}
        >
          {isModalErrorVisible && <p className='modalError'>{selectedLanguage === Language.EN ? modalErrorEN : modalErrorPL}</p>}
          <Input placeholder={selectedLanguage === Language.EN ? modalInputPlaceholderEN : modalInputPlaceholderPL} value={newAlbumTitle} onChange={(e) => setNewAlbumTitle(e.target.value)} />
        </Modal>
      </div>
    </ConfigProvider>
  );
}

export default App;
