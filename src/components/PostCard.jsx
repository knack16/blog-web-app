import React from "react";
import appwriteService from "../appwrite/appwriteConfig";
import { Link } from "react-router-dom";
import fallback from "../assets/MU3kEo.jpg";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4 shadow-sm">
        <div className="w-full flex justify-center mb-4">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl max-h-60 w-full object-cover"
            onError={(e) => {
              e.target.onerror = null; // prevents infinite loop
              e.target.src = fallback;
            }}
          />
        </div>
        <h2 className="text-lg sm:text-xl font-semibold text-center text-gray-800">
          {title}
        </h2>
      </div>
    </Link>
  );
}

export default PostCard;
