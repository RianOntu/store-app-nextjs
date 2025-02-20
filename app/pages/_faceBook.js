import Link from "next/link";
import React from "react";

function FaceBook({ url }) {
  return (
    <Link
      className="text-center cursor-pointer"
      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://facebook.com/favicon.ico" 
        alt="Facebook"
        className="w-8 h-8 rounded-full object-cover mb-2 mx-auto"
      />
      <p className="text-sm">Facebook</p>
    </Link>
  );
}

export default FaceBook;