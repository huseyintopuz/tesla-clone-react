import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    infos: [ "Tesla © 2022", "Privacy & Legal", "Contact", "Careers", "News", "Engage", "Locations" ]
}

const infoSlice = createSlice({
    name: "info",
    initialState,
    reducers: {}
})

export const selectInfos = state => state.info.infos

export default infoSlice.reducer 