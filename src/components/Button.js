export default function Button({
    text,
    onClick,
    bgColor = "bg-blue-500",
    textColor = "text-white",
    disabled,
  }) {
    return (
      <button
        className={`${bgColor} ${textColor} px-4 py-2 rounded-lg font-semibold transition-transform duration-200 hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed`}
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </button>
    );
  }
  