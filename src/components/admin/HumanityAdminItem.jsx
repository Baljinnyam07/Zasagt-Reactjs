import React from "react";

function HumanityAdminItem({ post }) {
  console.log('Posts:', post)
  return (
      <div className="m-8 text-[#cbd5e1] rounded-lg mb-4 relative">
       <div>
        {post.academicAward}
       </div>
       <div>
        {post.academicTitle}
       </div>
       <div>
        {post.academicWhere}
       </div>
       <div>
        {post.academicDegreeWhere}
       </div>
       <div>
        {post.advantage}
       </div>
       <div>
        {post.carDate}
       </div>
       <div>
        {post.carType}
       </div>
       <div>
        {post.certificates}
       </div>
       <div>
        {post.childStatus}
       </div>
       <div>
        {post.city}
       </div>
       <div>
        {post.committee}
       </div>
       <div>
        {post.facebook}
       </div>
       <div>
        {post.familyName}
       </div>
       <div>
        {post.familyStatus}
       </div>
       <div>
        {post.familyWho}
       </div>
       <div>
        {post.familyWhoBirth}
       </div>
       <div>
        {post.familyWhoBirthCity}
       </div>
    </div>
  );
}

export default HumanityAdminItem;