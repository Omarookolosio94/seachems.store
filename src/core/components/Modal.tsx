import { XCircle } from "react-feather";

export default function Modal({
  onClose = () => {},
  children = "Modal",
  header = "",
  instruction = "",
  boxStyle = "",
  bodyStyle = "",
}: {
  onClose?: any;
  children?: any;
  boxStyle?: string;
  bodyStyle?: string;
  header?: string;
  instruction?: string;
}) {
  return (
    <div
      className={`no-scrollbar overlay fixed left-0 top-0 z-40 h-screen w-screen overflow-auto bg-[#6C18A4BF] bg-opacity-10 ${boxStyle}`}
      style={{
        minHeight: "calc(100vh - 72px)",
        zIndex: 800,
      }}
    >
      <div className="flex h-full w-full items-center justify-center gap-1">
        <div
          className={`mx-auto w-11/12 rounded-[5px] bg-white !p-8 sm:w-2/3 md:w-[65%] lg:w-1/3 ${bodyStyle}`}
        >
          <div className="flex items-center justify-between">
            <div className="flex w-full flex-col items-center justify-center">
              <p className="ww-full text-[18px] font-[600] text-brand">
                {header}
              </p>
              <p className="text-[14px]">{instruction}</p>
            </div>
            <button
              type="button"
              className="rounded-full border border-[#6C18A4BF] p-2"
              onClick={onClose}
            >
              <XCircle />
            </button>
          </div>
          <div className="mt-[25px]">{children}</div>
        </div>
      </div>
    </div>
  );
}