// export const getProducts = ()=> async(dispatch)=> {
//     try{
//      const data = await fetch("http://localhost:8005/getproducts",{
//             method: "GET",
//             headers:{
//                 "Content-Type":"application.js"
//             }
//             });
//             const res = await data.json();
//     console.log(res);
//      dispatch({type:"SUCCESS_GET_PRODUCTS",payload:res});
//     }

//     catch (error){
// dispatch({type:"FAIL_GET_PRODUCTS",payload:error.response});
//     }
// }