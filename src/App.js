import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListDepoComponent from './components/ListDepoComponent';
import AddDepoComponent from './components/AddDepoComponent';
import ListUrunComponent from './components/ListUrunComponent';
import AddUrunComponent from './components/AddUrunComponent';
import ListSeriNoluUrunComponent from './components/ListSeriNoluUrunComponent';
import AddSeriNoluUrunComponent from './components/AddSeriNoluUrunComponent';
import AddFirmaComponent from './components/AddFirmaComponent';
import ListFirmaComponent from './components/ListFirmaComponent ';




import ListUrunTipComponent from './components/ListUrunTipComponent';
import AddUrunTipComponent from './components/AddUrunTipComponent';


function App() {

  return (
    <div>

      <Router>
        {/* <HeaderComponent /> */}
        <div className="container">
          <Navbar />


          <Switch>
            {/* <Route exact path="/" component={ListUrunComponent}></Route> */}
            <Route path="/uruns" component={ListUrunComponent}></Route>
            <Route path="/add-urun" component={AddUrunComponent} ></Route>
            <Route path="/edit-urun/:urunId" component={AddUrunComponent}></Route> 
         
                  
            {/* <Route exact path="/" component={ListDepoComponent}></Route> */}
            <Route path="/depos" component={ListDepoComponent}></Route>
            <Route path="/add-depo" component={AddDepoComponent} ></Route>
            <Route path="/edit-depo/:depoId" component={AddDepoComponent}></Route> 


            {/* <Route exact path="/" component={ListFirmaComponent}></Route> */}
            <Route path="/firmas" component={ListFirmaComponent}></Route>
            <Route path="/add-firma" component={AddFirmaComponent} ></Route>
            <Route path="/edit-firma/:firmaId" component={AddFirmaComponent}></Route> 


 {/* <Route exact path="/" component={ListFirmaComponent}></Route> */}
            <Route path="/seriNoluUruns" component={ListSeriNoluUrunComponent}></Route>
            <Route path="/add-seriNoluUrun" component={AddSeriNoluUrunComponent} ></Route>
            <Route path="/edit-seriNoluUrun/:urunTipId" component={AddSeriNoluUrunComponent}></Route> 




            <Route path="/urunTips" component={ListUrunTipComponent}></Route>
            <Route path="/add-urunTip" component={AddUrunTipComponent} ></Route>
            <Route path="/edit-urunTip/:urunTipId" component={AddUrunTipComponent}></Route> 

          </Switch>
        </div>
        {/* <FooterComponent /> */}
      </Router>
    </div>
  );
}

export default App;
