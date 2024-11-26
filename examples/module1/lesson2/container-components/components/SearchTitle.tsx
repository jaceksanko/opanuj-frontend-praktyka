const TITLE = 'Rick and Morty';

function SearchTitle({ title = TITLE }: { title?: string }) {
  return <h1 className="text-2xl">{`Wyszukiwarka postaci ${title}`}</h1>;
}

export default SearchTitle;
