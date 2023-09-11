import axios from 'axios' ;
// const API_BASE_URL = 'http://localhost:8000' ;
// const API_BASE_URL = 'https://file-sharing-be-i1so.onrender.com' ;
const API_BASE_URL="https://file-sharing-be-16hm.onrender.com"


export const uploading =   async(data)=>{

    try{


        const res = await axios.post(`${API_BASE_URL}/upload` , data)
        return res.data ;

    }

    catch(error){
        console.log("Some error while uploading the file" , error.message)
    }
    
}