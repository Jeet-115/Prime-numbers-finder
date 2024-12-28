import { useState } from 'react';

function App() {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [primes, setPrimes] = useState([]);

  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const findPrimes = () => {
    const s = parseInt(start);
    const e = parseInt(end);
    if (s >= e || isNaN(s) || isNaN(e)) {
      alert('Please enter a valid range.');
      return;
    }
    const result = [];
    for (let i = s; i <= e; i++) {
      if (isPrime(i)) {
        result.push(i);
      }
    }
    setPrimes(result);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold text-center mb-6">Prime Number Finder</h1>
        <div className="flex flex-col gap-4">
          <input
            type="number"
            placeholder="Start Range"
            value={start}
            onChange={(e) => setStart(e.target.value)}
            className="p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="number"
            placeholder="End Range"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
            className="p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={findPrimes}
            className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
          >
            Find Primes
          </button>
        </div>
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Prime Numbers:</h2>
          {primes.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {primes.map((prime, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-green-200 rounded-lg text-green-800"
                >
                  {prime}
                </span>
              ))}
            </div>
          ) : (
            <p>No primes found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;