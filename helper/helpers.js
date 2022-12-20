import jwt from "jsonwebtoken"

const dcryptUser = (token)=>{
    const validToken = jwt.verify(token,"qweerrtyytgdfvnfvdfjverv")
    if(validToken){
        const userId = jwt.decode(token,{complete:true})
        return userId.payload
    }
}

export default dcryptUser