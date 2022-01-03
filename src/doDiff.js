import _ from 'lodash';
export default (text1, text2) => {
    const allKeys = _.uniq([...Object.keys(text1), ...Object.keys(text2)]);
    const result = allKeys.reduce((result, key) => {
        if (text2.hasOwnProperty(key) && text1.hasOwnProperty(key)) {
            if (text1[key] === text2[key])  {
                result.push({result: ' ', key: key, value: text1[key]});
            } else {
                result.push({result: '-', key: key, value: text1[key]});
                result.push({result: '+', key: key, value: text2[key]});
            }
        } else if (text1.hasOwnProperty(key)) {
            result.push({result: '-', key: key, value: text1[key]});
        } else {
            result.push({result: '+', key: key, value: text2[key]});
        }
        return result;
    }, []);
    const sortedResult = _.sortBy(result, ['key']);
    return stringify(sortedResult);
}

function stringify(obj) {
    const content =  obj.reduce((result, val) => {
        result = result + `  ${val.result} ${val.key}: ${val.value} \n`;
        return result;
    }, '');
    return '{\n' + content + '}';
}