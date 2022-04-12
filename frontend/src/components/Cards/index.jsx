import SCard from "./style";

export default function Cards({ name, image }) {
  return (
    <SCard img={image}>
      <p>{name}</p>
    </SCard>
  );
}
Cards.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
};
Cards.defaultProps = {
  image: "",
  name: () => {},
};
