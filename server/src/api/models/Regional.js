'use strict';
/**
 * Regional.js
 * @description : 区域表
 */
import {BaseModel} from './BaseModels/BaseModel';

export default class extends BaseModel {
  constructor() {
    super();
  }

  static tableName = 'Regional';
  static attributes = {
    id: {               //主键
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },
    parentId: {           //父节点Id
      type: 'integer'
    },
    level: {                 //层
      type: 'integer'
    },
    levelSeqNo: {       //层序号
      type: 'integer'
    },
    isLeaf: {               //是否叶子节点0:否 1：是
      type: 'boolean',
      defaultsTo: true
    },
    levelTree: {          //隶属关系树
      type: 'string',
      size: 1024
    },
    code: {             //代码
      type: 'string',
      size: 30,
      required: true
    },
    name: {             //名称
      type: 'string',
      size: 50,
      unique: false,
      required: true
    },
    isUse: {             //启用状态 0 -- 禁用状态，1 -- 激活状态
      type: 'boolean',
      defaultsTo: true
    },
    memo: {             //备注
      type: 'string',
      size: 512
    },
    isDelete: {         //是否删除
      type: 'boolean',
      defaultsTo: false
    }
  }
};
