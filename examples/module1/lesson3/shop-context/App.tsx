import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

import Header from './components/Header';
import Sidebar from './components/Sidebar';

const App = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="overflow-hidden">
      <Router>
        <Header setIsSidebarOpen={setIsSidebarOpen} />
        {children}
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </Router>
    </div>
  );
};

export default App;
