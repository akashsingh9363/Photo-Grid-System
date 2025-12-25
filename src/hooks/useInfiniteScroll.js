import { useEffect, useRef, useCallback } from 'react';

const useInfiniteScroll = (onLoadMore, isLoading) => {
  const observerRef = useRef(null);
  const loadMoreRef = useRef(null);

  const handleObserver = useCallback(
    (entries) => {
      const [target] = entries;

      if (target.isIntersecting && !isLoading) {
        onLoadMore();
      }
    },
    [onLoadMore, isLoading]
  );

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '200px',
      threshold: 0.1,
    };

    observerRef.current = new IntersectionObserver(handleObserver, options);

    const currentTarget = loadMoreRef.current;
    if (currentTarget) {
      observerRef.current.observe(currentTarget);
    }

    return () => {
      if (observerRef.current && currentTarget) {
        observerRef.current.unobserve(currentTarget);
      }
    };
  }, [handleObserver]);

  return loadMoreRef;
};

export default useInfiniteScroll;
