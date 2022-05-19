type stringOrNum = string | number;

const reply = (response: stringOrNum): void => console.log(response);

reply('hola');
