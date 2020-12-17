import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';


// redux store에 온갖 데이터 저장 ㄴㄴ
// 다른 컴포넌트에서 사용할 일이 없으면 useState사용할 것
let alert초기값 = true;

function reducer2(state = alert초기값, 액션) {

  if (액션.type === '닫기') {
    state = false;
    return state
  } else {
    return state
  }
}


let 초기값 = [
  
];
  

function reducer(state = 초기값, 액션){
  // ... 은 deep copy
  let copy = [...state];

  if (액션.type === '항목추가') {
    
    // state안에 id : 액선.payload 있나?
    // findIndex : array안에서 원하는 데이터 찾아주는 함수(몇번째 항목에 있는지)
    let found = state.findIndex((a)=>{ return a.id === 액션.payload.id });

    // found가 0보다 크거나 같다는 것은 array안에 같은 값이 몇번째에 위치해있다는 것임
    // 따라서 array의 복사본인 copy의 found번지의 quan을 증가시켜라
    if ( found >= 0 ) {
      copy[found].quan++;

      return copy
    } else {
      copy.push(액션.payload);
      
      return copy
    }

  } else if (액션.type === '수량증가'){
  
    copy[액션.데이터].quan++;

    return copy
    
  } else if(액션.type === '수량감소') {

    copy[액션.데이터].quan--;

    if (copy[액션.데이터].quan === 0) {
      alert('최소 수량입니다');
      copy[액션.데이터].quan++;
    }

    return copy

  } else {
    return state
  }
}

let store = createStore(combineReducers({reducer, reducer2}));


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorkerRegistration.register();

reportWebVitals();