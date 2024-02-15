import React, { useState } from "react";
import "./App.css";
import MemoList from "./MemoList";
import MemoEditor from "./MemoEditor";

function App() {
  const [memos, setMemos] = useState(fetchMemos());
  const [selectedId, setSelectedId] = useState(null);

  function fetchMemos() {
    const fetchedMemos = localStorage.getItem("memos");
    if (fetchedMemos === null) return [];
    return JSON.parse(fetchedMemos);
  }

  function addMemo() {
    const id = crypto.randomUUID();
    const nextMemos = [...memos, { id: id, content: "新規メモ" }];
    localStorage.setItem("memos", JSON.stringify(nextMemos));
    setMemos(fetchMemos());
  }

  function editMemo(nextContent) {
    const nextMemos = memos.map((memo) =>
      memo.id === selectedId ? { ...memo, content: nextContent } : memo,
    );
    localStorage.setItem("memos", JSON.stringify(nextMemos));
    setMemos(fetchMemos());
  }

  function deleteMemo() {
    const nextMemos = [...memos].filter((memo) => memo.id !== selectedId);
    localStorage.setItem("memos", JSON.stringify(nextMemos));
    setMemos(fetchMemos());
    setSelectedId(null);
  }

  function getSelectedMemo() {
    return memos.find((memo) => memo.id === selectedId);
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
              selectedMemo={getSelectedMemo()}
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
