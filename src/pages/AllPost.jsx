import React,{useState,useEffect} from 'react'
import appwriteService from '../appwrite/appwriteConfig'
import { Container,PostCard } from '../components'

function AllPost() {

  const[post,setPost] = useState([])

  useEffect(()=>{
    appwriteService.getPosts([]).then((post)=>{
      if(post){
        setPost(post.documents)
      }
      
    })
  },[])
  return (
    <div className='w-full py-8'>
      <Container>
        <div className='flex lg:flex-row md:flex-row sm:flex-col flex-wrap -mx-2'>
          {
            post.map((item)=>(
              <div key={item.$id} className='p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                <PostCard {...item}/>
              </div>
            ))
          }
        </div>
      </Container>
    </div>
  )
}

export default AllPost