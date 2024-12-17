import React, { useState } from 'react';
import { Eye, EyeOff, LucideIcon } from 'lucide-react';

interface FormInputProps {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  icon: LucideIcon;
  error?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  required?: boolean;
}

export function FormInput({
  label,
  type,
  name,
  placeholder,
  icon: Icon,
  error,
  value,
  onChange,
  onBlur,
  required = false
}: FormInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  const validationState = error ? 'error' : value ? 'valid' : 'neutral';
  const borderColorClass = {
    error: 'border-red-500',
    valid: 'border-green-500',
    neutral: 'border-gray-300'
  }[validationState];

  return (
    <div>
      <label 
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          id={name}
          name={name}
          type={inputType}
          className={`w-full h-12 pl-10 pr-${isPassword ? '12' : '4'} border ${borderColorClass} 
            rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary text-base
            transition-colors duration-200`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          required={required}
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        )}
      </div>
      {error && (
        <p 
          id={`${name}-error`}
          className="mt-1 text-sm text-red-500 transition-opacity duration-200"
        >
          {error}
        </p>
      )}
    </div>
  );
}