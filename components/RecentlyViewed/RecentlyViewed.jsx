import { useSelector } from "react-redux";
import Section from "../Section";
import { selectRecentlyViewedItems } from "@/redux/item/selectors";
import RecentlyViewedList from "./RecentlyViewedList";

const RecentlyViewed = () => {
  const recentlyViewedItems = useSelector(selectRecentlyViewedItems);

  console.log(recentlyViewedItems);

  return (
    <>
      {recentlyViewedItems?.length > 0 && (
        <Section title="Recently viewed" anotherStyles={"container"}>
          <RecentlyViewedList recentlyViewedItems={recentlyViewedItems} />
        </Section>
      )}
    </>
  );
};

export default RecentlyViewed;
