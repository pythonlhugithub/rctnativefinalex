console.log("!")
import login, {usrName} from './loginserver0.js'

const logiii=()=>{

 const adduserName=(UserName)=>{
   login.setUsrName(UserName)
};

 const addpassWord=(passWord)=>{
    login.setPassword(passWord)
 };
 
 const getrName=()=>{
         login.getuserName()
 };
 
 const getpWord=()=>{
     console.log("paswssssss")
  };
  
}
  export let nm=usrName;

  export default logiii;



   function fetchData(){
    alert(grName());
   };


  export const grName=()=>{
    //api calls here----------------->
   return "david"
};


export { fetchData };