import React,{useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export default function Protected({children, authentication=true}) {

    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    

    const authStatus = useSelector((state)=>state.authSlice.status)

    useEffect(()=>{
        if(authentication && authStatus !== authentication){
            navigate("/login")
        }else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoading(false)
    },[authStatus,navigate,authentication])

  return loading ? <h1>loading</h1>  :<>{children}</>
}

