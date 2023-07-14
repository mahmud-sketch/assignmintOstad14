const Header = (props) => {
  return (
    <div style={{
      backgroundColor: "rgb(87, 190, 224)",
      padding:"10px"
    }}>
      <h1>{props.title} </h1>
    </div>
  );
};

export default Header;
