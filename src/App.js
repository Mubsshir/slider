import './App.css';
import ReviewCard from './components/ReviewCard';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import people from './data';
import { useState } from 'react';
const App = () => {
  const [pos, setPos] = useState(0);
  return (

    <main className="App">
      <h3 className='heading'><span>/</span> Reviews</h3>
      <section className='slider'>
        <FaAngleLeft className='btn-icon prev' />
        {people.map((buddy, index) => <ReviewCard
          key={buddy.id}
          person={buddy}
          class={() => { return "" }}
        />)}
        <FaAngleRight className='btn-icon next' />
      </section>
    </main>
  );
}

export default App;
