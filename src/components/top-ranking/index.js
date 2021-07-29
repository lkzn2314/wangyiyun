import React, { memo } from 'react';
import { useDispatch } from 'react-redux';

import { getCurrentSongAction } from '@/pages/player/store/actionCreators';

import { formatImgSize } from '@/utils/format';
import { TopRankingWrapper } from './style';

export default memo(function TopRanking(props) {
  const { info } = props;

  const dispatch = useDispatch();

  const playMusic = item => {
    dispatch(getCurrentSongAction(item.id));
  }

  return (
    <TopRankingWrapper>
      <div className="header">
        <div className="image">
          <img src={formatImgSize(info.coverImgUrl)} alt="" />
          <a href="/todo" className="image_cover"> </a>
        </div>
        <div className="info">
          <a href="/todo">{info.name}</a>
          <div>
            <button className="btn play sprite_02"></button>
            <button className="btn favor sprite_02"></button>
          </div>
        </div>
      </div>

      <div className="list">
        {
          info.tracks && info.tracks.slice(0, 10).map((item, index) => {
            return (
              <div key={item.id} className="list-item">
                <div className="rank">{index + 1}</div>
                <div className="info">
                  <span className="name text-nowrap">{item.name}</span>
                  <div className="operate">
                    <button className="btn sprite_02 play" onClick={() => { playMusic(item) }} />
                    <button className="btn sprite_icon2 addto" />
                    <button className="btn sprite_02 favor" />
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>

      <div className="footer">
        <a href="/todo">查看全部 &gt;</a>
      </div>
    </TopRankingWrapper>
  )
})