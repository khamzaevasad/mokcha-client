import { Calendar } from "lucide-react";

function About() {
  return (
    <div className="align-elements my-20">
      <div className="flex items-center justify-center flex-col">
        <h2 className="text-foreground text-4xl font-bold">About Us</h2>
        <div className="w-[120px] h-px border my-3"></div>
      </div>
      {/* about */}
      <div className="flex justify-between items-center my-6">
        <div className="font-thin">
          <p>
            Mokcha Restaurant — a culinary destination specializing in Turkish
            and European cuisine, known for rich flavors, premium ingredients,
            and expertly crafted meat dishes. With multiple locations across the
            region, we have been serving guests since 2022 with a commitment to
            quality and authentic taste.
          </p>
          <p>
            Our chefs combine tradition with modern cooking techniques,
            delivering meals that highlight freshness, craftsmanship, and bold
            flavors. From signature meat plates to comforting European
            favorites, every dish reflects our dedication to excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-card-100 shadow-sm border rounded">
            <div className="flex gap-3 items-center justify-center flex-col">
              <div className="m-10 text-center">
                <span>
                  <Calendar />
                </span>
                <h3>2022</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
