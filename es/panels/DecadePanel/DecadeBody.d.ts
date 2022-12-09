import type { GenerateConfig } from '../../generate';
import type { Locale } from '../../interface';
export declare const DECADE_COL_COUNT = 3;
export declare type YearBodyProps<DateType> = {
    prefixCls: string;
    generateConfig: GenerateConfig<DateType>;
    locale: Locale;
    viewDate: DateType;
    disabledDate?: (date: DateType) => boolean;
    onSelect: (value: DateType) => void;
};
declare function DecadeBody<DateType>(props: YearBodyProps<DateType>): JSX.Element;
export default DecadeBody;
