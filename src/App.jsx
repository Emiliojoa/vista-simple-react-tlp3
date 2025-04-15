import {useEffect, useState} from "react"

function App() {
  const [data, setData] = useState(null);
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/character");

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((info) => setData(info))
      .catch((err) => console.error(err));
  }, [url]);

  const handleNext = () => {
    if (data?.info?.next) {
      setUrl(data.info.next);
    }
  };

  const handlePrev = () => {
    if (data?.info?.prev) {
      setUrl(data.info.prev);
    }
  };

  return (


    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
          <h1 className="text-5xl font-bold text-green-400 mb-4">Api de Rick and Morty</h1>
            <p className="text-xl text-gray-300 mb-8">Total : {data?.info?.count}</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={handlePrev}
              disabled={!data?.info?.prev}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-600 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-green-500/25"
            >
              ← Atras
            </button>
            <button
              onClick={handleNext}
              disabled={!data?.info?.next}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-600 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-green-500/25"
            >
              Siguiente→
            </button>
          </div>
        </div>
        
<>

</>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data?.results?.map((character) => (
            <>
            <div
              key={character.id}
              className="bg-white/5 backdrop-blur rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={character.image}
                  alt={character.name}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-400 mb-4">{character.name}</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400 min-w-[4.5rem]">Estado:</span>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      character.status === 'Alive' ? 'bg-green-900/50 text-green-400' :
                      character.status === 'Dead' ? 'bg-red-900/50 text-red-400' :
                      'bg-gray-700/50 text-gray-400'
                    }`}>
                      {character.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400 min-w-[4.5rem]">Especie:</span>
                    <span className="text-gray-300">{character.species}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400 min-w-[4.5rem]">Origen:</span>
                    <span className="text-gray-300">{character.origin.name}</span>
                  </div>
                  <div>
                    
                  </div>
                </div>
                <div>
                  
                </div>
              </div>
            </div>
            
          </>
          ))
          }
         
        </div>
       
      </div>
      
        
          
          </div>
    
  );
}

export default App;