/**
 * pcarentry.js
 *
 * @description :: 停车记录信息
 *
 * Created by libinqi on 2016/7/3.
 */

module.exports = {
    autoCreatedAt: true,
    autoUpdatedAt: true,
    autoPK: true,
    attributes: {
        id: {type: 'integer', primaryKey: true, autoIncrement: true},//停车记录Id
        vehiclenumber: {type: 'string',required:true},//车辆牌照
        chargeid: {type: 'string',required:true},//车辆类型Id
        cartype: {type: 'string',required:true},//车辆类型名称
        parking_id: {type: 'string',required:true},//车位表Id
        entrytime: {type: 'datetime'},//入场时间
        outtime: {type: 'datetime'},//出场时间
        receivable: {type: 'float'},//应收费用
        freeamt: {type: 'float'},//免费金额
        realamt: {type: 'float'},//实收费用
        parkestate: {type: 'string'},//停车状态(1:已进场2已出场)
        card_id: {type: 'string'},//停车卡号
        contactname: {type: 'string'},//车主姓名
        telephonenumber: {type: 'string'},//联系电话
        userid: {type: 'string'}//用户Id（操作人员Id,用于记录和查询）

    }
};

