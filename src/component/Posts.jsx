import { useEffect, useState } from "react";
import { getPost } from "../api/PostApi";

export const Posts = ()=> {
    const [data, setData] = useState([])
    const getPostData = async()=> {
    const res  = await getPost();
    setData(res.data)
    console.log(res);
    
  };

  useEffect(()=>{
    getPostData();
    //console.log(getPost());
  }, []);

    return(
        <section>
            <ul className="grid grid-cols-3 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {data.map((currItem)=>{
                    const {id, title, body} = currItem
                    return <li className="bg-grey-500"
                    key={id}>
                        <p>{title}</p>
                        <p>{body}</p>
                        <button className="relative z-0 rounded bg-green-400 px-5 py-1 transition-[all_0.3s_ease] 
                        after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-0 after:rounded 
                        after:bg-green-500 after:transition-[all_0.3s_ease]  hover:after:w-full">Edit</button>
                        <button className="relative z-0 rounded bg-red-400 px-5 py-1 transition-[all_0.3s_ease] 
                        after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-0 after:rounded 
                        after:bg-red-500 after:transition-[all_0.3s_ease]  hover:after:w-full">Delete</button>
                    </li>
                })}
            </ul>
        </section>
    )
}