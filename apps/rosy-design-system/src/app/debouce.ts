export function debounce<T extends (...args: any[]) => void>(
  cb: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timerId: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}
