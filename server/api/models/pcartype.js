/**
 * pcartype.js
 *
 * @description :: 车辆类型信息
 *
 * Created by libinqi on 2016/7/3.
 */

module.exports = {
    autoCreatedAt: true,
    autoUpdatedAt: true,
    autoPK: true,
    attributes: {
        id: {type: 'integer', primaryKey: true, autoIncrement: true},//类型Id
        cartypecode: {type: 'string', unique: true,required:true},//类型编码
        cartype: {type: 'string', unique: true,required:true},//车辆类型
        carload: {type: 'float'},//载重
        carlen: {type: 'float'},//车长
        remark: {type: 'string'}//备注
    }
};