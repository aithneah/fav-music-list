export enum Language {
    PL = "PL",
    EN = "EN",
}

export enum View {
    list = "List",
    grid = "Grid",
}

export enum Sorting {
    id = 'id',
    name = 'name',
    dateAdded = 'dateAdded',
}

export type Album = {
    id: number,
    title: string,
    dateAdded: Date,
    isFavorite: boolean,
}

export type JSONAlbum = {
  id: number,
  title: string,
  dateAdded: string,
  isFavorite: boolean,
}

export type FavAlbumList = Array<Album>

export const UserFavAlbumList: FavAlbumList = [
    {id: 1, title: "Rock", dateAdded: new Date("December 17, 1996 03:24:00"), isFavorite: true},
    {id: 2, title: "Country", dateAdded: new Date("December 17, 1995 03:24:00"), isFavorite: false},
    {id: 3, title: "Metal", dateAdded:new Date("December 17, 1998 03:24:00"), isFavorite: false},
    {id: 4, title: "Techno", dateAdded: new Date("December 17, 1991 03:24:00"), isFavorite: false},
    {id: 5, title: "Alternative", dateAdded: new Date("December 17, 2000 03:24:00"), isFavorite: false},
    {id: 6, title: "Rock", dateAdded: new Date(), isFavorite: true},
    {id: 7, title: "Country", dateAdded: new Date(), isFavorite: false},
    {id: 8, title: "Metal", dateAdded: new Date(), isFavorite: false},
    {id: 9, title: "Techno", dateAdded: new Date(), isFavorite: false},
    {id: 10, title: "Alternative", dateAdded: new Date(), isFavorite: false},
    {id: 11, title: "Rock", dateAdded: new Date(), isFavorite: true},
    {id: 12, title: "Country", dateAdded: new Date(), isFavorite: false},
    {id: 13, title: "Metal", dateAdded: new Date(), isFavorite: false},
    {id: 14, title: "Techno", dateAdded: new Date(), isFavorite: false},
    {id: 15, title: "Alternative", dateAdded: new Date(), isFavorite: false},
    {id: 16, title: "Rock", dateAdded: new Date(), isFavorite: true},
    {id: 17, title: "Country", dateAdded: new Date(), isFavorite: false},
    {id: 18, title: "Metal", dateAdded: new Date(), isFavorite: false},
    {id: 19, title: "Techno", dateAdded: new Date(), isFavorite: false},
    {id: 20, title: "Alternative", dateAdded: new Date(), isFavorite: false},
]

export function compareById(a: Album, b: Album) {
    if (a.id > b.id) {
      return 1;
    }
    if (a.id < b.id) {
      return -1;
    }
    // a must be equal to b
    return 0;
  }
  export function compareByDate(a: Album, b: Album) {
    if (a.dateAdded.getTime() < b.dateAdded.getTime()) {
      return -1;
    } else if (a.dateAdded.getTime() > b.dateAdded.getTime()) {
      return 1;
    } else {
      return 0;
    }
  }

export const addNewAlbumButtonPL = "Dodaj nowy album"
export const addNewAlbumButtonEN = "Add new album"

export const sortedByPL = "Sortuj po"
export const sortedByEN = "Sorted by"

export const datePL = "data dodania"
export const dateEN = "date added"

export const titlePL = "tytuł"
export const titleEN = "title"

export const modalInputPlaceholderPL = "Tytuł"
export const modalInputPlaceholderEN = "Title"

export const modalErrorPL = "wprowadź tytuł albumu"
export const modalErrorEN = "enter album's title"
