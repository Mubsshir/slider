import './App.css';
import ReviewCard from './components/ReviewCard';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import people from './data';
import { useEffect, useState } from 'react';
const App = () => {
  const [pos, setPos] = useState(0);
  const nextSlide = () => {
    if (pos === people.length - 1) {
      setPos(0);
      return
    }
    setPos(pos + 1);
  }
  const prevSlide = () => {
    if (pos === 0) {
      setPos(people.length - 1);
      return
    }
    setPos(pos - 1);
  }
  useEffect(() => {
    let slide = setInterval(() => {
      setPos(prev => {
        let position = prev + 1;
        if (position > people.length - 1) {
          position = 0;
        }
        return position;
      })
    }, 5000);
    return () => { clearInterval(slide); }
  }, [pos])
  return (
    <main className="App">
      <h3 className='heading'><span>/</span> Reviews</h3>
      <section className='slider'>
        <FaAngleLeft onClick={() => { prevSlide() }} className='btn-icon prev' />
        {people.map((buddy, index) => <ReviewCard
          key={buddy.id}
          person={buddy}
          class={() => {
            if (index === pos) {
              return "active"
            }
            else if (index === pos - 1 || (pos === 0 && index === people.length - 1)) {
              return "last"
            }
            return "next"
          }}
        />)}
        <FaAngleRight onClick={() => { nextSlide() }} className='btn-icon next' />
      </section>
    </main>
  );
}

export default App;
