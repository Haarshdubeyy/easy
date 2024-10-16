import CatGrid from '../components/CarGrid';
import Button from '../components/Button';
import Loader from '../components/Loader';
import Error from '../components/Error';
import EmptyState from '../components/EmptyState';
import useFetchCats from '../hooks/useFetchCats';

const Home = () => {
  const { cats, loading, error, fetchCats } = useFetchCats();

  return (
    <div className="min-h-screen bg-slate-300">
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-center my-8 text-slate-800 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 p-6 rounded-lg shadow-md">
          Cat Pictures 😸
        </h1>
        
        <div className="flex justify-center mb-8">
          <Button 
            onClick={fetchCats}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            Fetch Cats
          </Button>
        </div>
      
        <div className="bg-white rounded-xl shadow-lg p-6">
          {loading && <Loader />}
          {error && <Error message={error} />}
          {!loading && cats.length === 0 && !error && <EmptyState />}
          {!loading && cats.length > 0 && <CatGrid cats={cats} />}
        </div>
      </div>
    </div>
  );
};

export default Home;