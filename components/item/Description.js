import ReactMarkdown from 'react-markdown';

export default function Description ({ styles, data }) {
  return (
    <>
      {
        data.desc && 
          <ReactMarkdown className={styles.desc}>
            {data.desc}
          </ReactMarkdown>
      }
      {
        data.carbs || data.fat || data.protein ?
        <div className={styles.extras}>
          {data.carbs && <span className={styles.extrasText}>Carbs: {data.carbs}</span>}
          {data.fat && <span className={styles.extrasText}>Fat: {data.fat}</span>}
          {data.protein && <span className={styles.extrasText}>Protein: {data.protein}</span>}
        </div>
        : null
      }
    </>
  );
}