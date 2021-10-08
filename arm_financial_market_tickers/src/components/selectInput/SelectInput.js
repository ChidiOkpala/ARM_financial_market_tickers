import { useState } from 'react';
import Select from 'react-select';

import './SelectInput.css'

export const SelectInput = ({
  multiple,
  options,
  onChange,
  placeholder,
  label,
}) => {
  const [selectedOption, setSelectedOption] = useState(null)

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    onChange(selectedOption);
  };

    return (
      <div className="select-input-wrapper">
        <div className="label">{label}</div>
        <Select
          value={selectedOption}
          onChange={handleChange}
          options={options}
          isMulti={multiple}
          placeholder={placeholder}
        />
      </div>
    );
};