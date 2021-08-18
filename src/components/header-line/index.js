import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import { HeaderWrapper } from './style';

export default memo(function HeaderLine(props) {
  const { title = 'Title', tabs = [], to } = props;

  return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        <div className="title">{title}</div>
        <div className="keyword">
          {
            tabs.map(item => {
              return (
                <div className="item" key={item}>
                  {item}
                  <span className="divider">|</span>
                </div>
              )
            })
          }
        </div>
      </div>
      <Link className="right" to={to}>
        更多
        <i className="icon sprite_02" />
      </Link>
    </HeaderWrapper>
  )
})