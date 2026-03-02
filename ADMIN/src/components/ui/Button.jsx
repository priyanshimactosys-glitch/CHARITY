import { twMerge } from 'tailwind-merge';

export const Button = ({ variant = 'primary', className, children, ...props }) => {
  const variants = {
    primary: "bg-brand-red text-white hover:bg-red-800",
    secondary: "bg-brand-blue text-white hover:bg-blue-800",
    success: "bg-brand-green text-white hover:bg-green-800",
    outline: "border-2 border-brand-red text-brand-red hover:bg-red-50"
  };

  return (
    <button 
      className={twMerge("px-4 py-2 rounded-lg font-bold transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer", variants[variant], className)} 
      {...props}
    >
      {children}
    </button>
  );
};