interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-400 pb-1">
      {title}
    </h2>
  );
} 