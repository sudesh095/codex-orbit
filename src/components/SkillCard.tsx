import React from "react";
import { IconType } from "react-icons";

interface SkillCardProps {
  name: string;
  icon: IconType;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon: Icon }) => {
  return (
    <div
      className="
        flex items-center gap-3 px-4 py-2
        rounded-lg border
        bg-white dark:bg-gray-900
        shadow-sm
        hover:scale-110 transition-transform duration-200
      "
    >
      <Icon
        size={22}
        className="text-gray-700 dark:text-gray-200"
      />

      <span className="text-sm font-medium whitespace-nowrap text-gray-800 dark:text-gray-100">
        {name}
      </span>
    </div>
  );
};

export default React.memo(SkillCard);
