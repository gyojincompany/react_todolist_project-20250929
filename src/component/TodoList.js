import "./TodoList.css"
import TodoItem from "./TodoItem";

function TodoList({todo}) {
    return (
        <div className="TodoList">
            <h4>Todo List 🍚</h4>
            <input className="searchbar" placeholder="검색어를 입력하세요" />
            <div className="list_wrapper">
      {/* todoItem을 3번 반복해서 출력 */}
      {/* {id, isDone, content, creatDate}  */}
      {/* {id, isDone, content, creatDate} -> props로 TodoItem 컴포넌트에 전달  */}
                {todo.map((it) => (
                    <TodoItem key={it.id} {...it} />                   
                ))}
            </div>
        </div>
    );
}

export default TodoList;