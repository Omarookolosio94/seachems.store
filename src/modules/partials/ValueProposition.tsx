import { Headphones, Shield, Truck } from "react-feather";

const ValueProposition = () => {
  const propositions = [
    {
      name: "Reliable and Fast Delivery",
      icon: <Truck className="h-[32px] w-[32px]" />,
      description: "Reliable and fast delivery for all orders",
    },
    {
      name: "24/7 Customer Care",
      icon: <Headphones className="h-[32px] w-[32px]" />,
      description: "Friendly 24/7 Customer Support",
    },
    {
      name: "Money Back Guarantee",
      icon: <Shield className="h-[32px] w-[32px]" />,
      description: "We return money within 30 days",
    },
  ];

  return (
    <section className="mb-[38px] flex items-center justify-center gap-5">
      {propositions?.length > 0 &&
        propositions?.map((prop) => (
          <div
            key={prop?.name}
            className="flex flex-col items-center justify-center gap-3  px-5 py-10"
          >
            <div className="rounded-full border border-[6px] border-shade">
              {prop?.icon}
            </div>
            <div className="text-center">
              <p className="text-[14px] font-[600]">{prop?.name}</p>
              <p className="text-[12px]">{prop?.description}</p>
            </div>
          </div>
        ))}
    </section>
  );
};

export default ValueProposition;
