import React, { useState } from 'react';
import styles from './Converter.module.css';
import Form from '../Form/Form';
import { hexToRGBConverter } from '../../utils/hexToRGBConverter';

const Converter = () => {
  const [colorValue, setColorValue] = useState('');

  const errorColor = 'salmon'
  const expectedColorCodeLength = 7;
  let currentColor = null;

  if (colorValue.length === expectedColorCodeLength) {
    currentColor = hexToRGBConverter(colorValue) || errorColor;
  }

  return (
    <div
      className={styles.wrapper}
      style={{ backgroundColor: currentColor }}
    >
      <div className={styles.inner}>
        <Form setColorValue={setColorValue} colorValue={colorValue} />
        <div className={styles.output}>
          {currentColor === errorColor ? 'Ошибка!' : currentColor}
        </div>
      </div>
    </div>
  );
};

export default Converter;
