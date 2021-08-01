import * as actionTypes from './constants';

import {
  getBanners,
  getHotRecommends,
  getNewDiscs,
  getRankings
} from '@/network/discover';

const changeBannersAction = res => ({
  type: actionTypes.CHANGE_BANNERS,
  banners: res.banners
})

export const getBannersAction = () => {
  return dispatch => {
    getBanners().then(res => {
      dispatch(changeBannersAction(res))
    })
  }
}

const changeHotRecommendsAction = res => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result
})

export const getHotRecommendsAction = limit => {
  return dispatch => {
    getHotRecommends(limit).then(res => {
      // console.log(res);
      dispatch(changeHotRecommendsAction(res))
    })
  }
}

const changeNewDiscsAction = res => ({
  type: actionTypes.CHANGE_NEW_DISC,
  newDiscs: res.albums
})

export const getNewDiscsAction = limit => {
  return dispatch => {
    getNewDiscs(limit).then(res => {
      // console.log(res);
      dispatch(changeNewDiscsAction(res))
    })
  }
}

const changeUpRankingAction = res => ({
  type: actionTypes.CHANGE_UP_RANKING,
  upRankings: res.playlist
})
const changeNewRankingAction = res => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  newRankings: res.playlist
})
const changeOriginRankingAction = res => ({
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  originRankings: res.playlist
})

export const getRankingAction = (idx) => {
  return dispatch => {
    getRankings(idx).then(res => {
      // console.log(res);
      switch (idx) {
        case 0:
          dispatch(changeNewRankingAction(res));
          break;
        case 2:
          dispatch(changeOriginRankingAction(res));
          break;
        case 3:
          dispatch(changeUpRankingAction(res));
          break;
        default:
      }
    })
  }
}