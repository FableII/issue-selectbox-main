import { useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';

type Props = {
  value: any;
};


export const ResultArea = ({value}: Props) => {

  const countRef = useRef();
  useEffect(() => {countRef.current = value});
  const prevCount = countRef.current;

  return (
    <div className={styles.root}>
      <div className={styles.title}>Result area</div>
      <div className={styles.value}>{value !== null ? value: prevCount}</div>  
    </div>
  );
};