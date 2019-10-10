
import styles from './$id.css';

export default function({ match }) {
  return (
    <div className={styles.normal}>
      <h1>user id: {match.params.id}</h1>
    </div>
  );
}
