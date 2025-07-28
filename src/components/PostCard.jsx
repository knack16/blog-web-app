import React from "react";
import appwriteService from "../appwrite/appwriteConfig";
import { Link } from "react-router-dom";
import fallback from "../assets/MU3kEo.jpg";

function PostCard({ $id, title, featuredImage }) {
  
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl"
            onError={(e) => {
              e.target.onerror = null; // prevents looping if fallback also fails
              e.target.src = fallback;
            }}
          />
        </div>
        <h2 className="text-xl font-bold text-center">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
