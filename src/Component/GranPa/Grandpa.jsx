import { createContext, useState } from "react";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import Unty from "../Unty/Unty";
import "./GrandPa.css"


 export const AssetContext = createContext('gold') ;

export const MoneyContext = createContext(1000) ;


const Grandpa = () => {

    const asset = 'diamond' ;
    const [money , setMoney] =useState(1000) ;

    return (
        <div className="grandpa ">
         
         <h2>Grandpa</h2>
         <p>Net Money {money}</p>

<MoneyContext.Provider value={[money, setMoney]}>
<AssetContext.Provider value="gold">
        <section className="flex">
          <Dad asset={asset}></Dad>
            <Uncle asset={asset}></Uncle>
            <Unty></Unty>
          </section>
        </AssetContext.Provider>
</MoneyContext.Provider>
      
        </div>
    );
};

export default Grandpa;



/**
 * 1. create a contact and export it
 * 2. add provider for the context with new value. value could be anything
 * 3. useContext to access value in the api
 */