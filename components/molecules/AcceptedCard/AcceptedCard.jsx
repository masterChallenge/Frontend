import Accepted from "@assets/Completed.svg";
import Button from "@components/atoms/Button/Button";

const AcceptedCard = () => {
  return (
    <div className="bg-primary flex flex-col items-center text-center rounded-3xl px-20 py-6 shadow-lg text-secondary-darker">
      <Accepted />
      <span className="mt-4 mb-10">
        <h3 className="text-2xl font-bold">Well Done!</h3>
        <p>You're getting better at css</p>
      </span>
      <Button children="Next Challenge" color="secondary-dark" />
      <a href="/" className="mt-4 text-sm font-bold">
        Return to dashboard
      </a>
    </div>
  );
};

export default AcceptedCard;
