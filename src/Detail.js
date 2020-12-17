import React, {useContext, useEffect, useState} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Nav } from 'react-bootstrap';
import './Detail.scss';

import { CSSTransition } from 'react-transition-group';
import { 재고context } from './App.js'
import { connect } from 'react-redux';



let 박스 = styled.div`
    padding : 20px;
`;
let 제목 = styled.h4`
    font-size : 25px;
    color : ${ props => props.색상 }
`;



function Detail(props) {

    let [경고, 경고변경] = useState(true);
    // let [입력값, 입력값변경] = useState('');
    let [누른탭, 누른탭변경] = useState(0);
    let [스위치, 스위치변경] = useState(false);
    let 재고2 = useContext(재고context);
  
    let { id } = useParams();
    let history = useHistory();
    // 상품은 shoes의 하나하나의 데이터
    let 찾은상품 = props.shoes.find(function(상품){
        return 상품.id == id
    });
    
    useEffect(()=>{
       let 타이머 = setTimeout(()=>{
           경고변경(false);
        }, 2000);
        return ()=>{ clearTimeout(타이머) }
    }, []);


    // 최근 본 상품 UI만들기
    // 1. 누가 Detail페이지 들어가면
    // 2. localStorage에 있는 항목을 꺼냄
    // 3. 경우가 두가지가 있겠네 null이 나오거나 [ ]가 나오거나
    // 4. [ ]가 나오면 거기에 URL파라미터의 id부분을 push()함
    // 5. 중복 처리하기, 팁 : 중복을 허용하지 않는 Set자료형
    // 6. 그러면 [ ]를 다시 localStorage에 저장함 (따옴표쳐서)
    useEffect(()=>{
        let 사이트저장값 = localStorage.getItem('watched');

        // 사이트를 처음 들어가면 null값 이기 때문에 push부분에서 에러가 남
        // 따라서 if문을 사용하여 null일 경우 사이트저장값을 비어있는 배열로 만들어줌
        if(사이트저장값 === null) {
            사이트저장값 = []
        } else { 
            사이트저장값 = JSON.parse(사이트저장값) 
        }

        // 사이트저장값에 방문한 페이지의 URL(useParams의 값)을 push해줌
        사이트저장값.push(id);
        
        // Set자료형은 array와 똑같은 기능인데 차이점은 중복을 자동제거해줌
        사이트저장값 = new Set(사이트저장값);
        
        // Set자료형인 사이트저장값을 다시 배열형으로 바꿈
        // [...]은 괄호를 벗겨줌
        사이트저장값 = [...사이트저장값];

        localStorage.setItem('watched', JSON.stringify(사이트저장값));
        
        console.log(사이트저장값)
        
    }, []);
    
    
    return(
        <div className="container">
            <박스>
                <제목 className="red">Detail</제목>
                {/* <제목 색상="blue">Detail</제목>
                <제목 색상="red">Detail</제목> */}
            </박스>
            
            {/* { 입력값 }
            <input onChange={ (e)=>{ 입력값변경(e.target.value) } } /> */}

            {
                경고 === true 
                ? (<div className="my-alert2">
                    <p>재고가 얼마 남지 않았습니다</p>
                  </div>)
                : null
            }
            <div className="row">
              <div className="col-md-6">
                <img src={'https://codingapple1.github.io/shop/shoes'+(찾은상품.id+1)+'.jpg'} width="100%" />
              </div>
              <div className="col-md-6 mt-4">
                <h4 className="pt-5">{찾은상품.title}</h4>
                <p>{찾은상품.content}</p>
                <p>{찾은상품.price}원</p>

                <Info 재고={props.재고} 찾은상품={찾은상품}></Info>

                <button className="btn btn-danger" onClick={ ()=>{
                    
                    let 뉴재고 = [...props.재고];

                    뉴재고[찾은상품.id] = 뉴재고[찾은상품.id]-1;

                    if (뉴재고[찾은상품.id] === -1) {

                        뉴재고[찾은상품.id]++
                        alert('매진된 상품입니다');
                    }

                    props.재고변경(뉴재고);
                    props.dispatch({type : '항목추가', payload : {id:찾은상품.id, name:찾은상품.title, quan:1}});
                    // 개발환경에서 페이지 이동시 강제로 새로고침 안되게 함, useHistory훅
                    history.push('/cart');

                }}>주문하기</button> 
                <button className="btn btn-danger" onClick={ ()=>{ 
                    history.push('/');
                 } }>뒤로가기</button> 
              </div>
            </div>

            {/* <SideTab id={id} shoes={props.shoes}></SideTab> */}

            <Nav className="mt-5 mb-5" variant="tabs" defaultActiveKey="link-0">
                <Nav.Item>
                    <Nav.Link eventKey="link-0" onClick={()=>{ 스위치변경(false); 누른탭변경(0) }}>Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" onClick={()=>{ 스위치변경(false); 누른탭변경(1) }}>Option 2</Nav.Link>
                </Nav.Item>
            </Nav>

            <CSSTransition in={스위치} classNames="wow" timeout={500}>
                <TabContent 누른탭={누른탭} 스위치변경={스위치변경}></TabContent>
            </CSSTransition>

        </div>
    )
  }


  function SideTab(props) {
    let arr = localStorage.getItem('watched');
    arr = JSON.parse(arr);
    let 관심상품1 = arr[arr.length-1];
    let 관심상품2 = arr[arr.length-2];

      return (
          <div className="SideTab">
              <p>관심목록</p>
              <p>{ props.shoes[관심상품1].title }</p>
              <img src={ 'https://codingapple1.github.io/shop/shoes' + 관심상품1 + '.jpg' } className="shoesimg"/>
              <p>{ props.shoes[관심상품2].title }</p>
              <img src={ 'https://codingapple1.github.io/shop/shoes' + 관심상품2 + '.jpg' } className="shoesimg"/>
          </div>
      )
  }



  function TabContent(props){

    useEffect(()=>{
        props.스위치변경(true);
    });

      if (props.누른탭 === 0) {
        return <div>0번째 내용</div>
      } else if (props.누른탭 === 1) {
          return <div>1번째 내용</div>
      } else if (props.누른탭 === 2) {
          return <div>2번째 내용</div>
      }
    }

  
  function Info(props) {
      return(
          <p>재고 : {props.재고[props.찾은상품.id]}</p>
      )
  }

  
  function 함수명(state){
    console.log(state);
    return {
        state : state.reducer
    }
}

export default connect(함수명)(Detail)


// export default Detail;