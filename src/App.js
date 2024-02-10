import "./App.css";
import React, { useState } from "react";
import { IsLoggedInContext } from "./contexts";
import MemoList from "./MemoList";
import MemoEditor from "./MemoEditor";

function App() {
  const [memos, setMemos] = useState(fetchMemos());
  const [memoOrder, setMemoOrder] = useState(fetchMemoOrder());
  const [selectedId, setSelectedId] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function fetchMemos() {
    const fetchedMemos = localStorage.getItem("memos");
    if (fetchedMemos === null) return {};
    return JSON.parse(fetchedMemos);
  }

  function fetchMemoOrder() {
    const fetchedMemoOrder = localStorage.getItem("memoOrder");
    if (fetchedMemoOrder === null) return [];
    return JSON.parse(fetchedMemoOrder);
  }

  function addMemo() {
    const id = crypto.randomUUID();
    localStorage.setItem(
      "memos",
      JSON.stringify({ ...memos, [id]: "新規メモ" }),
    );
    setMemos(fetchMemos());
    localStorage.setItem("memoOrder", JSON.stringify([...memoOrder, id]));
    setMemoOrder(fetchMemoOrder());
  }

  function editMemo(content) {
    localStorage.setItem(
      "memos",
      JSON.stringify({ ...memos, [selectedId]: content }),
    );
    setMemos(fetchMemos());
  }

  function deleteMemo() {
    let nextMemos = { ...memos };
    delete nextMemos[selectedId];
    localStorage.setItem("memos", JSON.stringify(nextMemos));
    setMemos(fetchMemos());
    localStorage.setItem(
      "memoOrder",
      JSON.stringify(memoOrder.filter((id) => id !== selectedId)),
    );
    setMemoOrder(fetchMemoOrder());
    setSelectedId(null);
  }

  return (
    <IsLoggedInContext.Provider value={isLoggedIn}>
      <div className="App">
        <body className="App-body">
          <h1 className="title">{selectedId === null ? "一覧" : "編集"}</h1>
          <div className="login-flexbox">
            <p className="login-status">
              {isLoggedIn ? "ログイン済" : "未ログイン"}
            </p>
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
              {isLoggedIn ? "ログアウト" : "ログイン"}
            </button>
          </div>
          <div className="memo-flexbox">
            <div className="memo-list">
              <MemoList
                memos={memos}
                memoOrder={memoOrder}
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
    </IsLoggedInContext.Provider>
  );
}

export default App;
