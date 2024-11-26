import { GenderInput } from "./form/GenderInput";
import { NameInput } from "./form/NameInput";
import { SortByInput } from "./form/SortByInput";

type SearchFormProps = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  gender: string;
  setGender: React.Dispatch<React.SetStateAction<string>>;
  sortOption: string;
  setSortOption: React.Dispatch<React.SetStateAction<string>>;
};

function SearchForm({
  name,
  setName,
  gender,
  setGender,
  sortOption,
  setSortOption,
}: SearchFormProps) {
  return (
    <form className="space-x-4 flex items-end justify-center">
      <NameInput name={name} setName={setName} />
      <GenderInput gender={gender} setGender={setGender} />
      <SortByInput sortOption={sortOption} setSortOption={setSortOption} />
    </form>
  );
}

export default SearchForm;
