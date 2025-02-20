import Link from "next/link";
import React from "react";

function LinkedIn({ url }) {
  return (
    <Link
      className="text-center cursor-pointer"
      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://linkedin.com/favicon.ico"
        alt="LinkedIn"
        className="w-8 h-8 rounded-full object-cover mb-2 mx-auto"
      />
      <p className="text-sm">LinkedIn</p>
    </Link>
  );
}

export default LinkedIn;