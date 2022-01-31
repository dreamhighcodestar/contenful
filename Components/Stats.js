import Stat from "./Stat";

const Stats = () => {
  return (
    <div className="row justify-content-center mx-3">
      <Stat
        title="22 brands"
        icon="fas fa-tags"
        description="We partner with leading scientific brands to provide solutions for testing and analysis"
      />
      <Stat
        title="30 Sectors"
        icon="fas fa-industry"
        description="Our Solutions serve customers across numerous industries and sectors; from life science research and medical laboratories to manufacturing and the petroleum industry"
      />
      <Stat
        title="30 Years"
        icon="fas fa-calendar-alt"
        description="F&amp;S has over 30 years experience of providing laboratory equipment and consumables in Kenya and East Africa"
      />
    </div>
  );
};

export default Stats;
