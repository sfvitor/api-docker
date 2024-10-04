import { useState, useEffect } from 'react'

function App() {
  const [title, setTitle] = useState('');

  useEffect(() => {
    (async function() {
      const result = await fetch(import.meta.env.VITE_API_URL)
        .then(res => res.json());
      setTitle(result.message);
    })();
  }, []);

  return (
    <>
      <h1>{title}</h1>
    </>
  )
}

export default App
