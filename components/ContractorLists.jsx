import ContractorBox from "./ContractorBox";
import { Button } from "./ui/button";

const ContractorLists = () => {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Our Top Contractor</h2>

          <p className="mt-4 text-gray-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Contractor Box */}
          <ContractorBox />
          <ContractorBox />
          <ContractorBox />
          <ContractorBox />
          <ContractorBox />
          <ContractorBox />
        </div>

        <div className="mt-12 text-center">
          <Button variant="primary" size="primary">
            View All
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContractorLists;
