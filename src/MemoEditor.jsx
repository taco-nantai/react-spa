import "./MemoEditor.css";
import PropTypes from "prop-types";
import React, { useState } from "react";

export default function MemoEditor({ selectedMemo, editMemo, deleteMemo }) {
  const [memo, setMemo] = useState(selectedMemo);
  if (selectedMemo === undefined) {
    return;
  }

  return (
    <>
      <textarea
        className="memo-content"
        value={memo.content}
        onChange={(e) => setMemo({ ...memo, content: e.target.value })}
      />
      <button
        className="memo-editor-button"
        onClick={() => editMemo(memo.content)}
      >
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
