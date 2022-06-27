import { useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';


type Props = {
  options: Array<string>,
  prompt: string;
  value: null,
  onChange: any;
};

export const Select = ({options, prompt, value, onChange}: Props) => {

  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState(""); 

  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, []);

  useEffect(() => {
    document.addEventListener('click', focusOnInput);
    return () => document.removeEventListener('click', close);
  }, []);

  function focusOnInput() {
   document.querySelector('input')?.focus();
  }
  

  function close(e:any) {
    if(e.keyCode === 27 || e.target.className === 'app_root__RrMQF') {
      setOpen(e && e.target === ref.current)
    }
  };

  function filter (options: Array<string>) {
    return options.filter(
      (option:string) => 
      option.toLowerCase().indexOf(query.toLowerCase()) > -1)
  };

  return (
    <div className={styles.root}>
      <div className={styles.dropdown}>
        <div className={styles.control} 
        onClick={() => setOpen((prev) => !prev)}>
          <div className={`${styles.selected_value} ${open ? styles.open : null}`}> 
            {value ? value : prompt}
            </div>

            <div className={`${styles.input} ${open ? styles.open : null}`}> 
              <input 
              type="text" 
              placeholder='Поиск...'
              value={query}
              onChange = {(e) => {
                setQuery(e.target.value)
                onChange(null)
              }}
              onClick = {() => setOpen(prev => !prev)}
              ref={ref}
              />
            </div>

          <div className={`${styles.arrow} ${open ? styles.open : null}`}></div>
        </div>
        <div className={`${styles.options} ${open ? styles.open : null}`}>
          {
            filter(options).map((option:string) => {
             return <div className= {`${styles.option} ${value === option ? styles.selected : null}`} 
             onClick = {() => {
              setQuery("");
              onChange(option);
              setOpen(false);
             }}>{option}</div>
            })
          }
          
        </div>
      </div>
      </div>
  );
};



