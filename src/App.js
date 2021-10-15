import React, {useState} from 'react';
import Navbar from './components/Navbar';
import People from './components/People';
import Planet from './components/Planet';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

function App() {

  const [page, setPage] = useState('people');
  const queryClient = new QueryClient();

  return (
   <>
    <QueryClientProvider client={queryClient}>
    <h3>App Component</h3>
    <Navbar setPage={setPage}/>
    {page === 'people' ? <People/> : <Planet/>}
    </QueryClientProvider>
    </>
   
  );
}

export default App;
