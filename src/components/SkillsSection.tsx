interface Skill {
  category: string;
  items: string[];
  color: string;
}

interface SkillsSectionProps {
  skills: Skill[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <h4 className="font-medium text-gray-900 mb-2">{skill.category}</h4>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item, itemIndex) => (
                <span
                  key={itemIndex}
                  className={`px-3 py-1 ${skill.color} rounded-full text-sm`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 