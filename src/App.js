import './App.css';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';
import { useRef, useState } from 'react';

function App() {
  
  const mockTodo = [
    {
      id: 0,
      isDone: false,
      content : "리액트 공부하기",
      creatDate : new Date().getTime(),
    },
    {
      id: 1,
      isDone: false,
      content : "빨래 널기",
      creatDate : new Date().getTime(),
    },
    {
      id: 2,
      isDone: false,
      content : "노래 연습하기",
      creatDate : new Date().getTime(),
    }
  ];

  const [todo, setTodo] = useState(mockTodo);

  const idRef = useRef(3); //초깃값이 3인 ref객체 생성하여 idRef에 저장

  function onCreate(content) { //추가 버튼이 클릭되면 실행될 이벤트 핸들러
    const newItem = {
      id: idRef.current, //idRef가 현재 저장하고 있는 값을 불러옴
      content,//content:"밥먹기"
      isDone : false,
      creatDate : new Date().getTime()
    };    
    setTodo([newItem, ...todo]);//[...todo, newItem]->[{id0},{id1},{id2},{id3}]
    //newItem->할일 객체를 생성한 후 idRef값을 1증가
    idRef.current += 1;
  }

  function onUpdate(targetId) {
    setTodo( 
    todo.map((it)=>{
      //할일 아이템을 반복하다가 들어온 targetId와 현재 읽고 있는 할일 아이템의
      //id와 일치하면 참
      
      if (it.id === targetId) { 
        //console.log(...it);
        return {
         ...it, isDone: !it.isDone 
        };
      } else {
        return it;
      }
    })
  );
  }

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} onUpdate={onUpdate} />
    </div>
  );
}

export default App;
