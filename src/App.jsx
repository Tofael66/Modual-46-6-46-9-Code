
import './App.css'
import Grandpa from './Component/GranPa/Grandpa'
// import Hooks from './Component/Hooks/Hooks'
import ReusableForm from './Component/ReusableForm/ReusableForm'
// import SimpleFrom from './Component/SimpleFrom/SimpleFrom'
// import StratFulFrom from './Component/StrateFullFrom/StratFulFrom'
// import RefFrom from './RefFrom/RefFrom'

function App() {


    const signUpSubmit = data =>{
       console.log('sign up data' , data)

    }
    
    const handleUpdateProfile = data =>{
     console.log("update profilr" ,data)
    }
 

  return (
    <>

   
      <h1>Vite + React</h1>


{/* Modual-46.6 */}
<Grandpa></Grandpa>







      {/* // Modual-46.1 */}
  {/* <SimpleFrom></SimpleFrom> */}

        {/* // Modual-46.2 */}
        {/* <StratFulFrom></StratFulFrom> */}

        {/* // Modual-46.3 */}
        {/* <RefFrom></RefFrom> */}

           {/* // Modual-46.4 */}
           {/* <Hooks></Hooks> */}

             {/* // Modual-46.5 */}
             {/* <ReusableForm fromTile={'Sign Up'} handleSubmit={signUpSubmit}>
            <div>
              <h2>Sing Up </h2>
              <p>Please sing up right now</p>
            </div>

             </ReusableForm>
             <ReusableForm fromTile={'Profile Update'} handleSubmit={ handleUpdateProfile}  submitBtnText='Update'>
              <div>
                <h2>Update Profile</h2>
                <p>Always keep you profile updated</p>
              </div>
             </ReusableForm> */}

    </>
  )
}

export default App
