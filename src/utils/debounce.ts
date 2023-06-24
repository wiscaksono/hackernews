export const debounce = <T extends (...args: any[]) => void>(
  func: T,
  wait: number,
  immediate: boolean,
  ...args: Parameters<T>
): (() => void) => {
  let timeout: number | null;

  return () => {
    const context = this;
    const callNow = immediate && !timeout;
    const later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    clearTimeout(timeout as number);
    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
};
