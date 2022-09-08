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


export { CurrentCurency, Notification, contains};