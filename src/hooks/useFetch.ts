import { useState, useEffect } from "react";

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const req = await fetch(url);
        if (!req.ok) throw new Error(req.statusText);
        const data: T = await req.json();
        setData(data);
        setLoading(false);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
          console.log(error.message);
        } else {
          setError(String(error));
          console.log(String(error));
        }
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
}
