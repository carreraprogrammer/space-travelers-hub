/* eslint-disable no-unused-vars */
import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './pages/Navbar';
import store from './components/Redux/ConfigureStore/ConfigureStore';
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';
import Profile from './pages/Profile';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/Rockets.js" element={<Rockets />} />
          <Route path="/Missions.js" element={<Missions />} />
          <Route path="/Profile.js" element={<Profile />} />
        </Routes>
      </Provider>
    </div>
  );
}
export default App;
