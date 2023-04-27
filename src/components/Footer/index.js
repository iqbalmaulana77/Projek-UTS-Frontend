import styles from './index.module.css';

function Footer(props) {
	return (
		<div className={styles.container}>
			<nav className={styles.navbar}>
				<div className={styles.navbar__head}>
					<h2 className={styles.navbar__brand}>Covid ID</h2>
					<h3 className={styles.navbar__author}>Developed By Iqbal Maulana</h3>
				</div>
				<div>
					<ul className={styles.navbar__list}>
						<li className={styles.navbar__item}>Global</li>
						<li className={styles.navbar__item}>Indonesia</li>
						<li className={styles.navbar__item}>Provinsi</li>
						<li className={styles.navbar__item}>About</li>
					</ul>
				</div>
			</nav>  
		</div>
	);
}

export default Footer;