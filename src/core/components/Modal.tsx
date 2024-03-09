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
      className={`no-scrollbar overlay fixed left-0 top-0 z-40 h-screen w-screen overflow-auto bg-black bg-opacity-[.6] ${boxStyle}`}
      style={{
        minHeight: "calc(100vh - 72px)",
        zIndex: 800,
      }}
    >
      <div className="flex h-full w-full items-center justify-center gap-1">
        <div
          className={`mx-auto h-[95%] w-11/12 rounded-[5px] bg-white !p-5 sm:w-2/3 md:w-[65%] lg:w-1/3 overflow-y-scroll ${bodyStyle}`}
        >
          <div className="flex items-center justify-between">

            <div className="flex w-full flex-col items-center justify-center">
              <p className="text-[18px] font-[600] text-brand">
                {header}
              </p>

              <p className="text-[14px]">{instruction}</p>
            </div>

            <button
              type="button"
              onClick={onClose}
            >
              <XCircle />
            </button>

          </div>

          <div className="mt-[10px]">{children}</div>

        </div>
      </div>
    </div>
  );
}
