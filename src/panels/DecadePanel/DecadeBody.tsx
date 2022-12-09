import * as React from 'react';

import { DECADE_DISTANCE_COUNT, DECADE_UNIT_DIFF } from '.';
import PanelBody from '../PanelBody';

import type { GenerateConfig } from '../../generate';
import type { Locale } from '../../interface';
export const DECADE_COL_COUNT = 3;
const DECADE_ROW_COUNT = 4;

export type YearBodyProps<DateType> = {
  prefixCls: string;
  generateConfig: GenerateConfig<DateType>;
  locale: Locale;
  viewDate: DateType;
  disabledDate?: (date: DateType) => boolean;
  onSelect: (value: DateType) => void;
};

function DecadeBody<DateType>(props: YearBodyProps<DateType>) {
  const DECADE_UNIT_DIFF_DES = DECADE_UNIT_DIFF - 1;
  const { locale, prefixCls, viewDate, generateConfig } = props;

  const cellPrefixCls = `${prefixCls}-cell`;

  const yearNumber = generateConfig.getYear(viewDate);
  const decadeYearNumber = Math.floor(yearNumber / DECADE_UNIT_DIFF) * DECADE_UNIT_DIFF;

  const startDecadeYear = Math.floor(yearNumber / DECADE_DISTANCE_COUNT) * DECADE_DISTANCE_COUNT;
  const endDecadeYear = startDecadeYear + DECADE_DISTANCE_COUNT - 1;

  const baseDecadeYear = generateConfig.setYear(
    viewDate,
    startDecadeYear -
      Math.ceil(
        (DECADE_COL_COUNT * DECADE_ROW_COUNT * DECADE_UNIT_DIFF - DECADE_DISTANCE_COUNT) / 2,
      ),
  );

  const getCellClassName = (date: DateType) => {
    const startDecadeNumber = generateConfig.getYear(date);
    const endDecadeNumber = startDecadeNumber + DECADE_UNIT_DIFF_DES;

    return {
      [`${cellPrefixCls}-in-view`]:
        startDecadeYear <= startDecadeNumber && endDecadeNumber <= endDecadeYear,
      [`${cellPrefixCls}-selected`]: startDecadeNumber === decadeYearNumber,
    };
  };

  return (
    <PanelBody
      {...props}
      rowNum={DECADE_ROW_COUNT}
      colNum={DECADE_COL_COUNT}
      baseDate={baseDecadeYear}
      getCellText={(date) => {
        const startDecadeNumber = generateConfig.getYear(date);
        const newDate = locale.locale == 'th_TH' ? startDecadeNumber + 543 : startDecadeNumber;

        return `${newDate}-${newDate + DECADE_UNIT_DIFF_DES}`;
      }}
      getCellClassName={getCellClassName}
      getCellDate={(date, offset) => generateConfig.addYear(date, offset * DECADE_UNIT_DIFF)}
    />
  );
}

export default DecadeBody;
