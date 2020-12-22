import short from 'short-uuid';

const base = '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ-';
const translator: short.Translator = short(base);

const generate = (): string[] => {
  const id = short.uuid();
  const shortId = translator.fromUUID(id);

  return [id, shortId];
};

const shortify = (longId: string): string => translator.fromUUID(longId);

const longify = (shortId: string): string => translator.toUUID(shortId);

export default { generate, shortify, longify };
