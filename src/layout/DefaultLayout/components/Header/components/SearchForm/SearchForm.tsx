import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import React, { useState } from "react";
import SearchResult from "./SearchResult";

function SearchForm({
  openModal,
  setOpenModalHeader,
}: {
  openModal: boolean;
  setOpenModalHeader: () => void;
}) {
  const [Focus, setFocus] = useState(false);
  return (
    <div
      onClick={setOpenModalHeader}
      className={clsx(
        "w-[420px] border  px-3 py-2 rounded-3xl flex items-center gap-3 relative",
        Focus ? "border-gray-900 border-2" : "border-gray-300"
      )}
    >
      <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[#8a8989]" />
      <input
        onFocus={() => {
          setFocus(true);
        }}
        type="text"
        placeholder="Tìm kiếm khóa học, bài viết, video,..."
        className="flex-1 outline-none text-sm"
      />
      {openModal && <SearchResult />}
    </div>
  );
}
export default SearchForm;
