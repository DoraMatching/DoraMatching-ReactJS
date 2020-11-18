import Link from "next/link";
import React from "react";

function CardTagQuestion({ tagQuestion }) {
  const {id} = tagQuestion
  console.log('L6', id);
  return (
    <li>
      <button>
        <Link href={`/questions/tag-question/${tagQuestion.id}`}>
          <a>{tagQuestion.name}</a>
        </Link>
      </button>
    </li>
  );
}

export default CardTagQuestion;
