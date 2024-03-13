import StepCard from "../../assets/svg/StepCard";

const CardSection = () => {
  return (
    <section className="page__wrapper py-12">
      <h2>Card That LifeStyle!</h2>
      <div className="flex md:flex-row flex-col items-start justify-between space-x-6">
        <div className="md:max-w-[500px] min-w-[300px]">
          <h3 className="md:text-[40px] text-[30px] pt-5 pb-3 md:text-left text-center">
            An Ideal Card
          </h3>
          <p className="md:text-[18px]  md:text-left text-center">
            Discover the perfect card for your needs with our selection.
            Whether you're sending greetings, expressing gratitude, or sharing
            your sentiments, our cards offer elegance, style, and versatility to
            suit any occasion. Find your ideal match today.
          </p>
        </div>
        <div className="md:mt-10">
           <StepCard width="md:w-[600px] w-[300px]" />
        </div>
      </div>
      <div className="flex items-center justify-center md:mt-10">
       <div>
       <button className="py-2 px-6 rounded-md border">Register</button>
        <a href="/compare"><button className="py-2 px-6 rounded-md border-none bg-green-300 ml-5">Compare</button></a>
       </div>
      </div>
    </section>
  );
};

export default CardSection;
