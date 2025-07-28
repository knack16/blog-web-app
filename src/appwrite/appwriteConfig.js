import config from "../config/config"
import { Client, ID, Databases, Storage, Query } from "appwrite"

export class Service{

    client = new Client();
    databases;
    bucket;

    constructor(){
         this.client
            .setEndpoint(config.appwriteUrl )
            .setProject(config.appwriteProjectId);

        this.databases = new Databases(this.client);

        this.bucket = new Storage(this.client);
    }

    async CreatePost({title, slug, content,featuredImage, status, userId}){
        try{
            return await this.databases.createDocument(config.appwriteDatabaseId, config.appwriteCollectionId,slug,{
                title,
                content,
                featuredImage,
                status,
                userId,
            })
        }catch(error){
            console.log("appwriteConfig-createPost error: ", error)
        }
    }

    async updatePost(slug,{title,content,featuredImage, status}){
        try{
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        }catch(error){
            console.log("appwriteConfig-updatePost error: ", error)
        }
    }

    async deletePost(slug){
        try{
            await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,

            )
            return true
        }catch(error){
            console.log("appwriteConfig-deletePost error: ", error)
            return false
        }
    }

    async getPost(slug){
        try{
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
        }catch(error){
            console.log("appwriteConfig-getPost error: ", error)
        }
    }

    async getPosts(queries = [Query.equal("status","active")]){
        try{
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries,
            )
        }catch(error){
            console.log("appwriteConfig-getPosts error: ", error);
            return false
        }
    }


    //fileUpload

    async uploadFile(file){
        try{
            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            )
        }catch(error){
            console.log("AppwriteService : FileUpload : error",error)
        }
    }

    async deleteFile(documentId){
        try{
            await this.bucket.deleteFile(
                config.appwriteBucketId,
                documentId
            )
            return true
        }catch(error){
           console.log("AppwriteService : FileDelete : error",error)
            return false
        }
    }


    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            config.appwriteBucketId,
            fileId,
            
        )
    }

}

const service = new Service()

export default service