import { BrowserRouter, Route } from 'react-router-dom';
import Main from './container/Main';
import Viewer from './container/Viewer';
import WebtoonHome from './container/WebtoonHome';
import './App.css';

const App = () => {

 

  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Main}></Route>
        <Route path="/webtoon/:webtoonId" component={WebtoonHome}></Route>
        <Route path="/viewer/:episodeId" component={Viewer}></Route>
      </div>
    </BrowserRouter>
  )
}

export default App;
