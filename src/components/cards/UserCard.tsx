import { useSelector } from "react-redux";
import Slider from "react-slick";
import { retrieveHomePage } from "../../pages/home/selector";
import { serverApi } from "../../lib/config";
import { PackageX } from "lucide-react";

function UserCard() {
  const { topUsers } = useSelector(retrieveHomePage);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 500,
    slidesToShow: 4, // lg:4 cards
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // md
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // sm & mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    arrows: false,
  };

  return (
    <div className="my-6">
      <Slider {...settings}>
        {topUsers.length > 0 ? (
          topUsers.map((user) => (
            <div key={user.memberPhone} className="px-4 py-2">
              <div className="card bg-card-100 shadow-sm cursor-pointer transition-all duration-400 hover:scale-105 hover:shadow-xl border">
                <div className="card-body">
                  <div className="flex flex-col gap-6">
                    <div className="mt-4 flex flex-col items-center justify-center gap-4">
                      <figure className="h-15 w-15 rounded-full overflow-hidden">
                        <img
                          src={`${serverApi}/${user.memberImage}`}
                          alt={user.memberNick}
                          className="w-full h-full object-cover"
                        />
                      </figure>
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-bold">{user.memberNick}</h3>
                      <h4 className="italic text-muted-foreground mt-4 h-[60px] overflow-hidden">
                        "{user.memberDesc}"
                      </h4>
                      <p className="text-muted-foreground mt-4">
                        {new Date(user.createdAt).toLocaleDateString("en-CA")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="w-48 h-48 mb-6 opacity-60 flex items-center justify-center">
              <PackageX className="w-24 h-24 text-gray-300" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No Customer Reviews
            </h3>
          </div>
        )}
      </Slider>
    </div>
  );
}

export default UserCard;
