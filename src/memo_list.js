import "./memo_list.css";
import PropTypes from "prop-types";
import React from "react";

export default function MemoList({
  memos,
  addMemo,
  selectedId,
  setSelectedId,
}) {
  const memoList = Object.entries(memos).map(([key, value]) => {
    const head = value.split("\n")[0];
    return (
      <button
        className={`memo-list-button ${key === selectedId ? "selected" : ""}`}
        key={key}
        onClick={() => setSelectedId(key)}
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
