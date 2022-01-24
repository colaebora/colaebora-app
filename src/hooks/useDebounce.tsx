import { useState } from 'react';

export function useDebounce<T extends (...args: any) => unknown>(
  callback: T,
  debounceTime: number
): (...args: Parameters<T>) => unknown {
  const [timeoutToken, setTimeoutToken] = useState<NodeJS.Timeout | null>(null);

  const debounced = (...args: Parameters<T>) => {
    if (timeoutToken) clearTimeout(timeoutToken);
    setTimeoutToken(() =>
      setTimeout(() => {
        callback(...args);
      }, debounceTime)
    );
  };

  return debounced;
}
