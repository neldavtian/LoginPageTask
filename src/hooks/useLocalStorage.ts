import { useEffect, useState } from "react";

interface IUseLocalStorageReturn<T> {
  value: T;
  isExists: boolean;
  changeValue: (value: T) => void;
  removeValue: () => void;
}

const useLocalStorage = <T>(
  key: string,
  defaultValue: T | null
): IUseLocalStorageReturn<T> => {
  const fromLocalStorage = localStorage.getItem(key) ? localStorage.getItem(key) : '';
  const isExists = !!fromLocalStorage;

  const [value, setValue] = useState<T>(() => {
    let currentValue;

    try {
      if (fromLocalStorage) {
        currentValue = JSON.parse(fromLocalStorage);
      }
    } catch (error) {
      currentValue = defaultValue;
      console.error(error);
    }

    return currentValue;
  });

  const changeValue = (value: T) => {
    localStorage.setItem(key, JSON.stringify(value));
    setValue(value);
  };

  const removeValue = () => {
    localStorage.removeItem(key);
  };

  useEffect(() => {
    if (value) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [value, key]);

  return { value, changeValue, removeValue, isExists };
};

export default useLocalStorage;