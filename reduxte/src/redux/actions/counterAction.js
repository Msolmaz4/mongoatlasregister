import ActionTyps from '../actiontYPES'


const sayiAr =(val)=>{
    return { type:ActionTyps.count.SAYI_ARTIR,payload:val}
}
const sayiAz =(val)=>{
    return { type:ActionTyps.count.SAYI_AZALT,payload:val}
}



const sayiAk ={sayiAr,sayiAz}

export default sayiAk