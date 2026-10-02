export default function ProductItem({ product }) {
  const cardStyle = {
    border: "1px solid #ccc",
    padding: "16px",
    borderRadius: "8px",
    textAlign: "center",
  };

  const imageStyle = {
    width: "100px",
    height: "100px",
    objectFit: "contain",
  };

  return (
    <div style={cardStyle}>
      <img src={product.image} alt={product.title} style={imageStyle} />
      <h3>{product.title}</h3>
      <h2> ${product.price}</h2>
      <p>{product.description}</p>
    </div>
  );
}
