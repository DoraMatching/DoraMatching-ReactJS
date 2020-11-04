import Link from "next/link";
import React from "react";

function CardTagQuestion({ tagQuestion }) {
  return (
    <li>
      <button>
        <Link href="/">
          <a>{tagQuestion.name}</a>
        </Link>
      </button>
    </li>
  );
}

export default CardTagQuestion;
