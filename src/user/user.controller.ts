/*
 * @Author: dingyanqiang
 * @Date: 2021-11-11 14:30:21
 * @LastEditors: dingyanqiang
 * @LastEditTime: 2021-11-16 18:54:41
 * @Description: file content
 */

import { Controller, Post, Get, Delete } from '../common/index';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    //构造函数的参数前添加了访问限定符private和readonly,这是一种叫做参数属性的特性
    //使用参数属性，允许我们将声明和赋值合并至一处
    constructor(private readonly userService: UserService) {}

    @Get('findUser')
    getUserServiceMethods(): string {
        let that = this;
        let userName = this.userService.getUserName();
        return userName;
    }
    @Get('findAll')
    findAll(): string {
        return 'this is findAll()';
    }
    @Get('findOne')
    findOne(): string {
        return 'this is findOne()';
    }
    @Post('create')
    create(): string {
        return 'this is post add data';
    }
    @Delete('delete')
    delete(): string {
        return 'delete is success';
    }
}
