import request from "./request";

export function getSongDetail(ids) {
    return request({
        url: '/song/detail',
        params: {
            ids
        }
    })
}

export function getLyric(id) {
    return request({
        url: '/lyric',
        params: {
            id
        }
    })
}

export function getPlaylistDetail(id) {
    return request({
        url: '/playlist/detail',
        params: {
            id
        }
    })
}

export function getDiscDetail(id) {
    return request({
        url: '/album',
        params: {
            id
        }
    })
}