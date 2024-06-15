import React,{useState,useEffect} from 'react';

const Show = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json').then((res)=>res.json()).then((data) => {setData(data);console.log(data)})
    },[]);

    return(
        // {data.map((element) => <li>{element.name}</li>)}
        <p>{JSON.stringify(data)}</p>
    )
};

export default Show;