import { aboutData } from "../../data/about";

function About() {
  return (
    <div className="align-elements my-20">
      <div className="flex items-center justify-center flex-col">
        <h2 className="text-foreground text-4xl font-bold">About Us</h2>
        <div className="w-[120px] h-px border my-3"></div>
      </div>
      {/* about */}
      <div className="lg:flex-row flex-col lg:flex justify-between items-center my-6">
        <div className="text-primary/80 max-w-[650px] text-xl">
          <p>{aboutData.description[0].part1}</p>
          <p className="mt-4">{aboutData.description[1].part2}</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-6 lg:mt-0 text-center">
          {aboutData.stats.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="py-10 px-15 bg-card-100 shadow-sm border rounded-2xl transition-all duration-400 hover:scale-105 hover:shadow-xl border"
              >
                <div className="flex items-center justify-center flex-col gap-4">
                  <div className="bg-accent/15 w-[60px] h-[60px] rounded-2xl flex items-center justify-center">
                    <Icon className="text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold">{item.value}</h3>
                  <span className="text-primary/80">{item.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default About;
