import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


//initialState

const initialState = {
 userData: { name: null, email: null },
 auth: false,
 registerstatus: null,
 loginstatus: null,
 update_user_field_status: null
}




//async operation
export const register = createAsyncThunk('register', async ({ name, email, password }) => {
 let payload = null
 await axios.post(`http://localhost:4000/jobify/auth/api/register`, { name, email, password }).then((res) => {
  payload = { res, name, email }
 }).catch((err) => {
  payload = { res: err.response.data }
 })
 return payload
})

export const login = createAsyncThunk('login', async ({ email, password }) => {
 console.log(email,password)
 let payload = null
 await axios.post(`http://localhost:4000/jobify/auth/api/login`, { 'email':email, 'password':password }).then((res) => {
  payload = { res, email }
 }).catch((err) => {
  console.log(err)
  payload = { res: err.response.data }
 })
 return payload
})

export const userauth = createAsyncThunk('userauth', async () => {
 let payload = null
 await axios.get(`http://localhost:4000/jobify/authorization`, {
  headers: {
   'token': localStorage.getItem('token')
  }
 }).then((data) => {
  payload = data
 }).catch((err) => {
  payload = err.response
 })
 return payload
})

export const updatelogindata = createAsyncThunk('updatelogindata', async ({ name, email, newemail, location }) => {
 let payload = null
 await axios.put(`http://localhost:4000/jobify/auth/api/updateuser`, { name, email, newemail, location }, {
  headers: {
   'token': localStorage.getItem('token')
  }
 }).then((responce) => {
  payload = responce
 }).catch((err) => {
  payload = err.response
 })

 localStorage.removeItem('token')

 return payload
})


//slice
const slice = createSlice({
 name: 'slice',
 initialState,
 reducers: {

  removestatus: (state, action) => {
   if (action.payload === 'R') {
    state.registerstatus = null
   }
   if (action.payload === 'L') {
    state.loginstatus = null
   }
  },

  logout: (state, action) => {
   localStorage.removeItem('token')
   state.auth = false
  }
 },
 extraReducers: {
  //register
  [register.fulfilled]: (state, action) => {
   const payload = action.payload.res
   console.log(payload)
   if (payload.status === 200) {
    const data = payload.data
    state.userData = { name: action.payload.name, email: action.payload.email }
    let token = data.token
    localStorage.setItem('token', token)
    state.auth = true
    state.registerstatus = 'success'
   } else {
    state.registerstatus = payload.errors.email.message
    state.auth = false
   }
  },
  [register.rejected]: (state, action) => {
   state.auth = false
   state.registerstatus = 'enter All Detail'
  },



  //login
  [login.fulfilled]: (state, action) => {
   const payload = action.payload.res
   console.log(payload)
   if (payload.status === 200) {
    state.auth = true
    const data = payload.data.status
    state.userData = { name: data.username, email: action.payload.email }
    let token = data.token
    localStorage.setItem('token', token)
    state.loginstatus = 'success'
   } else {
    state.loginstatus = payload.status
    state.auth = false
   }
  },
  [login.rejected]: (state, action) => {
   state.auth = false
   state.loginstatus = 'Enter All Detail'
  },




  //auth
  [userauth.fulfilled]: (state, action) => {
   const payload = action.payload
   if (payload.status === 200) {
    state.auth = true
    const name = payload.data.name
    const email = payload.data.email
    state.userData.name = name
    state.userData.email = email
   } else {
    state.auth = false
    state.registerstatus = null
    state.loginstatus = null
   }
  },
  [userauth.rejected]: (state, action) => {
   console.log('reject')
  },

  //updatelogindata
  [updatelogindata.fulfilled]: (state, action) => {
   const payload = action.payload
   if (payload.status === 200) {
    state.update_user_field_status = true
    state.auth = false
   }
  },
  [updatelogindata.rejected]: (state, action) => {
   console.log('reject')
  },



 }
})


export const { removestatus, logout } = slice.actions

export default slice.reducer