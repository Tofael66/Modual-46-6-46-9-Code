import { useState } from "react";



const StratFulFrom = () => {

const [name, setName] = useState(null) ;
    const [email , setEmail] = useState(null) ;
const [password, setPassword] = useState(null) ;
const [error , setError] = useState('') ;

const handleChangeName = e => {
    e.preventDefault();
    setName(e.target.value)

}


    const handleSubmit = e => {
        e.preventDefault() ;
        console.log(name, email , password)
 
      }

      const handlePassaWord =(e) =>{
e.preventDefault() ;
setPassword(e.target.value) ;
if(password.length < 6){
    setError('password must be 6 charctor or longer') ;

}
else{
    setError('') ;
}
      }

      const handleEmailChange = e =>{
        console.log(e.target.value);
        setEmail(e.target.value)
      }
  

    return (

        <div>
              <form onSubmit={handleSubmit}>
            <input
            onChange={handleChangeName }
            type="text" name="name"/>
            <br />
            <input
            onChange={handleEmailChange }
             type="email" name="email"/>
            <br />
            <input 
            onChange={handlePassaWord}
             type="password" name="password" required/>
            <br />
           
      <input type="submit" value="Submit" />

      {
        error && <p>{error}</p>
      }
        </form>
            
            
        </div>
    );
};

export default StratFulFrom;