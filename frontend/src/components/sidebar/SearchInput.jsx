import { IoSearchSharp } from "react-icons/io5";


const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered hover:border-gray-200 rounded-full"
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
      <IoSearchSharp />
      </button>
    </form>
  );
};

export default SearchInput;
