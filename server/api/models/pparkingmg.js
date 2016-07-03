/**
 * pparkingmg.js
 *
 * @description :: 停车场信息
 *
 * Created by libinqi on 2016/7/3.
 */

module.exports = {
    autoCreatedAt: true,
    autoUpdatedAt: true,
    autoPK: true,
    attributes: {
        id: {type: 'integer', primaryKey: true, autoIncrement: true},//停车场Id
        parkname: {type: 'string', unique: true,required:true},//停车场名称
        realnum: {type: 'integer',required:true},//实际停车位数
        mastnum: {type: 'integer',required:true},//最大车位数
        parkingmgcode: {type: 'string'},//停车场编码
        parkingsort: {type: 'integer'},//停车场顺序
        remark: {type: 'string'}//备注
    }
};