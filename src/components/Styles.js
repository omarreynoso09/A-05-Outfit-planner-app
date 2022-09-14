/* eslint-disable no-undef */
const Styles = ({ getNewOutfit }) => {
  return (
    <div className="style">
      <h2>Dress Code</h2>
      <button onClick={() => getNewOutfit("casual")}>Casual</button>
      <button onClick={() => getNewOutfit("sport")}>Sport</button>
      <button onClick={() => getNewOutfit("formal")}>Formal</button>
      <button onClick={() => reset("reset")}>Reset</button>
    </div>
  );
};

export default Styles;
