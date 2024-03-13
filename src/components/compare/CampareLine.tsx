interface CampareLineProps {
    serviceIcon: React.ReactNode;
    serviceTitle: string;
    fillOne: React.ReactNode;
    fillTwo: React.ReactNode;
    fillThree: React.ReactNode;
  }

const CampareLine = ({serviceIcon, serviceTitle, fillOne, fillTwo, fillThree,}: CampareLineProps) => {
  return (
    <div>
      <div className="grid grid-cols-6 border-t py-2 items-center">
        <div className="flex items-center space-x-5 md:col-span-3 col-span-6">
          <div className="bg-green-100 rounded-full p-2">{serviceIcon}</div>
          <div>
            <h3 className="font-semibold pb-1">{serviceTitle}</h3>
            <h5>Lorem ipsum dolor sit amet consectetur</h5>
          </div>
        </div>
        <div className="md:ml-0 ml-6 md:mt-0 mt-5 md:col-span-1 col-span-2">{fillOne}</div>
        <div className="md:ml-0 ml-6 md:mt-0 mt-5 md:col-span-1 col-span-2">{fillTwo}</div>
        <div className="md:ml-0 ml-6 md:mt-0 mt-5 md:col-span-1 col-span-2">{fillThree}</div>
      </div>
    </div>
  );
};

export default CampareLine;
