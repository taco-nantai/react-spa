import "./MemoEditor.css";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useIsLoggedIn } from "./isLoggedIn-hooks";

export default function MemoEditor({ selectedMemo, editMemo, deleteMemo }) {
  const [content, setContent] = useState(selectedMemo);
  const { isLoggedIn } = useIsLoggedIn();
  let editButton = null;
  let deleteButton = null;
  if (isLoggedIn) {
    editButton = (
      <button className="memo-editor-button" onClick={() => editMemo(content)}>
        編集
      </button>
    );
    deleteButton = (
      <button className="memo-editor-button" onClick={() => deleteMemo()}>
        削除
      </button>
    );
  }
  if (selectedMemo === undefined) {
    return;
  }
  return (
    <>
      <textarea
        className="memo-content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      {editButton}
      {deleteButton}
    </>
  );
}

MemoEditor.propTypes = {
  selectedMemo: PropTypes.object.isRequired,
  editMemo: PropTypes.func.isRequired,
  deleteMemo: PropTypes.func.isRequired,
};
