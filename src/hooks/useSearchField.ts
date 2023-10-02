import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function useSearchField(initialValue: string) {
  const navigate = useNavigate();
  const [value, setValue] = useState<string>(initialValue);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function isProductId(value: string): boolean {
    return value?.length === 13 && value.startsWith('MLA');
  }

  function handleSearch() {
    if (value) {
      if (isProductId(value)) {
        navigate(`/items/${value}`);
      } else {
        navigate(`/items?search=${value}`);
      }
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
