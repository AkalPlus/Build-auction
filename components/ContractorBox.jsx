import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

const ContractorBox = () => {
  return (
    <Link
      className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-gray-400 hover:shadow-white/10"
      href="#"
    >
      <Image
        src={"/profile.jpg"}
        width={40}
        height={40}
        className="rounded-full"
        alt="profile"
      />

      <h2 className="mt-4 text-xl font-bold text-white">Priyanshu Kumar</h2>

      <p className="mt-1 text-sm text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
        possimus adipisci distinctio alias voluptatum blanditiis laudantium.
      </p>
      <div className="flex items-center justify-between pt-4">
        <h2 className="text-base font-bold text-gray-300">10K+ earned</h2>
        <div className="flex">
          <Star fill="#F59E0B " size={18} />
          <Star fill="#F59E0B " size={18} />
          <Star fill="#F59E0B " size={18} />
          <Star size={18} />
          <Star size={18} />
        </div>
      </div>
    </Link>
  );
};

export default ContractorBox;
