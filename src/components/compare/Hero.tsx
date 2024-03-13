import SlantCard from "../../assets/svg/SlantCard";

const Hero = () => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-between page__wrapper bg-green-50 md:py-20 py-10">
      <div className="md:pb-0 pb-12">
        <h1 className="md:text-[24px] pb-6">Compare Card</h1>
        <h2 className="md:text-[46px] text-[30px] min-w-[300px] md:text-left text-center">
          The Ideal Card<br className="md:block hidden" />For Your Daily Needs
        </h2>
      </div>
      <div>
        <SlantCard className="md:w-[600px] w-[350px] md:h-[400px] h-[300px]" />
      </div>
    </div>
  );
}

export default Hero;
