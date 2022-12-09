import type { GenerateConfig } from '../../generate';
import type { Locale } from '../../interface';
export declare type YearHeaderProps<DateType> = {
    prefixCls: string;
    viewDate: DateType;
    value?: DateType | null;
    locale: Locale;
    generateConfig: GenerateConfig<DateType>;
    onPrevDecade: () => void;
    onNextDecade: () => void;
    onDecadeClick: () => void;
};
declare function YearHeader<DateType>(props: YearHeaderProps<DateType>): JSX.Element;
export default YearHeader;
