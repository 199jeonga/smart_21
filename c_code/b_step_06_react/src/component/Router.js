import {Routes, Route} from 'react-router-dom';
import Title1 from './Title1';
import Title2 from './Title2';

export default function Router(){
  return(   
  <Routes>
    <Route path="/" element={ <Main />} />
    <Route path="/main" element={ <Main /> } />
    <Route path="/review" element={ <Review /> } />
  </Routes>)
}