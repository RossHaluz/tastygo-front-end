import React from "react";

const UserAcountReviewsListItem = ({ item }) => {
  const { dateAdd, rating, reviewDesc, user, userName } = item;
  return (
    <li className="p-[32px] border border-solid border-[#B7B7B7] rounded-[8px] w-full"></li>
  );
};

export default UserAcountReviewsListItem;
