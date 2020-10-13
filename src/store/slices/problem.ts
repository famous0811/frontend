import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface problem {
    subject?: string;
    title?: string;
    img?: string;
    answer?: string;
}
const initialState = {

}
const Problem = createSlice({
    name: "Problem",
    initialState,
    reducers: {

    }
});

export default Problem;