import useInputState from "./useInputState";




const Hooks = () => {
const [name, handleNamChange] = useInputState('toma Akhter')

const handleSubmit = e =>{
    console.log('from data' , name)
    e.preventDefault() ;
}
    return (
        <div>
             <form onSubmit={handleSubmit}>
            <input value={name} onChange={handleNamChange} type="text" name="name"/>
            <br />
            <input type="email" name="email"/>
            <br />
            <input type="password" name="password"/>
            <br />
           
      <input type="submit" value="Submit" />
        </form>
            
        </div>
    );
};

export default Hooks;