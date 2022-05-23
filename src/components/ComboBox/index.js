import React, {useEffect, useState} from 'react'
import Select from './Select';
const ComboBox = ({
    options,
    setOptions,
    setSettings
}) => {



    const handleSelect = (value) => {
        const auxOptions = options.map(option => ({ ...option, selected: false }));
        const auxIndex = auxOptions.findIndex(option => option.id === value);
        auxOptions[auxIndex].selected = true;
        setOptions(auxOptions);
        setSettings('tecstack', value);
    };

    return (
        <Select
            options={options}
            handleSelect={handleSelect}
        />

    )
}

export default ComboBox;

