import Y from 'yjs';
import yMemory from 'y-memory';
import yArray from 'y-array';
import yText from 'y-text';
import yWebsocketsClient from 'y-websockets-client';

Y.extend(yArray, yWebsocketsClient, yMemory, yArray, yText);

var io = Y['websockets-client'].io;
// var link = 'http://localhost:1234';
var link = 'http://192.168.50.24:1234';

var connection = io(link);

const Yjs = ({ connectionExists, room, textInput }) => {


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
