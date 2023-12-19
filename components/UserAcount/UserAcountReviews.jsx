"use client";
import { useSession } from "next-auth/react";
import UserAcountReviewsTitle from "./UserAcountReviewsTitle";
import { getReviewsUser } from "@/redux/review/operetions";
import { useDispatch, useSelector } from "react-redux";
import { selectReviews } from "@/redux/review/selectors";
import { useEffect } from "react";
import UserAcountReviewsList from "./UserAcountReviewsList";

const UserAcountReviews = () => {
  const { data: session } = useSession();
  const userId = session?.user?.id;
  const reviews = useSelector(selectReviews);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviewsUser(userId));
  }, [dispatch]);

  return (
    <div className="flex flex-col gap-[32px] w-full">
      <UserAcountReviewsTitle />
      {reviews?.length > 0 && <UserAcountReviewsList reviews={reviews} />}
    </div>
  );
};

export default UserAcountReviews;
