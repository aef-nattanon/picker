import type { GenerateConfig } from '../../generate';
import type { Locale } from '../../interface';
export declare type YearHeaderProps<DateType> = {
    prefixCls: string;
    viewDate: DateType;
    generateConfig: GenerateConfig<DateType>;
    locale: Locale;
    onPrevDecades: () => void;
    onNextDecades: () => void;
};
declare function DecadeHeader<DateType>(props: YearHeaderProps<DateType>): JSX.Element;
export default DecadeHeader;
