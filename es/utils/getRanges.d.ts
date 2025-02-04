import type { Components, Locale, RangeList } from '../interface';
export declare type RangesProps = {
    prefixCls: string;
    rangeList?: RangeList;
    components?: Components;
    needConfirmButton: boolean;
    onNow?: null | (() => void) | false;
    onOk?: null | (() => void) | false;
    okDisabled?: boolean;
    showNow?: boolean;
    locale: Locale;
};
export default function getRanges({ prefixCls, components, needConfirmButton, onNow, onOk, okDisabled, showNow, locale, }: RangesProps): JSX.Element;
