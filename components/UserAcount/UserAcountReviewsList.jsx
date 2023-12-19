import UserAcountReviewsListItem from "./UserAcountReviewsListItem";

const UserAcountReviewsList = ({ reviews }) => {
  return (
    <ul className="flex flex-col gap-[24px]">
      {reviews?.map((item) => {
        return (
          <UserAcountReviewsListItem
            key={item._id}
            item={UserAcountReviewsListItem}
          />
        );
      })}
    </ul>
  );
};

export default UserAcountReviewsList;
