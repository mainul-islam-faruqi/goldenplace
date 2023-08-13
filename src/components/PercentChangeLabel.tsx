import { Text, TextProps } from '@/uikit';
// import { formatNumberToLocale } from "utils/format";

interface PercentChangeLabelProps extends TextProps {
  value: number;
}

const PercentChangeLabel = ({ value, ...props }: PercentChangeLabelProps) => {
  // const numberAsLocale = formatNumberToLocale(value);
  const numberAsLocale = value;
  const { textColor, prefix }: { textColor: string; prefix: string } = (() => {
    if (value > 0) {
      return { textColor: 'link-01', prefix: '+' };
    }

    if (value < 0) {
      return { textColor: 'text-error', prefix: '' };
    }

    return { textColor: 'text-03', prefix: '' };
  })();

  return (
    <Text textStyle="detail" color={textColor} {...props}>
      {`${prefix}${numberAsLocale}%`}
    </Text>
  );
};

export default PercentChangeLabel;
