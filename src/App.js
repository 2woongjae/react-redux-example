import React, { useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import { addTodo } from "./actions";
import { connect, useSelector } from "react-redux";

function App() {
  const inputRef = useRef();

  const todos = useSelector(state => state.todos);
  const loading = useSelector(state => state.loading);

  console.log(todos, loading);

  function add() {
    const text = inputRef.current.value;
    addTodo(text);
    inputRef.current.value = "";
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <input type="text" ref={inputRef} />
          <button onClick={add}>추가</button>
        </p>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo.text}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

// // 설정
// const fn = connect(option);
// fn(App);

// store 의 state 를 => App 의 props 로 변경
// store 의 dispatch 를 => App 의 props 로 변경

// const mapStateToProps = state => ({
//   todos: state.todos
// });

// const mapDistpatchToProps = dispatch => ({
//   addTodo: text => {
//     dispatch(addTodo(text));
//   }
// });

export default App;
