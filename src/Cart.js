import React, { useEffect, memo } from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import './App.css';

function Cart(props) {
    return (
        <div>
            <Table responsive>
                <thead>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경</th>
                </tr>
                </thead>
                <tbody>
                { props.state.map((a, i)=>{
                    return(
                        <tr key={i}>
                            <td>{ i+1 }</td>
                            <td>{ props.state[i].name }</td>
                            <td>{ props.state[i].quan }</td>
                            <td>
                                {/* dispatch의 { }안의 내용이 reducer의 액션 파라미터이다 */}
                                <button onClick={ ()=>{ props.dispatch({ type : '수량증가', 데이터 : a.id }) }}>+</button>
                                <button onClick={ ()=>{ props.dispatch({ type : '수량감소', 데이터 : a.id }) }}>-</button>
                            </td>
                        </tr>
                    )
                 })    
                }
                </tbody>
            </Table>
            
            {
            props.경고창 === true 
            ? (
            <div className="my-alert2 alertbox">
                <p className="alertText">지금 구매하시면 신규할인 20%</p>
                <p className="closebox" onClick={()=>{ props.dispatch({type:'닫기'}) }}>X</p>
            </div> )
            : null
            }

            {/* <Parent 이름="용민" 나이="27"></Parent> */}

        </div>
    )
}

// state는 store안의 하나하나의 state
function 함수명(state){
    return {
        state : state.reducer,
        경고창 : state.reducer2
    }
}

// 재렌더링 테스트
function Parent(props) {
    return (
        <div>
            <Child1 이름={props.이름}></Child1>
            <Child2 나이={props.나이}></Child2>
        </div>
    )
}

function Child1(props) {
    useEffect(()=>{ console.log('렌더링1')})
    return (
        <div>1111</div>
    )
}

let Child2 = memo(function() {
    useEffect(()=>{ console.log('렌더링2')})
    return (
        <div>2222</div>
    )
});




export default connect(함수명)(Cart)

// export default Cart;