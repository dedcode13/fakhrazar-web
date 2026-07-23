export default function CornerFrame({
  color = "border-white/25",
}: {
  color?: string;
}) {
  const size = "w-4 h-4";
  return (
    <>
      <span className={`absolute top-0 left-0 ${size} border-t ${color} border-r-0`} />
      <span className={`absolute top-0 left-0 ${size} border-l ${color} border-b-0`} />
      <span className={`absolute bottom-0 right-0 ${size} border-b ${color} border-l-0`} />
      <span className={`absolute bottom-0 right-0 ${size} border-r ${color} border-t-0`} />
    </>
  );
}
