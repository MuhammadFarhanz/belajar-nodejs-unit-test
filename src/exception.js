export class myException extends Error {

}

export const callMe = (name) => {
    if(name !== "Farhan"){
        throw new myException("Ups my exceptions happens")
    }else{
        return "OK"
    }
}