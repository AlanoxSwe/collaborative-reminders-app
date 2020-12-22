import Y from 'yjs';
import yMemory from 'y-memory';
import yArray from 'y-array';
import yText from 'y-text';
import yWebsocketsClient from 'y-websockets-client';

Y.extend(yArray, yWebsocketsClient, yMemory, yArray, yText);

const io = Y['websockets-client'].io;
const link = 'https://pure-tor-23097.herokuapp.com/';

const connection = io(link);

const Yjs = ({ connectionExists, room, textInput }: {
  connectionExists: boolean,
  room: string,
  textInput: any,
}): JSX.Element => {

  if (!connectionExists) {
    connection.disconnect();
  }

  if (connectionExists) {
    Y({
      db: {
        name: 'memory',
      },
      connector: {
        name: 'websockets-client',
        room,
        socket: connection, 
        url: link, 
      },
      share: {
        textarea: 'Text',
      }
    }).then(y => {
      y.share.textarea.bind(textInput.current);
      y.share.textarea.delete(0, y.share.textarea._content.length);
      y.db.gc = false;
    }).catch(e => {
      console.error(e);
    });
  }
  return null;
};

export default Yjs;
