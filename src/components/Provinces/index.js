import styles from './index.module.css';

function Provinces(props) {
	return (
		<div className={styles.container}>
			<h3 className={styles.title}>Provinsi</h3>
			<h4 className={styles.subtitle}>Data Covid Berdasarkan Provinsi</h4>
			<div className={styles.table__container}>
				<table className={styles.table}>
					<thead className={styles.table__head}>
						<tr>
							<th style={{ padding: '12px 15px' }}>No</th>
							<th>Provinsi</th>
							<th>Positif</th>
							<th>Sembuh</th>
							<th>Dirawat</th>
							<th>Meninggal</th>
						</tr>
					</thead>
					<tbody className={styles.table__body}>
						{props.data.map((province, i) =>
							<tr key={i}>
								<td style={{ padding: '12px 15px' }}>{++i}</td>
								<td>{province.kota}</td>
								<td>{province.kasus}</td>
								<td>{province.sembuh}</td>
								<td>{province.dirawat}</td>
								<td>{province.meninggal}</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Provinces;