import dynamic from "next/dynamic";
import ReactMarkdown from "react-markdown";
import React from "react";

const Editor = dynamic(() => import("react-markdown-editor-lite"), {
  ssr: false,
});

export default function ({ onChange, value }) {
  return (
    <Editor
      value={value}
      style={{ height: "250px" }}
      onChange={onChange}
      renderHTML={(text) => <ReactMarkdown source={text} />}
    />
  );
}
