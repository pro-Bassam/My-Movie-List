import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducer";
import logger from "./middleware/logger";
import toast from "./middleware/toast";
import api from "./middleware/api";

// export default function () {
//   return configureStore({
//     reducer,
//     middleware: [
//       ...getDefaultMiddleware(),
//       logger({ distination: "console" }),
//       toast,
//       // api,
//     ],
//   });
// }

const store = configureStore({
  reducer,
  middleware: [
    ...getDefaultMiddleware(),
    logger({ distination: "console" }),
    toast,
    // api,
  ],
});
export default store;
