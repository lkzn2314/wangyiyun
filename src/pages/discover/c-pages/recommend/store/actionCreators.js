import * as actionTypes from './constants';

import {
  getBanners,
  getHotRecommends
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
      console.log(res);
      dispatch(changeHotRecommendsAction(res))
    })
  }
}