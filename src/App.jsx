import { useEffect } from "react";
import { getPost } from "./api/PostApi";

const App = ()=> {
  //console.log(getPost());

  const getPostData = async()=> {
    const res  = await getPost();
    console.log(res);
    
  };

  useEffect(()=>{
    getPostData();
  },[]);
  
  return(
    <h1>hello curd axios</h1>
  );
};
export default App;