import React, { useCallback } from 'react';

type PriceInputProps = {
  value: number | null;
  onChange: (value: number | null) => void;
  placeholder?: string;
  disabled?: boolean;
};

export function PriceInput({
  value,
  onChange,
  placeholder = 'R$ 0,00',
  disabled = false,
}: PriceInputProps) {
  const formatCurrency = (value: number) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  const parseCurrency = (rawValue: string) => {
    const numeric = rawValue.replace(/\D/g, '');

    if (!numeric) return null;

    return Number(numeric) / 100;
  };

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const parsedValue = parseCurrency(e.target.value);
      onChange(parsedValue);
    },
    [onChange]
  );

  return (
    <input
      type="text"
      inputMode="numeric"
      disabled={disabled}
      placeholder={placeholder}
      value={value !== null ? formatCurrency(value) : ''}
      onChange={handleChange}
    />
  );
}