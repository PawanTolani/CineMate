import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Card } from "../components";

const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  
  const { data: movies } = useFetch(apiPath, queryTerm);
  
  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">{ movies.length === 0 ? `No result found for '${queryTerm}'` : `Result for '${queryTerm}'` }</p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">       
          { movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          )) }          
        </div>
      </section>
    </main>
  )
}
export default Search;




// import { useSearchParams } from "react-router-dom";
// import { useFetch } from "../hooks/useFetch";
// import { Card } from "../components";

// const Search = ({ apiPath }) => {
//   const [searchParams] = useSearchParams();
//   const queryTerm = searchParams.get("q");
  
//   const { data: movies, error, isLoading } = useFetch(apiPath, queryTerm);

//   return (
//     <main>
//       <section className="py-7">
//         {isLoading && <p className="text-3xl text-gray-700 dark:text-white">Loading...</p>}
//         {error && <p className="text-3xl text-gray-700 dark:text-white">Error loading data</p>}
//         {!isLoading && !error && (
//           <p className="text-3xl text-gray-700 dark:text-white">
//             {movies && movies.length === 0 ? `No result found for '${queryTerm}'` : `Result for '${queryTerm}'`}
//           </p>
//         )}
//       </section>
//       <section className="max-w-7xl mx-auto py-7">
//         <div className="flex justify-start flex-wrap">
//           {movies && movies.map((movie) => (
//             <Card key={movie.id} movie={movie} />
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// };
// export default Search;
