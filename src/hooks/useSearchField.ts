import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function useSearchField(initialValue: string) {
  const navigate = useNavigate();
  const [value, setValue] = useState<string>(initialValue);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function handleSearch() {
    if (value) {
      navigate(`/items?search=${value}`);
    }
  }

  function onKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }

  return {
    value,
    onChange,
    onKeyDown,
    handleSearch,
  };
}
