import short from 'short-uuid';

const base = '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ-';
const translator = short(base);

const generate = () => {
  const id = short.uuid();
  const shortId = translator.fromUUID(id);

  return [id, shortId];
};

const shortify = (longId) => translator.fromUUID(longId);

const longify = (shortId) => translator.toUUID(shortId);

export default { generate, shortify, longify };
