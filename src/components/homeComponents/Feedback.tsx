import UserCard from "../cards/UserCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Feedback() {
  return (
    <div className="align-elements my-20">
      <div className="flex items-center justify-center flex-col">
        <h2 className="text-foreground text-4xl font-bold">Customer Reviews</h2>
        <div className="w-[120px] h-px border my-3"></div>
      </div>
      <UserCard />
    </div>
  );
}

export default Feedback;
