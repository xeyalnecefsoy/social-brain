import React from 'react';

interface FormattedTextProps {
  text: string;
  className?: string;
}

export function FormattedText({ text, className }: FormattedTextProps) {
  if (!text) return null;

  // Split by bold (**text**) and italic (*text*) markers
  const parts = text.split(/(\*\*.*?\*\*)|(\*.*?\*)/g);

  return (
    <div className={className}>
      {parts.map((part, index) => {
        if (!part) return null;
        
        // Match bold
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={index} className="font-bold text-slate-100">
              {part.slice(2, -2)}
            </strong>
          );
        }
        
        // Match italic
        if (part.startsWith('*') && part.endsWith('*')) {
          return (
            <em key={index} className="italic text-indigo-400">
              {part.slice(1, -1)}
            </em>
          );
        }
        
        // Regular text
        return <span key={index}>{part}</span>;
      })}
    </div>
  );
}
