import ActionTyps  from "../actiontYPES";

//isi  biy burda yaapriz
//baslanfcutaa baslangic degeri veroiriy
 const initialState = 0
//baslangicta iki deger alir state,action
 const countReducer = (state=initialState,action)=>{

    switch(action.type){
        case ActionTyps.count.SAYI_ARTIR:
        return state+action.payload
        case ActionTyps.count.SAYI_AZALT:
        return state-action.payload
        default:
            return state

    }

 }
 export default countReducer