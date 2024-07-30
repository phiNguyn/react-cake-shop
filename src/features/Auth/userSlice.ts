import { createSlice } from '@reduxjs/toolkit';
import StorageKeys from '../../constants/storage-keys';
 


interface UserState {
  current: Record<string,null>; 
}

const initialState: UserState = {
  current: JSON.parse(localStorage.getItem(StorageKeys.USER) || '{}'),
};



const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  },

});
const { reducer } = userSlice
export default reducer;
