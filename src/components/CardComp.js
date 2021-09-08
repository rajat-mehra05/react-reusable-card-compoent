export default function CardComp({ header, type, children }) {
  return (
    <div>
      <div className={`${type}--header`}>{header}</div>
      <div className={`${type}--body`}>{children}</div>
    </div>
  );
}
