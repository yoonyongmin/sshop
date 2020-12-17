/* eslint-disable */

import React, {useState, useContext, lazy, Suspense} from 'react';
import { Navbar, Nav, NavDropdown, Button, Jumbotron } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import shoesdata from './data.js';
// import Detail from './Detail.js';
let Detail = lazy(()=>{ return import('./Detail.js') });

import axios from 'axios';
import { Link, Route, Switch, useHistory } from 'react-router-dom';

import Cart from './Cart.js';

export let 재고context = React.createContext();


function App() {

  let [shoes, shoes변경] = useState(shoesdata);
  let [로딩중, 로딩중변경] = useState(false);
  let [재고, 재고변경] = useState([10, 11, 12]);


  // 복사본 만들기
  function Itemcontent() {
    var 상품컨텐츠 = [];
    for (var i=0 ; i<Shoescontent.length ; i++) {
      상품컨텐츠.push(Shoescontent);
    }
    return 상품컨텐츠
  }

  return (
    <div className="App">
      <Navbar bg="light" expand="lg" className="">
        <Navbar.Brand href="#home">Shoes Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/detail/0">Detail</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route exact path="/">
          <Jumbotron className="background">
            <h1>20% Seanson OFF</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Jumbotron>
          <div className="container">

            <재고context.Provider value={재고}>

            <div className="row">
              {
                shoes.map( (a, i)=>{
                  return <Shoescontent shoes={shoes[i]} i={i} key={i} />
                })
              }
            </div>

            {
              로딩중 === true
              // ? <div className="my-alert2">로딩 중 입니다</div>
              ? <div id="preloader">
                  <div id="status">&nbsp;</div>
                </div>
              : null
            }

            </재고context.Provider>


            <button className="btn btn-primary" onClick={ ()=>{ 
              
              로딩중변경(true);

              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((result)=>{
                로딩중변경(false);
                shoes변경( [...shoes, ...result.data] );
               })
              .catch(()=>{ 
                console.log('fail');
               })
             }}>더보기</button>
          </div>
        
          
          
        </Route>
        

        <Route path="/detail/:id">
          <재고context.Provider value={재고}>
            <Suspense fallback={ <div id="preloader">
                  <div id="status">&nbsp;</div>
                </div>}>
              <Detail shoes={shoes} 재고={재고} 재고변경={재고변경}></Detail>
            </Suspense>
          </재고context.Provider>
        </Route>

        
        <Route path="/cart">
          <Cart></Cart>
        </Route>



        {/* <Route path="/:id">
          <div>아무거나 적었을 때 이거 보여주삼!!</div>
        </Route> */}

        {/* <Route path="/어쩌구" component={Modal} ></Route> */}
      </Switch>    

    </div>
  );

}



function Shoescontent(props) {

  let 재고 = useContext(재고context);
  let history = useHistory();

  return(
     <div className="col-md-4 itembox" onClick={()=>{ history.push('/detail/'+props.shoes.id) }}>
       <img src={ 'https://codingapple1.github.io/shop/shoes' + (props.i+1) + '.jpg' } width="100%" />
       <h4>{ props.shoes.title }</h4>
       <p>{ props.shoes.content } & { props.shoes.price }</p>
       <p>재고 : {재고[props.i]}</p>
     </div>
  )
}

// function Test(){

//   let 재고 = useContext(재고context);

//   return <p>{재고[0]}</p>
// }


// className="row" : 화면을 세로 12등분
// col-md-4 : 3등분 + 모바일에서 세로정렬

export default App;
