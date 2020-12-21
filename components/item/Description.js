export default function Description ({ styles, desc }) {
  return (
    <>
      {
        desc && <p className={styles.desc}>{desc}</p>
      }
    </>
  );
}