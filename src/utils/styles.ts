export default function styles(...classNames: string[]) {
  return {
    className: classNames.filter(className => !!className).join(' ')
  };
}
