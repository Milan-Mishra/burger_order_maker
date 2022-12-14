import "./backdrop.css";

export const BackdropComponent = ({
  show,
  toggleFunction,
}: {
  show: boolean;
  toggleFunction: Function;
}) =>
  show ? (
    <div className="backdrop_check" onClick={() => toggleFunction(false)}></div>
  ) : null;
