import Friend from "../Friend/Friend";
import Special from "../Special/Special";



const Couign = ({name , asset}) => {
    return (
        <div>
           <h2>Couign</h2> 
           <p>{name}</p>
           <section>
          { asset && < Special asset={asset}></Special>}
          {name ==="Toma" && <Friend></Friend>}
           </section>
        </div>
    );
};

export default Couign;