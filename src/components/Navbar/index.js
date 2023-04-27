import React, { useState } from 'react';
import styles from './index.module.css';

function Navbar(props) {
	const [isOpen, setIsOpen] = useState(false);

	const toggleNav = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={styles.container}>
			<nav className={styles.navbar}>
				<div className={styles.navbar__head}>
					<h2 className={styles.navbar__brand}>Covid ID</h2>
					<div className={styles.navbar__toggle} onClick={toggleNav}>
						<span className={styles.toggle__icon}>&#9776;</span>
					</div>
				</div>
				<div>
					<ul className={isOpen ? `${styles.navbar__list} ${styles.active}` : styles.navbar__list}>
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

export default Navbar;