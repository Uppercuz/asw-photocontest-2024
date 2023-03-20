import './styles.scss';
import PageHeader from './header';
import BodyTabs from './body';
import PageFooter from './footer';
import BackTotopComp from './backToTopComp';

function App() {
  return (
    <div className="App">
      <PageHeader/>
      <section id='pageBody' className='bg-[#f9f9f9]'>
        <BodyTabs/>
      </section>
      <BackTotopComp/>
      <PageFooter/>
    </div>
  );
}

export default App;
