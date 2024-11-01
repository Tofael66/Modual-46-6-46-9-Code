import { useContext } from "react";
import { MoneyContext } from "../GranPa/Grandpa";


const Brothers = () => {
  const [money, setMoney] = useContext(MoneyContext);

    return (
        <div>
          <h2>Brother</h2>  
          <p>Grandpa: {money}</p>
        </div>
    );
};

export default Brothers;