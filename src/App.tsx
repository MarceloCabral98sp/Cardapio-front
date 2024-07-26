import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Card } from './components/card/card';
import { FoodData } from './interfaces/FoodData';
import { useFoodData } from './hooks/useFoodData';
import { CreateModal } from './components/create-modal/create-modal';

function App() {

  const {data} = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  return (
    <div className="container">
      <h1>Cardápio</h1>
      <div className="card-grid">
        {
          data?.map(foodData => (
            <Card
            price={foodData.price}
            image={foodData.image}
            title={foodData.title}
            ></Card>
          ))
        }
      </div>
        { isModalOpen && <CreateModal closeModal={handleOpenModal}></CreateModal>}
        <button onClick={handleOpenModal}>Novo</button>
    </div>
  );
}

export default App;
