import styled from 'styled-components';
import { Pagination } from 'antd';

export const PlaylistWrapper = styled.div`
    position: relative;
    padding: 40px 40px 80px 40px;
    background-color: #fff;

    .head {
        display: flex;
        justify-content: space-between;
        height: 42px;
        line-height: 42px;
        border-bottom: 2px solid #c20c0c;

        .left {
            span:first-child {
                font-size: 24px;
            }

            .category {
                position: relative;
                bottom: 5px;
                display: inline-block;
                width: 91px;
                height: 31px;
                line-height: 31px;
                margin-left: 12px;
                background-color: #f9f9f9;
                color: #0c73c2;
                text-align: center;
                border: 1px solid #c4c4c4;

                &:hover {
                    cursor: pointer;
                    background-color: #fff;
                }

                i {
                    display: inline-block;
                    width: 8px;
                    height: 5px;
                    margin-left: 5px;
                    background-position: -70px -543px;
                }
            }
        }

        button {
            width: 46px;
            height: 29px;
            line-height: 29px;
            text-align: center;
            color: #fff;
            background-color: #a80909;

            &:hover {
                cursor: pointer;
                text-decoration: underline;
            }
        }
    }
`

export const PlaylistBodyWrapper = styled.div`
    position: relative;
    padding-bottom: 30px;

    .all-playlist {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 10px;

        .item {
            width: 140px;
            height: 188px;
            margin: 0 0 30px 30px;
        }
        .item:nth-child(5n+1) {
            margin-left: 0;
        }
    }
`

export const PaginationWrapper = styled(Pagination)`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 500px;
    margin-top: 20px;
    color: #333;

    .ant-pagination-item {
        height: 24px;
        background-color: #fff;
        line-height: 24px;

        &:hover {
            border-color: #666;

            a{
                color: #333;
            }
        }
    }

    // 左右按钮
    .ant-pagination-item-link {
        position: relative;
        top: 4px;
        width: 57px;
        height: 24px;
        background: url(${require('@/assets/img/sprite_button2.png')}) -75px -560px;

        &:hover {
            border-color: #666;

            .anticon {
                color: #333;
            }
        }
    }

    .ant-pagination-item-active {
        border-color: #A2161B;
        background: url(${require('@/assets/img/sprite_button2.png')}) 0 0;

        a {
            color: #fff;
        }
    }

`