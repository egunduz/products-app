import { CurrencySign } from "../_constants";
import { notification } from 'antd';

const CurrentCurency = {
    Sign: CurrencySign.TL
}

/** is used to show up message dialos */
class Notification {
    static Info = ({message, title}) =>{
        notification.open({
            title: title || 'Info',
            description: message,
            type: "info"
          }); 
    }

    static Error = ({message, title}) =>{
        notification.open({
            title: title || 'Error',
            description: message,
            type: "error"
          }); 
    }
}

/**
 * checks if text contains any key or words
 * @param {*} text word or text
 * @param {*} key to be find
 * @returns 
 */
const contains = (text, key) => { 
    if (text === undefined || text.length === 0 || key === undefined || key.length === 0)
      return false;

    return text.toString().search(new RegExp(key, "i")) >= 0;
}

/**
 * retrives first word in the sentence
 * for query porpuses
 * @param {*} text 
 * @returns 
 */
const getFirstWord = (text) => {
    if (text === undefined) return '';

    const spaceIndex = text.indexOf(' ');
    return spaceIndex === -1 ? text : text.substring(0, spaceIndex);
};

/**
 * returns last element of array
 * for query porpuses
 * @param {*} text 
 * @returns 
 */
const getLastOrDefault = (array) => {
  if (array === undefined || array.length === 0) return undefined;
  return (array[array.length - 1]).replace(',', '');
};

export { CurrentCurency, Notification, contains, getFirstWord, getLastOrDefault};