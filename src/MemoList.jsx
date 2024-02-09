import "./MemoList.css";
import PropTypes from "prop-types";
import React from "react";

export default function MemoList({
  memos,
  memoOrder,
  addMemo,
  selectedId,
  setSelectedId,
}) {
  const memoList = memoOrder.map((id) => {
    const head = memos[id].split("\n")[0];
    return (
      <button
        className={`memo-list-button ${id === selectedId ? "selected" : ""}`}
        key={id}
        onClick={() => setSelectedId(id)}
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
  memoOrder: PropTypes.array.isRequired,
  addMemo: PropTypes.func.isRequired,
  selectedId: PropTypes.string.isRequired,
  setSelectedId: PropTypes.func.isRequired,
};
