const handleChange = (index, field, value, updateFunction,data) => {
    const newData = [...data];
    newData[index] = { ...newData[index], [field]: value };
    updateFunction(newData);
};

export default handleChange