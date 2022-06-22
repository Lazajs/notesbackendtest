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
  date: string,
  userID: string
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

export interface FormLoginData {
  username: string,
  password: string
}

export interface FormRegisterData {
  username: string,
  password: string,
  confirmation:string,
  email: string
}

export interface UserData {
  email: string,
  id: string,
  notes: Note[],
  username: string
}