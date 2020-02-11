export default function styles(
  ...classNames: (string | undefined | null | false)[]
) {
  return {
    className: classNames.filter(className => !!className).join(' ')
  };
}
