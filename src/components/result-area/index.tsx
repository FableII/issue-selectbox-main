import { useState } from 'react';
import styles from './index.module.scss';

type Props = {
  value: null;
};


export const ResultArea = ({value}: Props) => {

  /* const [countries, setCountries] = useState([{}]);  */ // состояние для хранения стран в массиве

  /* function addCountry (v:any) {
    const country = {
      val: v
    };
    setCountries(oldList => [...oldList, country])
    console.log(countries)
  } */

  return (
    <div className={styles.root}>
      <div className={styles.title} /* onClick = {() => {addCountry(value)}} */>Result area</div>
      <div className={styles.value}>{value}</div>  
    </div>
  );
};