// cspell: ignore calori
type CaloriDisplayProps = {
  calories: number;
  text: string;
};

const CaloriDisplay = ({ calories, text }: CaloriDisplayProps) => {
  return (
    <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
      <span className="font-black text-6xl text-orange">{calories}</span>
      {text}
    </p>
  );
};
export default CaloriDisplay;