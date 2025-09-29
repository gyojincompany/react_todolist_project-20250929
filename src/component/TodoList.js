import "./TodoList.css"
import TodoItem from "./TodoItem";
import { useState } from "react";

function TodoList({todo, onUpdate}) {

    const [search, setSearch] = useState("");

    function onChangeSearch(e) {
        setSearch(e.target.value);
    }

    //검색어 필터링 함수
    function getSearchResult() {
        if (search === "") {
            return todo;
        } else {
            return todo.filter(
                (it) => it.content.toLowerCase().includes(search.toLowerCase())
                //특정 단어가 있는 content만 걸러내어 배열로 반환
            );
        }
    }


    return (
        <div className="TodoList">
            <h4>Todo List 🍚</h4>
            <input className="searchbar" value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요" />
            <div className="list_wrapper">
      {/* todoItem을 3번 반복해서 출력 */}
      {/* {id, isDone, content, creatDate}  */}
      {/* {id, isDone, content, creatDate} -> props로 TodoItem 컴포넌트에 전달  */}
                {getSearchResult().map((it) => (
                    <TodoItem key={it.id} {...it} onUpdate={onUpdate} />                   
                ))}
            </div>
        </div>
    );
}

export default TodoList;