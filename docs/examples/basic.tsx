import '../../assets/index.less';

import dayjs from 'dayjs';
import React from 'react';

import momentGenerateConfig from '../../src/generate/dayjs';
import enUS from '../../src/locale/en_US';
import thTH from '../../src/locale/th_TH';
import Picker from '../../src/Picker';

import type { Dayjs } from 'dayjs';
// const defaultValue = moment('2019-09-03 05:02:03');
const defaultValue = dayjs('2019-11-28 01:02:03');

export default () => {
  const [value, setValue] = React.useState<Dayjs | null>(defaultValue);
  const weekRef = React.useRef<Picker<Day>>(null);

  const onSelect = (newValue: Dayjs) => {
    console.log('Select:', newValue);
  };

  const onChange = (newValue: Dayjs | null, formatString?: string) => {
    console.log('Change:', newValue, formatString);
    setValue(newValue);
  };

  const sharedProps = {
    generateConfig: momentGenerateConfig,
    value,
    onSelect,
    onChange,
    presets: [
      {
        label: 'Hello World!',
        value: dayjs(),
      },
    ],
  };

  const keyDown = (e, preventDefault) => {
    if (e.keyCode === 13) preventDefault();
  };

  return (
    <div>
      <h1>Value: {value ? value.format('YYYY-MM-DD HH:mm:ss') : 'null'}</h1>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ margin: '0 8px' }}>
          <h3>Basic</h3>
          <Picker<Dayjs> {...sharedProps} locale={thTH} />
          <Picker<Dayjs> {...sharedProps} locale={enUS} />
        </div>
        <div style={{ margin: '0 8px' }}>
          <h3>Uncontrolled</h3>
          <Picker<Dayjs>
            generateConfig={momentGenerateConfig}
            locale={thTH}
            allowClear
            showToday
            renderExtraFooter={() => 'extra'}
          />
        </div>
        <div style={{ margin: '0 8px' }}>
          <h3>Datetime</h3>
          <Picker<Dayjs>
            {...sharedProps}
            locale={thTH}
            defaultPickerValue={defaultValue.clone().subtract(1, 'month')}
            showTime={{
              showSecond: false,
              defaultValue: dayjs('11:28:39', 'HH:mm:ss'),
            }}
            showToday
            disabledTime={(date) => {
              if (date && date.isSame(defaultValue, 'date')) {
                return {
                  disabledHours: () => [1, 3, 5, 7, 9, 11],
                };
              }
              return {};
            }}
          />
        </div>
        <div style={{ margin: '0 8px' }}>
          <h3>Uncontrolled Datetime</h3>
          <Picker<Dayjs>
            format="YYYY-MM-DD HH:mm:ss"
            generateConfig={momentGenerateConfig}
            locale={enUS}
            showTime
          />
        </div>
        <div style={{ margin: '0 8px' }}>
          <h3>Week</h3>
          <Picker<Dayjs>
            {...sharedProps}
            locale={thTH}
            allowClear
            picker="week"
            renderExtraFooter={() => 'I am footer!!!'}
            ref={weekRef}
          />

          <button
            type="button"
            onClick={() => {
              if (weekRef.current) {
                weekRef.current.focus();
              }
            }}
          >
            Focus
          </button>
        </div>
        <div style={{ margin: '0 8px' }}>
          <h3>Week</h3>
          <Picker<Dayjs> generateConfig={momentGenerateConfig} locale={enUS} picker="week" />
        </div>
        <div style={{ margin: '0 8px' }}>
          <h3>Quarter</h3>
          <Picker<Dayjs> generateConfig={momentGenerateConfig} locale={enUS} picker="quarter" />
        </div>
        <div style={{ margin: '0 8px' }}>
          <h3>Time</h3>
          <Picker<Dayjs> {...sharedProps} locale={thTH} picker="time" />
        </div>
        <div style={{ margin: '0 8px' }}>
          <h3>Time 12</h3>
          <Picker<Dayjs> {...sharedProps} locale={thTH} picker="time" use12Hours />
        </div>
        <div style={{ margin: '0 8px' }}>
          <h3>Year</h3>
          <Picker<Dayjs> {...sharedProps} locale={thTH} picker="year" />
        </div>
        <div style={{ margin: '0 8px' }}>
          <h3>Keyboard navigation (Tab key) disabled</h3>
          <Picker<Dayjs> {...sharedProps} locale={enUS} tabIndex={-1} />
        </div>
        <div style={{ margin: '0 8px' }}>
          <h3>Keyboard event with prevent default behaviors</h3>
          <Picker<Dayjs> {...sharedProps} locale={enUS} onKeyDown={keyDown} />
        </div>
      </div>
    </div>
  );
};
