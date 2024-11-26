import CharacterList from '../components/CharacterList';
import SearchForm from '../components/SearchForm';
import SearchTitle from '../components/SearchTitle';
import { useCharactersSearch } from '../hooks/useCharactersSearch';
import { useSortOptions } from '../hooks/useSortOptions';



function CharacterSearchContainer() {
  const { name, setName, gender, setGender, characters } =
    useCharactersSearch();
  const { sortOption, setSortOption, sortedCharacters } =
    useSortOptions(characters);

  return (
    <>
      <div className="pt-20" />
      <SearchTitle />
      <div className="pt-8" />
      <SearchForm
        name={name}
        setName={setName}
        gender={gender}
        setGender={setGender}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      <div className="pt-12" />
      <CharacterList characters={sortedCharacters} />
      <div className="pt-16" />
    </>
  );
}

export default CharacterSearchContainer;
