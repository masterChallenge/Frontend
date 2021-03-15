import AcceptedCard from "@components/molecules/AcceptedCard/AcceptedCard";
import Navbar from "@components/molecules/Navbar/Navbar";

const Home = () => {
  return (
    <div className="flex justify-center flex-wrap">
      <Navbar />
      <h1 className="text-green-400">Home - Menu Challenges</h1>
      <AcceptedCard />
    </div>
  );
};

export default Home;
