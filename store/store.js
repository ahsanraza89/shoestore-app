import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./slices/products";

export let myStore = configureStore ({
    reducer: {
        productSlice: productSlice.reducer, // Ensures `productSlice` is a key in the store
      },
})