import React, { useState } from 'react';
import Header from './Components/Header/Header';
import NewsItem from './Components/NewsItem/NewsItem';
import NewsComponent from './Components/NewsComponent/NewsComponent';
import { Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const [progress, setProgress] = useState(0);
  
  return (
    <div>
     
        <Header />
        <LoadingBar height={3}
        color='#f11946'
        progress={progress}

      />
        <Routes>
          <Route path="/" element={<NewsComponent setProgress={setProgress}  Component key="home" pageSize={6} country="in" category="entertainment" />} />
          <Route path="/business" element={<NewsComponent setProgress={setProgress}  Component key="business" pageSize={6} country="in" category="business" />} />
          <Route path="/entertainment" element={<NewsComponent setProgress={setProgress}  Component key="entertainment" pageSize={6} country="in" category="entertainment" />} />
          <Route path="/general" element={<NewsComponent setProgress={setProgress}  Component key="general" pageSize={6} country="in" category="general" />} />
          <Route path="/health" element={<NewsComponent setProgress={setProgress}  Component key="health" pageSize={6} country="in" category="health" />} />
          <Route path="/science" element={<NewsComponent setProgress={setProgress}  Component key="science" pageSize={6} country="in" category="science" />} />
          <Route path="/sports" element={<NewsComponent setProgress={setProgress}  Component key="sports" pageSize={6} country="in" category="sports" />} />
          <Route path="/technology" element={<NewsComponent setProgress={setProgress}  Component key="technology" pageSize={6} country="in" category="technology" />} />
        </Routes>
    
    </div>
  );
};

export default App;
