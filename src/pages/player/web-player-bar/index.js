import React, { memo, useState, useEffect, useRef, useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Slider } from 'antd';

import { getCurrentSongAction } from '../store/actionCreators';

import {
  formatImgSize,
  formatDate,
  getSongPlay
} from '@/utils/format';

import {
  WebPlayerBarWrapper,
  Control,
  PlayInfo,
  Operator
} from './style';

export default memo(function WebPlayerBar() {
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  const dispatch = useDispatch();
  const { currentSong } = useSelector(state => ({
    currentSong: state.getIn(['player', 'currentSong'])
  }), shallowEqual)

  const audioRef = useRef();
  useEffect(() => {
    dispatch(getCurrentSongAction(1861640530))
  }, [dispatch])

  const picUrl = currentSong.al && currentSong.al.picUrl;
  const singer = (currentSong.ar && currentSong.ar[0].name) || '未知歌手';
  const allTime = currentSong.dt || 0;

  const playMusic = () => {
    audioRef.current.src = getSongPlay(currentSong.id);
    audioRef.current.play();
  }

  const timeUpdate = (e) => {
    if (!isChanging) {
      setCurrentTime(e.target.currentTime * 1000);
      setProgress((currentTime / allTime) * 100);
    }
  }

  const sliderChange = useCallback((value) => {
    setProgress(value);
    setCurrentTime(value / 100 * allTime);
    setIsChanging(true);
  }, [allTime])

  const sliderAfterChange = useCallback((value) => {
    audioRef.current.currentTime = value / 100 * allTime / 1000;
    setIsChanging(false);
  }, [allTime])

  return (
    <WebPlayerBarWrapper className="playbar_sprite">
      <div className="content wrap-v2">
        <Control>
          <div className="prev playbar_sprite" />
          <div className="play playbar_sprite" onClick={e => playMusic()} />
          <div className="next playbar_sprite" />
        </Control>

        <PlayInfo>
          <a href="#/" className="image" >
            <img src={formatImgSize(picUrl, 34)} alt="" />
          </a>
          <div className="info">
            <div className="song">
              <span>{currentSong.name || '未知歌曲'}</span>
              <span className="singer-name">{singer}</span>
              <i className="link playbar_sprite" />
              <a href="#/"> </a>
            </div>
            <div className="progress">
              <Slider tooltipVisible={false} value={progress}
                onChange={value => sliderChange(value)}
                onAfterChange={value => sliderAfterChange(value)} />
              <span className="time">
                <span className="now-time">{formatDate(Math.floor(currentTime), 'mm:ss')}</span>
                <span className="divider">/</span>
                <span className="all-time">{formatDate(allTime, 'mm:ss')}</span>
              </span>
            </div>
          </div>
        </PlayInfo>

        <Operator>
          <div className="left">
            <button className="btn lyric playbar_new"></button>
            <button className="btn favor playbar_sprite"></button>
            <button className="btn share playbar_sprite"></button>
          </div>
          <div className="right" >
            <button className="btn volume playbar_sprite"></button>
            <button className="btn loop playbar_sprite"></button>
            <button className="btn playlist playbar_sprite"></button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={e => timeUpdate(e)} />
    </WebPlayerBarWrapper>
  )
})
