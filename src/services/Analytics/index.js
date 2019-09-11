import {analytics} from 'react-native-firebase';

const MAX_LENGTH_PARAMETERS = 100;

const prepareParams = (parameters, name) => {
  const resultParams = {};
  if (typeof parameters === 'object') {
    Object.keys(parameters).forEach(param => {
      switch (typeof parameters[param]) {
        case 'number': {
          resultParams[param] = parameters[param];
          break;
        }
        case 'string': {
          resultParams[param] = (parameters[param].length < MAX_LENGTH_PARAMETERS) ? parameters[param] : '';
          break;
        }
        case 'object':
        default: {
          const tmp = JSON.stringify(parameters[param]);
          resultParams[param] = (tmp != null && tmp.length < MAX_LENGTH_PARAMETERS) ? tmp : '';
        }
      }
    });
  } else {
    console.error(
      new Error(
        `Analytic has unsupported parameters type: name - ${name}, type - ${typeof parameters}`,
      ),
    );
  }

  return resultParams;
};

export const sendAnalyticEvent = (name, parameters = {}) => {
  try {
    if (typeof name === 'string') {
      const resultParams = prepareParams(parameters, name);
      analytics().logEvent(name, resultParams);
      // console.log('It\'s ok');
    } else {
      console.error(
        new Error(
          `Analytic has unsupported name type: name - ${name}, type - ${typeof name}`,
        ),
      );
    }
  } catch (error) {
    console.error(`Analytic ${name} error`, error.message);
  }
};
