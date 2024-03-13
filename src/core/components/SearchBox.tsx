import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import notification from "core/helpers/notification";
import { Search } from "react-feather";

interface Props {
  formStyle?: string;
  inputStyle?: string;
  closeModal?: any;
}

export default function SearchBox({
  formStyle = "",
  closeModal = () => {},
  inputStyle,
}: Props) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchParams, setSearchParams]: any = useSearchParams();

  const search = (e: any) => {
    e.preventDefault();

    if (searchTerm?.length > 0) {
      closeModal();
      navigate(`/products?term=${encodeURIComponent(searchTerm)}`);
    } else {
      notification({
        message: "Please include a search term",
        type: "warning",
      });
    }
  };

  useEffect(() => {
    var term = searchParams.get("term");
    setSearchTerm(term == null ? "" : term);
  }, [searchParams.get("term")]);

  // TODO: Add suggestions when typing in search field

  return (
    <form className={`${formStyle}`} onSubmit={search}>
      <input
        type="text"
        className={`w-[90%] bg-transparent py-2 outline-none disabled:cursor-not-allowed ${inputStyle}`}
        placeholder="what are you looking for"
        value={searchTerm}
        disabled
        onChange={(e: any) => setSearchTerm(e?.target?.value)}
      />

      <Search className="h-[14px] hover:cursor-pointer" />
    </form>
  );
}
