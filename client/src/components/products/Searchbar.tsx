import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchAllProducts } from "../slices/productSlice";
import { RootState } from "../../app/store";

type evento = {
  target: eventarget;
};
type eventarget = {
  value: string;
  name: string;
};

const SearchBar = () => {
  const [tosearch, setTosearch] = useState("");
  const dispatch = useAppDispatch();

  function search(searchTerm: any) {
    setTosearch(searchTerm);
    console.log(searchTerm);
  }

  function HandlertoSearch(e: any) {
    dispatch(fetchAllProducts(tosearch));
    setTosearch("");
  }

  function handleChange(e: evento) {
    if (e.target.name === "tosearch") setTosearch(e.target.value);
  }

  const data = useAppSelector((state: RootState) => state.products);

  return (
    <div className="relative lg:mt-0 mt-6 mx-8">
      <div>
        <input
          onChange={handleChange}
          name="tosearch"
          className="border border-black lg:rounded-md w-full pl-2 lg:h-full h-[5vh]"
          value={tosearch}
          type="text"
          placeholder="Search"
        />
        <BsSearch
          className="absolute lg:top-1 top-3 right-1 cursor-pointer"
          stroke="currentColor"
          onClick={() => {
            HandlertoSearch(tosearch);
          }}
        />
      </div>
      <div className="cursor-pointer border-black border">
        {data.allProducts
          ?.filter((item) => {
            const searchTerm = tosearch.toLowerCase();
            const itemName = item.name.toLowerCase();

            return (
              searchTerm &&
              itemName.startsWith(searchTerm) &&
              itemName !== searchTerm
            );
          })
          .slice(0, 10)
          ?.map((item) => (
            <div className="p-2" onClick={() => search(item.name)}>
              {item.name}
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchBar;
