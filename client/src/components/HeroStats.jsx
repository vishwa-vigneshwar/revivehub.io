import {
  FaRecycle,
  FaUsers,
  FaShieldAlt,
  FaLeaf,
  FaTruck,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaRecycle />,
    value: "10K+",
    title: "Products Revived",
  },
  {
    icon: <FaUsers />,
    value: "5K+",
    title: "Happy Customers",
  },
  {
    icon: <FaShieldAlt />,
    value: "1 Year",
    title: "Warranty",
  },
  {
    icon: <FaLeaf />,
    value: "100%",
    title: "Eco Friendly",
  },
  {
    icon: <FaTruck />,
    value: "24/7",
    title: "Doorstep Pickup",
  },
];

export default function HeroStats() {
  return (
    <section className="-mt-20 relative z-30 px-6">
      <div className="max-w-7xl mx-auto rounded-3xl border border-lime-500/20 bg-white/5 backdrop-blur-2xl shadow-[0_0_40px_rgba(132,255,0,0.15)]">

        <div className="grid grid-cols-2 lg:grid-cols-5">

          {stats.map((item, index) => (
            <div
              key={index}
              className="p-8 border-r border-lime-500/10 last:border-r-0 text-center hover:bg-lime-500/5 transition"
            >
              <div className="flex justify-center text-4xl text-lime-400 mb-4">
                {item.icon}
              </div>

              <h2 className="text-4xl font-black text-white">
                {item.value}
              </h2>

              <p className="mt-2 text-gray-400">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}