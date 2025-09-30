import "./TodoList.css"
import TodoItem from "./TodoItem";
import { useState, useMemo } from "react";

function TodoList({todo, onUpdate, onDelete}) {

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
                (item) => item.content.toLowerCase().includes(search.toLowerCase())
                //특정 단어가 있는 content만 걸러내어 배열로 반환
            );
        }
    }

    const analyzeTodo = useMemo(()=>{
        console.log("analyzeTodo 함수 호출됨!!");

        const totalCount = todo.length; //모든 할일의 갯수
        //완료된 할일의 갯수
        const doneCount = todo.filter((item) => item.isDone).length;
        //완료하지 못한 할일의 갯수
        const notDoneCount = totalCount - doneCount;
        return {totalCount, doneCount, notDoneCount};
    },[todo]);

    const {totalCount, doneCount, notDoneCount} = analyzeTodo;

    return (
        <div className="TodoList">
            <h4>Todo List 🍚</h4>
            <div>
                <div>총개수:{totalCount} 개</div>
                <div>완료된 할 일:{doneCount} 개</div>
                <div>아직 완료하지 못한 일:{notDoneCount} 개</div>
            </div>
            <input className="searchbar" value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요" />
            <div className="list_wrapper">
      {/* todoItem을 3번 반복해서 출력 */}
      {/* {id, isDone, content, creatDate}  */}
      {/* {id, isDone, content, creatDate} -> props로 TodoItem 컴포넌트에 전달  */}
                {getSearchResult().map((it) => (
                    <TodoItem key={it.id} {...it} onUpdate={onUpdate} onDelete={onDelete} />                   
                ))}
            </div>
        </div>
    );
}

export default TodoList;