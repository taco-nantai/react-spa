import "./MemoList.css";
import PropTypes from "prop-types";
import React from "react";

export default function MemoList({
  memos,
  addMemo,
  selectedId,
  setSelectedId,
}) {
  const memoList = memos.map((memo) => {
    const head = memo.content.split("\n")[0];
    return (
      <button
        className={`memo-list-button ${memo.id === selectedId ? "selected" : ""}`}
        key={memo.id}
        onClick={() => setSelectedId(memo.id)}
      >
        {head}
      </button>
    );
  });

  return (
    <>
      {memoList}
      <button className="memo-list-button" onClick={addMemo}>
        +
      </button>
    </>
  );
}

MemoList.propTypes = {
  memos: PropTypes.object.isRequired,
  addMemo: PropTypes.func.isRequired,
  selectedId: PropTypes.string.isRequired,
  setSelectedId: PropTypes.func.isRequired,
};
