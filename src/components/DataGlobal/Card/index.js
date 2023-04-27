import styles from './index.module.css';

function Card(props) {
	return (
        <div className={styles.card}>
            <div className={styles.card__title}>{props.title}</div>
            <div className={styles.card__desc} style={{color: props.descColor}}>{props.totalData}</div>
        </div>
	)
}

export default Card;