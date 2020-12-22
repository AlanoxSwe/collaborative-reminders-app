// Dependencies
import React from 'react';
import ReactMarkdown from 'react-markdown';

const Description = ({ styles, data }: {
  styles: { [key: string]: string },
  data: any,
}): JSX.Element => {
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

export default Description;
