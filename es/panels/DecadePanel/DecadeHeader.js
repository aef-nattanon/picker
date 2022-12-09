import _extends from "@babel/runtime/helpers/esm/extends";
import * as React from 'react';
import { DECADE_DISTANCE_COUNT } from '.';
import PanelContext from "../../PanelContext";
import Header from "../Header";

function DecadeHeader(props) {
  var locale = props.locale,
      prefixCls = props.prefixCls,
      generateConfig = props.generateConfig,
      viewDate = props.viewDate,
      onPrevDecades = props.onPrevDecades,
      onNextDecades = props.onNextDecades;

  var _React$useContext = React.useContext(PanelContext),
      hideHeader = _React$useContext.hideHeader;

  if (hideHeader) {
    return null;
  }

  var headerPrefixCls = "".concat(prefixCls, "-header");
  var yearNumber = generateConfig.getYear(viewDate);
  var startYear = Math.floor(yearNumber / DECADE_DISTANCE_COUNT) * DECADE_DISTANCE_COUNT;
  var endYear = startYear + DECADE_DISTANCE_COUNT - 1;
  return /*#__PURE__*/React.createElement(Header, _extends({}, props, {
    prefixCls: headerPrefixCls,
    onSuperPrev: onPrevDecades,
    onSuperNext: onNextDecades
  }), locale.locale == 'th_TH' ? startYear + 543 : startYear, "-", locale.locale == 'th_TH' ? endYear + 543 : endYear);
}

export default DecadeHeader;