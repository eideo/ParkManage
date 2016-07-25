/**
 * pcartype.js
 *
 * @description :: 车辆类型信息
 *
 * Created by libinqi on 2016/7/3.
 */

import {BaseModel} from './BaseModels/BaseModel';

export default class extends BaseModel {
  constructor() {
    super();
  }

  static tableName = 'pcartype';
  static attributes = {
        id: {type: 'integer', primaryKey: true, autoIncrement: true},//类型Id
        cartypecode: {type: 'string', unique: true,required:true},//类型编码
        cartype: {type: 'string', unique: true,required:true},//车辆类型
        remark: {type: 'string'}//备注
    }
};
