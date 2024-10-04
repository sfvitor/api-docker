import { useState, useEffect } from 'react';

const apiUrl = import.meta.env.VITE_API_URL;

function App() {
  const [title, setTitle] = useState('');
  const [admin, setAdmin] = useState('');

  useEffect(() => {
    (async function() {
      const titleResult = await fetch(apiUrl)
        .then(res => res.json());
      setTitle(titleResult.message);

      const adminResult = await fetch(`${apiUrl}/admin`)
        .then(res => res.json());
      setAdmin(adminResult.data);
    })();
  }, []);

  return (
    <>
      <h1>{title}</h1>
      {admin && <h2>Admin is {admin}</h2>}
    </>
  )
}

export default App
