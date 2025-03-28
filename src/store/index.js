import {createStore} from "vuex";
import example from "@/store/example";

export const store = createStore({
    modules: {
        example
    }
})