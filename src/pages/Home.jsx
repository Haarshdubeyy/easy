
import CatGrid from '../components/CarGrid';
import Button from '../components/Button';
import Loader from '../components/Loader';
import Error from '../components/Error';
import EmptyState from '../components/EmptyState';
import useFetchCats from '../hooks/useFetchCats';





const Home = () => {
  const { cats, loading, error, fetchCats } = useFetchCats();

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center my-8">Cat Grid</h1>
      <div className="flex justify-center mb-5">
      <Button onClick={fetchCats}>Fetch Cats</Button>
      </div>
   
      {loading && <Loader />}
      {error && <Error message={error} />}
      {!loading && cats.length === 0 && !error && <EmptyState />}
      {!loading && cats.length > 0 && <CatGrid cats={cats} />}
    </div>
  );
};

export default Home;
