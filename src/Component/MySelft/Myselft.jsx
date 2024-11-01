import Special from "../Special/Special";




const Myselft = ({asset}) => {
    return (
        <div>
            <h2>MySelft</h2>
            <section className="flex">
                <Special asset={asset}></Special>
            </section>

        </div>
    );
};

export default Myselft;