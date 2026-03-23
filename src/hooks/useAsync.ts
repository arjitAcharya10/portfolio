import { useState, useEffect, useCallback } from 'react';

interface UseAsyncState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

type UseAsyncFunction<T> = () => Promise<T>;

export const useAsync = <T,>(
  asyncFunction: UseAsyncFunction<T>
): UseAsyncState<T> => {
  const [state, setState] = useState<UseAsyncState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  const execute = useCallback(async (): Promise<void> => {
    try {
      setState({ data: null, loading: true, error: null });
      const result = await asyncFunction();
      setState({ data: result, loading: false, error: null });
    } catch (err) {
      const error = err instanceof Error ? err.message : 'An error occurred';
      setState({ data: null, loading: false, error });
    }
  }, [asyncFunction]);

  useEffect(() => {
    execute();
  }, [execute]);

  return state;
};
