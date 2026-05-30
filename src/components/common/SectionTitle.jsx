export default function SectionTitle({
  title,
  subtitle
}) {
  return (
    <div className="text-center">
      <h2 className="section-heading">
        {title}
      </h2>

      {subtitle && (
        <p className="section-copy mt-3">
          {subtitle}
        </p>
      )}
    </div>
  );
}
