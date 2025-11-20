import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default function DropzoneUpload({ onFile, extractOnDrop }) {
  const onDrop = useCallback(
    (acceptedFiles) => {
      if (!acceptedFiles || acceptedFiles.length === 0) return;
      const file = acceptedFiles[0];
      const url = URL.createObjectURL(file);
      if (onFile) onFile(url, file);
      if (extractOnDrop) {
        setTimeout(() => extractOnDrop(url), 120);
      }
    },
    [onFile, extractOnDrop]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    maxFiles: 1,
  });

  return (
    <div {...getRootProps()} className={`dropzone ${isDragActive ? "active" : ""}`}>
      <input {...getInputProps()} />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 3v9" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 7l4-4 4 4" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 21H4" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <div style={{fontWeight:700,color:'#0f1724'}}>Drop image here or click to upload</div>
        <div style={{fontSize:13,color:'#6b7280'}}>Image is used to auto-generate a palette</div>
      </div>
    </div>
  );
}
