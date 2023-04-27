import styles from './index.module.css';
import Card from './Card';
import data from '../../../src/utils/constants/indonesia';

function DataGlobal(props) {
	return (
		<div className={styles.container}>
			<h3 className={styles.title}>Indonesia</h3>
			<h4 className={styles.subtitle}>Data Covid Berdasarkan Indonesia</h4>
			<div className={styles.data__global}>
				{data.indonesia.map((e, i) =>
					<Card
						key={i}
						title={e.status}
						totalData={new Intl.NumberFormat("id-ID").format(e.total)}
						descColor={e.status == 'Positif' ? '#06D6A0' : e.status == 'Sembuh' ? '#118AB2' : '#EF476F'}
					/>
				)}
			</div>
		</div>
	)
}

export default DataGlobal;