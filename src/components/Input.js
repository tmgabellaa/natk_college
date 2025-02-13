export default function Input({ type, placeholder, value, onChange, disabled }) {
    return (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:scale-105"
      />
    );
  }
  