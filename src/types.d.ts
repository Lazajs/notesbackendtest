export interface Note {
  name: string,
  date: string,
  important: boolean,
  content: string,
  id: string
}

export interface FormData {
  name: string,
  content: string,
  important: boolean,
  date: string
}

export interface FormDataFromRequest {
  name: string,
  content: string,
  important: boolean,
  date:string,
  _id?: string,
  __v?: number
  id?: string
}