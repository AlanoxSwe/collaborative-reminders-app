import ReactMarkdown from 'react-markdown';

export default function Description ({ styles, desc }) {
  return (
    <>
      {
        desc && 
          <ReactMarkdown className={styles.desc}>
            {desc}
          </ReactMarkdown>
      }
    </>
  );
}