import {createStore} from "vuex";

export const store = createStore({
    state: {
        item: 'hello vuex',
        items: []
    },
    mutations:{
        setItem(state, payload){
            state.item = payload
        }
    },
    actions:{
        setItem(context, payload){
            context.commit('setItem', payload)
        }
    },
    getters:{
        getItem(state, payload){
            return `__ ${state.item} __`
        }
    }
})