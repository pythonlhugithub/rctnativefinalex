export let usrName="davidliz", passWord="pdwf00"

let login={
    getUserName: ()=>{return usrName}, 
    getPassword: ()=>{return password},
    setUsrName:(newusername)=>{usrName=newusername},
    setPassword: (newpswd)=>{passWord=newpswd}
}

export default login;