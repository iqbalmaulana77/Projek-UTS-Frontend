import styles from './index.module.css';
import Alert from '../Alert';
import formImg from '../../assets/img/form.svg';

import { useState } from 'react';

function FormCovid(props) {
	const { data, setProvinces } = props;
    const [input, setInput] = useState({ provinsi: '', status: 'sembuh', jumlah: '' });
    const [error, setError] = useState({});

    function handleInput(e) {
		const updatedInput = { ...input };
		updatedInput[e.target.name] = e.target.value;
        setInput(updatedInput);
    }

    function handleSubmit(e) {
        e.preventDefault();
		const { provinsi, status, jumlah } = input;

        if (!provinsi) {
            setError({ provinsi: 'Provinsi wajib diisi' });
        } else if (!status) {
			setError({ status: 'Status wajib diisi' });
        } else if (!jumlah) {
			setError({ jumlah: 'Jumlah wajib diisi' });
        } else {
			setError({});

			const updatedProvices = data.map(province =>
				province.kota === provinsi
					?  	{
						...province,
						kasus: status === 'dirawat'
							? parseInt(province.kasus) + parseInt(jumlah)
							: parseInt(province.kasus) - parseInt(jumlah),
						[status]: parseInt(jumlah) + parseInt(province[status])
					}
					: province
			);

            setProvinces(updatedProvices);

			setInput({ provinsi: '', status: 'sembuh', jumlah: '' });

			alert('Update Data Covid Success');
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <div className={styles.form__left}>
                    <img className={styles.form__image} src={formImg} alt="" />
                </div>
                <div className={styles.form__right}>
                    <form onSubmit={handleSubmit}>
                        <h2 className={styles.form__title}>Form Covid</h2>
                        <label htmlFor="provinsi" className={styles.form__label}>Provinsi</label>
						<select name="provinsi" id="provinsi" onChange={handleInput} defaultValue={input.provinsi} value={input.provinsi} className={styles.form__input}>
							<option value='' disabled>-- Pilih Provinsi --</option>
							{data.map(province =>
								<option key={province.kota}>{province.kota}</option>
							)}
						</select>
                        {error.provinsi ? <Alert>{error.provinsi}</Alert> : ''}

                        <label htmlFor="status" className={styles.form__label}>Status</label>
						<select name="status" id="status" onChange={handleInput} defaultValue={input.status} value={input.status} className={styles.form__input}>
							<option value="sembuh">Sembuh</option>
							<option value="dirawat">Dirawat</option>
							<option value="meninggal">Meninggal</option>
						</select>
                        {error.status ? <Alert>{error.status}</Alert> : ''}

						<label htmlFor="jumlah" className={styles.form__label}>Jumlah</label>
                        <input type="text" name="jumlah" id="jumlah" value={input.jumlah} onChange={handleInput} className={styles.form__input} />
                        {error.jumlah ? <Alert>{error.jumlah}</Alert> : ''}

                        <button type="submit" className={styles.form__button}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormCovid;