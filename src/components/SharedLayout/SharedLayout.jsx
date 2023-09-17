import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
export const ToggleContext = createContext()
const SharedLayout = () => {
  const [isFaforite, setIsFavorite] = useState([]);
  const [page, setPage] = useState(2);
  return (
    <div>
      <Header />
      <main>
      <ToggleContext.Provider value={{isFaforite, togleValueFn: ()=>{setIsFavorite(prev=>!prev)}, page, addPage: ()=> {setPage(prev => prev + 1)}}}>
        <Outlet />
        </ToggleContext.Provider>
      </main>
      <Footer />
    </div>
  );
};

export default SharedLayout;
