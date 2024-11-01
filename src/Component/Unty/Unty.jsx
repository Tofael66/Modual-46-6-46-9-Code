
import { useContext } from "react";
import Couign from "../Cousin/Couign";
import { MoneyContext } from "../GranPa/Grandpa";




const Unty = () => {
const [money , setMoney] = useContext(MoneyContext)
    return (
        <div>
        <h2>Aunty</h2>
        <section className="flex">
            <Couign name={'Toma'}></Couign>
            <Couign name={'Taniya'}></Couign>
        </section>

        <p>Money: {money}</p>
        <button onClick={() => setMoney(money + 1000)}>Add 1000 Taka </button>
        </div>
    );
};

export default Unty;