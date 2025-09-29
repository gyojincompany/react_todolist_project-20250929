import "./TodoItem.css"

function TodoItem({id, content, isDone, createDate, onUpdate}) {

    function onChangeCheckbox() {
        onUpdate(id);
    }

    return (
        <div className="TodoItem">
            <div className="checkbox_col">
                <input type="checkbox" onChange={onChangeCheckbox} checked={isDone} />
            </div>
            <div className="title_col">{content}</div>
            <div className="date_col">{new Date().toDateString()}</div>
            <div className="btn_col">
                <button>삭제</button>
            </div>
        </div>
    );
}

export default TodoItem;