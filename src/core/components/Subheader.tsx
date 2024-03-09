interface Props {
  shortHeader: string;
  fullHeader: string;
  children?: any;
}

const Subheader = (props: Props) => {
  return (
    <section className="mb-[38px]">
      <p className="mb-2 rounded-[4px] border-l border-l-[14px] border-l-brand px-2 py-[4px] text-[12px] font-[500] text-brand">
        {props?.shortHeader}
      </p>

      <div
        className={`flex items-center ${props?.fullHeader?.length > 0 ? "justify-between" : "justify-end"}`}
      >
        {props?.fullHeader?.length > 0 && (
          <h5 className="text-[18px] font-[600] capitalize">
            {props?.fullHeader}
          </h5>
        )}
        <div className="flex items-center gap-1 capitalize">
          {props?.children}
        </div>
      </div>
    </section>
  );
};

export default Subheader;
