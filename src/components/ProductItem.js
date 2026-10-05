import styles from "./ProductItem.module.css";

export default function ProductItem({ product, onDelete }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={product.thumbnail || product.image}
          alt={product.title}
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{product.title}</h3>
        <div className={styles.price}>${product.price}</div>
        <p className={styles.description}>{product.description}</p>
      </div>

      {onDelete && (
        <button
          onClick={() => onDelete(product.id)}
          className={styles.deleteBtn}
        >
          Delete
        </button>
      )}
    </div>
  );
}
