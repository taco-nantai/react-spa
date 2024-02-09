import "./MemoEditor.css";
import PropTypes from "prop-types";
import React, { useState } from "react";

export default function MemoEditor({ selectedMemo, editMemo, deleteMemo }) {
  const [content, setContent] = useState(selectedMemo);
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
      <button className="memo-editor-button" onClick={() => editMemo(content)}>
        編集
      </button>
      <button className="memo-editor-button" onClick={() => deleteMemo()}>
        削除
      </button>
    </>
  );
}

MemoEditor.propTypes = {
  selectedMemo: PropTypes.object.isRequired,
  editMemo: PropTypes.func.isRequired,
  deleteMemo: PropTypes.func.isRequired,
};
