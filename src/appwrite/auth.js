import config from '../config/config'
import {Client, Account, ID} from "appwrite"

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl )
            .setProject(config.appwriteProjectId)
        
        this.account = new Account(this.client)
    }

    async createAccount({email, password, name}){
        try{
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if(userAccount){
                // call another method
                return this.login({email, password})
            }else{
                return userAccount
            }
        }catch(error){
            console.log("Auth Service-CreateAccountFunction : ", error)
        }
    }

    async login({email,password}){
        try{
            console.log("Auth Service-LoginFunction checking passed values : ", email, password)
           return await this.account.createEmailPasswordSession(email,password)
        }catch(error){
            console.log("Auth Service-LoginFunction : ", error)
        }
    }

    async getCurrentUser(){
        try{
            return await this.account.get();
        }catch(error){
            console.log("Auth Service-GetCurrentUserFunction : ", error)
            return null
        }

        return null
    }

    async logout(){
        try{
           await this.account.deleteSessions( ) 
        }catch(error){
            console.log("Auth Service-LogoutFunction : ", error)
        }
    }
}

const authService = new AuthService()

export default authService