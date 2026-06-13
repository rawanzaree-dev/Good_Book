export default function Heading({ title }) {
  const parentStyle = {
    backgroundColor: "#fff",
    padding: "10px 25px 0",
  };
  const headingStyle = {
    width: "fit-content",
    color: "var(--primary-color)",
    borderBottom: "2px solid var(--primary-color)",
    paddingBottom: "5px",
    fontWeight: 500,
    fontSize: "26px",
  };

  return (
    <div style={parentStyle} className="parent">
      <h2 style={headingStyle} className="heading-book-slider">
        {title}
      </h2>
    </div>
  );
}