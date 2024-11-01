import Couign from "../Cousin/Couign";




const Uncle = ({asset}) => {
    return (
        <div>
           <h2>Uncle</h2> 
           <section className="flex">
            <Couign name={'Rafsan'}></Couign>
            <Couign asset={asset} name={'Sohana'}></Couign>
           </section>
        </div>
    );
};

export default Uncle;