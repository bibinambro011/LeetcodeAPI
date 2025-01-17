import userlogin from "../../interfaces/userInterface";
import { userRepository } from "../repositories/userRepository";


const userrepository=new userRepository;

export class userService{
    //regigtering user
    async registeruser(data:any){
        try{
            return userrepository.userRegister(data)
        }catch(error:any){
            throw new Error(error.message)
        }
    }
    //checking if the user is existing
    async isUserexists(data:any){
        try{
            return userrepository.isUserexists(data)
        }catch(error:any){
            throw new Error(error.message)
        }
    }
    async loginUser(data:userlogin){
        try{
            return userrepository.loginUser(data)
        }catch(error:any){
            throw new Error("user not exist")
        }
    }
}