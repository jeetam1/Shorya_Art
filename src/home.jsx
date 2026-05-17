import gridData from "../data/gridData";
import GridItem from "../components/GridItem";

const Home = () => {
  return (
    <div className="main-content">
      <div className="art-grid">
        {gridData.map((item) => (
          <GridItem
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;