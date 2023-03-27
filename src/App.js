import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarousalMain from './components/CarousalMain';
import MainNavBar from './components/MainNavBar';
import CommonCard from './components/CommonCard';
import styleTwo from './common-card.module.css';
import Accord from './components/Accord';
import MyTable from './components/MyTable';

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossorigin="anonymous"
/>
function App() {
  return (
    <div className="App">
      <MainNavBar />
      <CarousalMain />
      <div className='container'>
        <section>
          <h2>Section One</h2>
          <div className={styleTwo.setCommonCard}>
          <CommonCard />
          <CommonCard />
          <CommonCard />
          </div>
        </section>

        <section>
        <h2>Section Two</h2>
          <Accord />
        </section>
          
          <section>
          <h2>Section Three</h2>
            <MyTable />
          </section>
      </div>
    </div>
  );
}
export default App;