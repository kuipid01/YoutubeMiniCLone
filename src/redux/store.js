import {configureStore} from '@reduxjs/toolkit'

import { YoutubeCoreApi } from './YoutubeCore'

export const store = configureStore ({
    reducer:{
[YoutubeCoreApi.reducerPath]:YoutubeCoreApi.reducer,

    },
    middleware:(getDefaultMiddleWare) => getDefaultMiddleWare().concat(YoutubeCoreApi.middleware) 
})