import React , {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Header from './Header';

export default function Protected(props){
   let Cmp = props.Cmp
    useEffect(()=>{
        if(!localStorage.getItem('user-info'))
        {
            navigate.push("./register")
        }
    
    },[])
    const navigate = useNavigate();
    return(
    <div>
    <Cmp/>
    </div>
    )
}