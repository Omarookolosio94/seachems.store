import { Minus, Plus } from "react-feather";

interface Props {
  qty: number;
  setQty?: any;
  boxStyle?: string;
  product?: any;
}

export default function PlusMinusField({
  qty = 1,
  setQty = () => {},
  boxStyle = "",
  product = null,
}: Props) {
  const handleQtyChange = (isIncrement: boolean = true) => {
    if (!isIncrement && qty == 1) {
      product != null ? setQty(product, +qty) : setQty(+qty);
    } else if (!isIncrement && qty > 1) {
      product != null ? setQty(product, +qty - 1) : setQty(+qty - 1);
    } else if (isIncrement) {
      product != null ? setQty(product, +qty + 1) : setQty(+qty + 1);
    }
  };

  const handleFormChange = (e: any) => {
    const { name, value } = e?.target;

    if (+value > 0) {
      setQty(value);
    }
  };

  return (
    <div className={`h-8 ${boxStyle}`}>
      <button
        disabled={qty == 1}
        onClick={() => handleQtyChange(false)}
        className="h-full w-1/3 rounded-l-[4px] border p-2 outline-none disabled:cursor-not-allowed"
      >
        <Minus className="h-[90%] w-[90%]" />
      </button>
      <input
        value={qty}
        type="number"
        name="quantity"
        className="h-full w-2/4 border p-2 text-center outline-none"
        onChange={handleFormChange}
      />
      <button
        onClick={() => handleQtyChange(true)}
        className="h-full w-1/3 rounded-r-[4px] bg-brand p-2 text-white outline-none"
      >
        <Plus className="h-[90%] w-[90%]" />
      </button>
    </div>
  );
}
