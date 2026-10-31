import { useState } from "react";
import { postData } from "../api/PostApi";

export const Form  = ({ data, setData })=> {
    const [addData, setAddData] = useState({
        title: "",
        body: ""
    });

    const handleClick = (e)=> {
        //preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        setAddData((prev)=>{
            console.log(prev);
            return{
                ...prev,
                [name]:value,
            };
            
        });
    };

    const addPosrData = async ()=> {
        const res = await postData(addData);
        console.log(res);
        
        if(res.status===201){
            setData([...data, res.data])
            setAddData({title:"",body:""});
        }
    }
    //Form cubmit
    const handleFormSubmit = (e)=> {
        e.preventDefault();
        addPosrData();
    }

    return(
        <form onSubmit={handleFormSubmit}
        action="" 
        className="mx-auto flex max-w-lg flex-row items-center gap-3">
            <div className="flex flex-cols gap-3">
                <label htmlFor="title"></label>
                <input 
                    type="text"
                    autoCapitalize="off"
                    id="title"
                    name="title"
                    placeholder="Add Title"
                    className="min-w-0 flex-1 rounded-lg border border-gray-300 px-4 py-3 outline-none 
                    focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    value={addData.title}
                    onChange={handleClick}
                 />
            </div>

            <div>
                <label htmlFor=""></label>
                <input 
                    type="text"
                    autoCapitalize="off"
                    id="body"
                    name="body"
                    placeholder="Add Post"
                    className="min-w-0 flex-1 rounded-lg border border-gray-300 px-4 py-3 outline-none 
                    focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    value={addData.body}
                    onChange={handleClick}
                 />
            </div>    
            <button type="submit"
            className="w-full rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 
            active:scale-[0.98]"
            >Submit</button>        
        </form>
    );
};