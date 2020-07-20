import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css'

const Form = ({ setColorValue, colorValue }) => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setColorValue(value);
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <label>
        введите цвет в формате hex
        <input
          className={styles.input}
          autoComplete="off"
          type="text"
          name="hex"
          onChange={handleChange}
          value={colorValue}
        />
      </label>

    </form>
  );
};

Form.propTypes = {
  setColorValue: PropTypes.func.isRequired,
  colorValue: PropTypes.string.isRequired,
};

export default Form;
