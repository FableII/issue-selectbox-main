import { useState } from 'react';
import styles from './index.module.scss';

type Props = {
  value: null;
};


export const ResultArea = ({value}: Props) => {

  return (
    <div className={styles.root}>
      <div className={styles.title}>Result area</div>
      <div className={styles.value}>{value}</div>  
    </div>
  );
};