"use client";
import Section from "../Section";
import ArrowButton from "../../public/images/arrow/down.svg";
import avatar from "../../public/images/avatar/avatar.png";
import ReviewsAllListItem from "./ReviewsAllListItem";
import ReactStars from "react-rating-stars-component";
import ReviewsAllShowMoreBtn from "./ReviewsAllShowMoreBtn";
import Breadcrumbs from "../Breadcrumbs";

const ReviewsAllList = () => {
  const stars = (
    <ReactStars count={5} value={5} activeColor="#536524" edit={false} />
  );

  const reviews = [
    {
      desc: "Tasty Bites Express has won me over with their amazing pizzas. The crust is just the right balance of crispy and chewy, and the toppings are generous. But that's not all – their diverse salad options and creative bowls are a treat for health-conscious foodies. And if you have a sweet tooth, their desserts are a must-try. A one-stop-shop for a delightful feast!",
      reting: stars,
      avatar: avatar,
      name: "William",
      dateAdded: "2 days ago",
      id: 1,
    },
    {
      desc: "Tasty Bites Express has won me over with their amazing pizzas. The crust is just the right balance of crispy and chewy, and the toppings are generous. But that's not all – their diverse salad options and creative bowls are a treat for health-conscious foodies. And if you have a sweet tooth, their desserts are a must-try. A one-stop-shop for a delightful feast!",
      reting: stars,
      avatar: avatar,
      name: "William",
      dateAdded: "2 days ago",
      id: 2,
    },
    {
      desc: "Tasty Bites Express has won me over with their amazing pizzas. The crust is just the right balance of crispy and chewy, and the toppings are generous. But that's not all – their diverse salad options and creative bowls are a treat for health-conscious foodies. And if you have a sweet tooth, their desserts are a must-try. A one-stop-shop for a delightful feast!",
      reting: stars,
      avatar: avatar,
      name: "William",
      dateAdded: "2 days ago",
      id: 3,
    },
    {
      desc: "Tasty Bites Express has won me over with their amazing pizzas. The crust is just the right balance of crispy and chewy, and the toppings are generous. But that's not all – their diverse salad options and creative bowls are a treat for health-conscious foodies. And if you have a sweet tooth, their desserts are a must-try. A one-stop-shop for a delightful feast!",
      reting: stars,
      avatar: avatar,
      name: "William",
      dateAdded: "2 days ago",
      id: 4,
    },
    {
      desc: "Tasty Bites Express has won me over with their amazing pizzas. The crust is just the right balance of crispy and chewy, and the toppings are generous. But that's not all – their diverse salad options and creative bowls are a treat for health-conscious foodies. And if you have a sweet tooth, their desserts are a must-try. A one-stop-shop for a delightful feast!",
      reting: stars,
      avatar: avatar,
      name: "William",
      dateAdded: "2 days ago",
      id: 5,
    },
    {
      desc: "Tasty Bites Express has won me over with their amazing pizzas. The crust is just the right balance of crispy and chewy, and the toppings are generous. But that's not all – their diverse salad options and creative bowls are a treat for health-conscious foodies. And if you have a sweet tooth, their desserts are a must-try. A one-stop-shop for a delightful feast!",
      reting: stars,
      avatar: avatar,
      name: "William",
      dateAdded: "2 days ago",
      id: 6,
    },
  ];

  return (
    <div>
      <div className="py-[16px] md:py-[24px]">
        <Breadcrumbs
          homeElement={"Home"}
          separator={<span> / </span>}
          activeClasses="text-[#B7B7B7]"
          containerClasses="flex items-center gap-[4px] text-[12px] text-[#010101] leading-[14.4px] container"
          capitalizeLinks
        />
      </div>
      <Section
        title={"Reviews"}
        anotherStyles={
          "container gap-[24px] md:gap-[32px] lg:gap-[32px] md:pt-[32px] lg:pt-[32px]"
        }
        styles={"flex items-end justify-between"}
        sortBy={
          <button
            type="button"
            className="px-[16px] py-[8px] border border-solid border-[#010101] rounded-[20px] flex justify-center items-center gap-[4px] w-[111px] leading-[16.8px] text-[14px]"
          >
            Sort by
            <ArrowButton className="w-[24px] h-[24px] stroke-[#010101]" />
          </button>
        }
      >
        <ul className="grid grid-cols-1 md:grid-cols-2 md:gap-[30px] lg:grid-cols-3 gap-[16px]">
          {reviews?.map((item) => {
            return item && <ReviewsAllListItem key={item.id} item={item} />;
          })}
        </ul>
        <ReviewsAllShowMoreBtn />
      </Section>
    </div>
  );
};

export default ReviewsAllList;
