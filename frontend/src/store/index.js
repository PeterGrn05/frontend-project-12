import { configureStore } from '@reduxjs/toolkit'
import channelsReducer from './slice/Channel'
import messagesReducer from './slice/Msg'
import authReducer from './slice/Auth'

const store = configureStore({
  reducer: {
    channels: channelsReducer,
    messages: messagesReducer,
    auth: authReducer,
  },
})

export default store