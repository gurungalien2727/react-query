import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Peoples from './components/Peoples';
import Planets from './components/Planets';
import { QueryClient, QueryClientProvider} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

function App() {

  const [page, setPage] = useState('people');
  const queryClient = new QueryClient();

  return (
    <>
    <QueryClientProvider client={queryClient}>
    <h3>App Component</h3>
    <Navbar setPage={setPage}/>
    {page === 'people' ? <Peoples/> : <Planets/>}
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
   
   </>
  );
}

export default App;
