import * as React from 'react';

import { YEAR_DECADE_COUNT } from '.';
import PanelContext from '../../PanelContext';
import Header from '../Header';

import type { GenerateConfig } from '../../generate';
import type { Locale } from '../../interface';
export type YearHeaderProps<DateType> = {
  prefixCls: string;
  viewDate: DateType;
  value?: DateType | null;
  locale: Locale;
  generateConfig: GenerateConfig<DateType>;

  onPrevDecade: () => void;
  onNextDecade: () => void;
  onDecadeClick: () => void;
};

function YearHeader<DateType>(props: YearHeaderProps<DateType>) {
  const { prefixCls, generateConfig, viewDate, onPrevDecade, onNextDecade, onDecadeClick, locale } =
    props;
  const { hideHeader } = React.useContext(PanelContext);
  if (hideHeader) {
    return null;
  }

  const headerPrefixCls = `${prefixCls}-header`;

  const yearNumber = generateConfig.getYear(viewDate);
  const startYear = Math.floor(yearNumber / YEAR_DECADE_COUNT) * YEAR_DECADE_COUNT;
  const endYear = startYear + YEAR_DECADE_COUNT - 1;
  return (
    <Header
      {...props}
      prefixCls={headerPrefixCls}
      onSuperPrev={onPrevDecade}
      onSuperNext={onNextDecade}
    >
      <button type="button" onClick={onDecadeClick} className={`${prefixCls}-decade-btn`}>
        {locale.locale == 'th_TH' ? startYear + 543 : startYear}-
        {locale.locale == 'th_TH' ? endYear + 543 : endYear}
      </button>
    </Header>
  );
}

export default YearHeader;
