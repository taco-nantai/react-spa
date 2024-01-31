import React, { useState } from "react";
import "./App.css";
import MemoList from "./memo_list";
import MemoEditor from "./memo_editor";

function App() {
  const [memos, setMemos] = useState({ ...localStorage });
  const [selectedId, setSelectedId] = useState(null);

  function addMemo() {
    const id = createId();
    localStorage.setItem(id, "新規メモ");
    setMemos({ ...localStorage });
  }

  function createId() {
    const keys = Object.keys(localStorage);
    return keys.length === 0 ? 0 : Math.max(...keys) + 1;
  }

  function editMemo(content) {
    localStorage.setItem(selectedId, content);
    setMemos({ ...localStorage });
  }

  function deleteMemo() {
    localStorage.removeItem(selectedId);
    setMemos({ ...localStorage });
    setSelectedId(null);
  }

  return (
    <div className="App">
      <body className="App-body">
        <h1 className="title">{selectedId === null ? "一覧" : "編集"}</h1>
        <div className="flexbox">
          <div className="memo-list">
            <MemoList
              memos={memos}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              addMemo={addMemo}
            />
          </div>
          <div className="memo-editor">
            <MemoEditor
              key={selectedId}
              selectedMemo={memos[selectedId]}
              deleteMemo={deleteMemo}
              editMemo={editMemo}
            />
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
