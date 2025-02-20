import Link from "next/link";
import React from "react";

function Twitter({ url }) {
  return (
    <Link
      className="text-center cursor-pointer"
      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://twitter.com/favicon.ico"
        alt="Twitter"
        className="w-8 h-8 rounded-full object-cover mb-2 mx-auto"
      />
      <p className="text-sm">Twitter</p>
    </Link>
  );
}

export default Twitter;