import Brothers from "../Brothers/Brothers";
import Myselft from "../MySelft/Myselft";
import Sister from "../Sister/Sister";


const Dad = ({asset}) => {
    return (
        <div>
          <h2>Dad</h2>  

          <section className="flex">
            <Myselft asset={asset}></Myselft>
            <Brothers></Brothers>
            <Sister></Sister>
          </section>
        </div>
    );
};

export default Dad;