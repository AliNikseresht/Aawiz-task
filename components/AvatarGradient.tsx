import React from "react";

interface AvatarGradientProps {
  index: number;
  name: string;
}

const gradients = [
  "from-blue-500 to-purple-600",
  "from-purple-500 to-pink-600",
  "from-green-500 to-teal-600",
  "from-orange-500 to-red-600",
];

const AvatarGradient: React.FC<AvatarGradientProps> = ({ index, name }) => {
  const gradient = gradients[index % gradients.length];
  const initial = name?.charAt(0)?.toUpperCase() ?? "?";

  return (
    <div
      className={`h-14 w-14 rounded-full flex items-center justify-center bg-linear-to-br ${gradient}`}
    >
      <span className="text-white font-bold text-lg">{initial}</span>
    </div>
  );
};

export default AvatarGradient;
