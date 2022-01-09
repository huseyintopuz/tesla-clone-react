import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    menus: ["Exisiting Inventory", "Used Inventory", "Trade-In", "Test Drive", "Cybertruck", "Roadster", "Semi",
        "Charging", "Powerwall", "Commercial Energy", "Utilities", "Find Us", "Support", "Investor Relations" ]
}

const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {}
})

export const selectMenus = state => state.menu.menus

export default menuSlice.reducer