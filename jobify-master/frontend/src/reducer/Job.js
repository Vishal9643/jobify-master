import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'






//initialState


const initialState = {



 addjobstatus: null,
 statusvalue: { pending: 0, interview: 0, declined: 0 },
 alljobsdata: null,
 alljobsdata_clone: null,
 editjobitem: null,
 userinfo: null
}




//async operation

export const addjob = createAsyncThunk('addjob', async (addjobdata) => {
 let payload = null
 await axios.post(`http://localhost:4000/jobify/jobs/api/addjobs`, addjobdata, {
  headers: {
   'token': localStorage.getItem('token')
  }
 }).then((responce) => {
  payload = responce
 }).catch((err) => {
  payload = err.response
 })
 return payload
})

export const alljobstatus = createAsyncThunk('alljobstatus', async () => {
 let payload = null
 await axios.get(`http://localhost:4000/jobify/jobs/api/alljobs`, {
  headers: {
   'token': localStorage.getItem('token')
  }
 }).then((responce) => {
  payload = responce
 }).catch((err) => {
  payload = err.response
 })
 return payload
})

export const deletejobdata = createAsyncThunk('deletejobdata', async (id) => {
 let payload = null
 await axios.delete(`http://localhost:4000/jobify/jobs/api/deletejobs/${id}`, {
  headers: {
   'token': localStorage.getItem('token')
  }
 }).then((responce) => {
  payload = responce
 }).catch((err) => {
  payload = err.response
 })
 return payload
})

export const Updatejobdata = createAsyncThunk('Updatejobdata', async ({ data, id }) => {
 let payload = null
 await axios.put(`http://localhost:4000/jobify/jobs/api/updatejobs/${id}`, data, {
  headers: {
   'token': localStorage.getItem('token')
  }
 }).then((responce) => {
  payload = responce
 }).catch((err) => {
  payload = err.response
 })
 return payload
})






//slice
const slice = createSlice({
 name: 'slice',
 initialState,
 reducers: {


  removeaddjobstatus: (state, action) => {
   state.addjobstatus = null
  },

  filter_in_job_data: (state, action) => {
   let {
    search,
    status,
    type,
    sort,
   } = action.payload
   const data = state.alljobsdata
   state.alljobsdata_clone = data.filter((val) => {
    return ((status) ? (status === 'all' ? true : (val.status === status)) : true) && ((type) ? (type === 'all' ? true : val.jobtype === type) : true) && (search ? val.position.startsWith(search) : true)
   })
  },

  clear_filter_job_data:(state,action)=>{
   state.alljobsdata_clone=state.alljobsdata
  },

  editjobitem: (state, action) => {
   state.editjobitem = action.payload
  },

  




 },
 extraReducers: {

  //addjob_data
  [addjob.fulfilled]: (state, action) => {
   const payload = action.payload
   if (payload.status === 200) {
    state.addjobstatus = 'success'
   } else {
    state.addjobstatus = "Fill All The Detail"
   }
  },
  [addjob.rejected]: (state, action) => {
   console.log('reject')
  },



  //alljob_data
  [alljobstatus.fulfilled]: (state, action) => {
   const payload = action.payload
   if (payload.status === 200) {
    let array = payload.data.data
    state.alljobsdata = array
    state.alljobsdata_clone = array
    const getdata = (data) => {
     return array.filter((val) => {
      return val.status === data && val
     })
    }

    state.statusvalue.pending = Object.keys(getdata('pending')).length
    state.statusvalue.interview = Object.keys(getdata('interview')).length
    state.statusvalue.declined = Object.keys(getdata('declined')).length

   }
  },
  [alljobstatus.rejected]: (state, action) => {
   console.log('reject')
  },


  //delete job item
  [deletejobdata.fulfilled]: (state, action) => {
   const payload = action.payload
   if (payload.status === 200) {
    let array = payload.data.data
    state.alljobsdata = array
    state.alljobsdata_clone = array
   }
  },
  [deletejobdata.rejected]: (state, action) => {
   console.log('reject')
  },


  //Updatejobdata
  [Updatejobdata.fulfilled]: (state, action) => {
   const payload = action.payload
   if (payload.status === 200) {
    console.log(payload)
   }
  },
  [Updatejobdata.rejected]: (state, action) => {
   console.log('reject')
  },
 }
})


export const { removeaddjobstatus, filter_in_job_data, editjobitem, userInfo,clear_filter_job_data } = slice.actions

export default slice.reducer