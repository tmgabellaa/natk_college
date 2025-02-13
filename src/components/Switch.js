import { useState } from "react";

export default function Switch({ text, onChange }) {
  const [enabled, setEnabled] = useState(false);

  const toggleSwitch = () => {
    setEnabled(!enabled);
    onChange(!enabled);
  };

  return (
    <div className="flex items-center space-x-2 cursor-pointer" onClick={toggleSwitch}>
      <div className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 duration-300 ${enabled ? "bg-blue-500" : ""}`}>
        <div className={`bg-white w-5 h-5 rounded-full shadow-md transform duration-300 ${enabled ? "translate-x-6" : ""}`}></div>
      </div>
      <span>{text}</span>
    </div>
  );
}
