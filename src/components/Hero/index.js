import styles from './index.module.css';
import heroImg from '../../assets/img/hero.svg';

function Hero(props) {
	return (
		<div className={styles.container}>
			<div className={styles.hero}>
				<div className={styles.hero__left}>
					<h3 className={styles.hero__title}>Covid ID</h3>
					<p className={styles.hero__subtitle}>Monitoring Perkembangan Covid</p>
					<p className={styles.hero__description}>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
					</p>
					<button className={styles.hero__button}>Vaccine</button>
				</div>
				<div className={styles.hero__right}>
					<img
						className={styles.hero__image}
						src={heroImg}
						alt=""
					/>
				</div>
			</div>
		</div>
	)
}

export default Hero;