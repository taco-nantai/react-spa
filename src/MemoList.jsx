import "./MemoList.css";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import { IsLoggedInContext } from "./contexts";

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

  const isLoggedIn = useContext(IsLoggedInContext);
  const addButton = isLoggedIn ? (
    <button className="memo-list-button" onClick={addMemo}>
      +
    </button>
  ) : null;
  return (
    <>
      {memoList}
      {addButton}
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
