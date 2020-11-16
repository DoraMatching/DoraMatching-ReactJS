import dynamic from 'next/dynamic';
import ReactMarkdown from "react-markdown";
import React from 'react'

const MdEditor = dynamic(() => import('react-markdown-editor-lite'), {
  ssr: false
});

export default function() {
  // const handleEditorChange = ({ html, text }) => {
  //   const newValue = text.replace(/\d/g, "");
  //   console.log(newValue);
  //   setValue(newValue);
  // };

  return (
    <MdEditor
      style={{ height: "300px" }}
      renderHTML={text => <ReactMarkdown source={text} />}
    />
  )
}