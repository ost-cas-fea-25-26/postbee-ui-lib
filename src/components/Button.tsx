interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** Optional custom background color */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({ primary = false, size = 'medium', backgroundColor, label, ...props }: ButtonProps) => {
  // Tailwind size classes
  const sizeClasses = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  // Tailwind primary / secondary classes
  const modeClasses = primary ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-200 text-gray-800 hover:bg-gray-300';

  return (
    <button
      type="button"
      className={`${sizeClasses[size]} ${modeClasses} rounded-md font-semibold transition-colors duration-200`}
      style={backgroundColor ? { backgroundColor } : undefined}
      {...props}
    >
      {label}
    </button>
  );
};
