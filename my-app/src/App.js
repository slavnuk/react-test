import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import image5 from './images/image5.jpg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div>
        <img
            src={image1}
            alt=""
        />
          <img
              src={image2}
              alt=""
          />
          <img
              src={image3}
              alt=""
          />
          <img
              src={image4}
              alt=""
          />
          <img
              src={image5}
              alt=""
          />
      </div>
    </div>
  );
}

export default App;
