import { useState } from 'react';
import { Select, ResultArea, Footer } from 'src/components';
import { COUNTRIES } from 'src/data';
import styles from './index.module.scss';

export const App = () => {

  const [value, setValue] = useState(null);

  return (
    <div className={styles.root}>
      <ResultArea value = {value} /> 
      <Select 
      prompt={'Выберите страну'}
      options={COUNTRIES}
      value = {value}
      onChange = {(val:null) => setValue(val)}
      />
      <Footer />
    </div>
  );
};
