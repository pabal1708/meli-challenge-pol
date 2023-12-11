const paramToArrayFilter = (param) =>  {
    const convertedString = param.replace(' ', ',').split(',');
    return convertedString
}

export default paramToArrayFilter;