/**
 * pcharges.js
 *
 * @description :: 停车收费标准信息
 *
 * Created by libinqi on 2016/7/3.
 */

import {BaseModel} from './BaseModels/BaseModel';

export default class extends BaseModel {
  constructor() {
    super();
  }

  static tableName = 'pcharges';
  static attributes = {
        id: {type: 'integer', primaryKey: true, autoIncrement: true},//收费标准Id
        cartypecode: {type: 'string',required:true},//车辆类型代码
        cartypename: {type: 'string',required:true},//车辆类型名称
        parkdate1: {type: 'float',required:true},//时间区间
        price1: {type: 'float',required:true},//单价
        remark: {type: 'string'}//备注
    }
};
