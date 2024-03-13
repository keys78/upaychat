import SlantCard from "../../assets/svg/SlantCard";

const Hero = () => {
  return (
    <div className="flex items-center justify-between border page__wrapper bg-green-50">
      <div>
        <h1 className="text-[24px]">Compare Card</h1>
        <h2 className="text-[46px]">
          The Ideal <br /> Card For You
        </h2>
      </div>
      <div>
        <SlantCard width="w-[600px]" />
      </div>
    </div>
  );
}

export default Hero;
