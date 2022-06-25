export interface Note {
  name: string,
  date: string,
  important: boolean,
  content: string,
  id: string
}

export interface FormData {
  content: string,
  important: boolean,
  date: string,
  userToken:string
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
  notes: Note[],
  userToken:string,
  username: string
}