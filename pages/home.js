import AcceptedCard from "@components/molecules/AcceptedCard/AcceptedCard";
import Navbar from "@components/molecules/Navbar/Navbar";
import RejectedCard from "@components/molecules/RejectedCard/RejectedCard";

const Home = () => {
  return (
    <div className="flex justify-center flex-wrap">
      <Navbar />
      <h1 className="text-green-400">Home - Menu Challenges</h1>
      <AcceptedCard />
      <RejectedCard />
    </div>
  );
};

export default Home;
