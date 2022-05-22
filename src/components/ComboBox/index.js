import React from 'react'
import Select from './Select';
const ComboBox = () => {

    const [options, setOptions] = React.useState([
        {
            id: "angular",
            label: 'Angular',
            selected: false
        },
        {
            id: "react",
            label: 'React',
            selected: false
        },
        {
            id: "vue",
            label: 'Vue',
            selected: true
        }
    ]);

    const handleSelect = (value) => {
        debugger;
        const auxOptions = options.map(option => ({ ...option, selected: false }));
        const auxIndex = auxOptions.findIndex(option => option.id === value);
        auxOptions[auxIndex].selected = true;
        setOptions(auxOptions);
    };

    return (
        <Select
        
            options={options}
            handleSelect={handleSelect}
        />

    )
}

export default ComboBox;

