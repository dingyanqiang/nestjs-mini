/*
 * @Author: dingyanqiang
 * @Date: 2021-11-11 14:31:01
 * @LastEditors: dingyanqiang
 * @LastEditTime: 2021-11-11 14:33:38
 * @Description: file content
 * 
 */

import { Injectable } from '../common/index';

@Injectable
export class UserService {
    userName: string = 'dingyanqiang';
    getUserName(): string {
        return this.userName;
    }
}
