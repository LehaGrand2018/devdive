import React, { useState } from 'react';
import Button from '../../../Components/Button/Button';

import styles from './AnswerForm.module.scss';

const AnswerForm = ({className}) => {
  const [inputValue, setInputValue] = useState('Введите ответ');
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('You input:', inputValue);

  };

  return (
    <form className={`${styles.form} ${className}`} onSubmit={handleSubmit}>
      <label className={styles.formHeader}>Ваш ответ</label>
      <textarea
        className={styles.formInput}
        placeholder={inputValue}
        id='answerInput'
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button className={styles.formButton} value='Задать вопрос' type="submit"></Button>
    </form>
  );
};

export default AnswerForm;
