import CardOne from "../../assets/svg/CardOne";
import CardThree from "../../assets/svg/CardThree";
import CardTwo from "../../assets/svg/CardTwo";
import CompareLine from "./CampareLine";
import { CreditCard, CheckCircle, Cardholder, Bank, ChartLineUp, CurrencyEur, DeviceMobile, GlobeStand, ShieldCheck, SketchLogo, WifiHigh } from "phosphor-react";

const GetStarted = () => {
  return (
    <>
      <section className="flex items-start space-x-8 page__wrapper py-20">
        <div>
          <div>
            <span className="text-[18px] pb-3 text-gray-500">Basic</span>{" "}
            <span className="bg-gray-100 px-1 rounded-md">Popular</span>
          </div>
          <h4 className="text-[36px] mt-6">Free</h4>
          <h4 className="text-[18px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, dolores!
          </h4>
          <div className="mt-6 mb-4">
            <CardOne />
          </div>
          <button className="py-2 px-6 rounded-md border-none bg-[#4EE54A] w-full">
            Get Started
          </button>
        </div>
        <div>
          <div>
            <span className="text-[18px] pb-3 text-gray-500">Premium</span>
          </div>
          <h4 className="text-[36px] mt-6">
            $6 <span className="text-gray-400 text-[16px]">per month</span>
          </h4>
          <h4 className="text-[18px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, dolores!
          </h4>
          <div className="mt-6 mb-4">
            <CardTwo />
          </div>
          <button className="py-2 px-6 rounded-md border-none bg-[#051641] text-white w-full">
            Get Started
          </button>
        </div>
        <div>
          <div>
            <span className="text-[18px] pb-3 text-gray-500">Gold</span>
          </div>
          <h4 className="text-[36px] mt-6">
            $12 <span className="text-gray-400 text-[16px]">per month</span>
          </h4>
          <h4 className="text-[18px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, dolores!
          </h4>
          <div className="mt-6 mb-4">
            <CardThree />
          </div>
          <button className="py-2 px-6 rounded-md border-none bg-[#625408] text-white w-full">
            Get Started
          </button>
        </div>
      </section>
      <section className="page__wrapper">
        <div className="mb-10">
          <h5 className="text-[18px]">Credit Card</h5>
          <CompareLine
            serviceIcon={<CreditCard size={26} />}
            serviceTitle={"Physical Card"}
            fillOne={"Optional"}
            fillTwo={<CheckCircle size={26} color="#20c52b" />}
            fillThree={<CheckCircle size={26} color="#20c52b" />}
          />
          <CompareLine
            serviceIcon={<Cardholder size={26} color="#070807" />}
            serviceTitle={"Virtual Card"}
            fillOne={"-"}
            fillTwo={'Up to 2'}
            fillThree={'Unlimited'}
          />
          <CompareLine
            serviceIcon={<WifiHigh size={26} color="#070807" />}
            serviceTitle={"Contactless Payment"}
            fillOne={<CheckCircle size={26} color="#20c52b" />}
            fillTwo={<CheckCircle size={26} color="#20c52b" />}
            fillThree={<CheckCircle size={26} color="#20c52b" />}
          />
          <CompareLine
            serviceIcon={<CurrencyEur size={26} color="#070807" />}
            serviceTitle={"Mobile Payment"}
            fillOne={<CheckCircle size={26} color="#20c52b" />}
            fillTwo={<CheckCircle size={26} color="#20c52b" />}
            fillThree={<CheckCircle size={26} color="#20c52b" />}
          />
        </div>
        <div className="mb-10">
          <h5 className="text-[18px]">Bank Acccount</h5>
          <CompareLine
            serviceIcon={<GlobeStand size={26} color="#070807" />}
            serviceTitle={"Free Payment WorldWide"}
            fillOne={"-"}
            fillTwo={<CheckCircle size={26} color="#20c52b" />}
            fillThree={<CheckCircle size={26} color="#20c52b" />}
          />
          <CompareLine
            serviceIcon={<Bank size={26} color="#070807" />}
            serviceTitle={"Free ATM withdrawals"}
            fillOne={"2"}
            fillTwo={'5'}
            fillThree={'10'}
          />
          <CompareLine
            serviceIcon={<DeviceMobile size={26} color="#070807" />}
            serviceTitle={"Mobile Banking"}
            fillOne={<CheckCircle size={26} color="#20c52b" />}
            fillTwo={<CheckCircle size={26} color="#20c52b" />}
            fillThree={<CheckCircle size={26} color="#20c52b" />}
          />
        </div>
        <div className="mb-10">
          <h5 className="text-[18px]">Extra Features</h5>
          <CompareLine
            serviceIcon={<ShieldCheck size={26} color="#070807" />}
            serviceTitle={"Savings Account"}
            fillOne={'2'}
            fillTwo={'5'}
            fillThree={'Unlimited'}
          />
          <CompareLine
            serviceIcon={<ChartLineUp size={26} color="#070807" />}
            serviceTitle={"Advanced Statistics"}
            fillOne={<CheckCircle size={26} color="#20c52b" />}
            fillTwo={<CheckCircle size={26} color="#20c52b" />}
            fillThree={<CheckCircle size={26} color="#20c52b" />}
          />
          <CompareLine
            serviceIcon={<SketchLogo size={26} color="#070807" />}
            serviceTitle={"Premium Partner Offers"}
            fillOne={<CheckCircle size={26} color="#20c52b" />}
            fillTwo={<CheckCircle size={26} color="#20c52b" />}
            fillThree={<CheckCircle size={26} color="#20c52b" />}
          />
        </div>
      </section>
    </>
  );
};

export default GetStarted;
