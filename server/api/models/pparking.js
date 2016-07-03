/**
 * pparking.js
 *
 * @description :: 车位信息
 *
 * Created by libinqi on 2016/7/3.
 */

module.exports = {
    autoCreatedAt: true,
    autoUpdatedAt: true,
    autoPK: true,
    attributes: {
        id: {type: 'integer', primaryKey: true, autoIncrement: true},//车位Id
        parkingno: {type: 'string', unique: true,required:true},//车位编号
        parkingsize: {type: 'integer',required:true},//车位大小
        parkingposition: {type: 'integer',required:true},//车位位置
        parkingstatus: {type: 'string'},//车位状态
        parkingmgid: {type: 'integer'},//所属停车场
        remark: {type: 'string'}//备注
    }
};
