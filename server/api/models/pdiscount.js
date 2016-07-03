/**
 * pdiscount.js
 *
 * @description :: 停车优惠信息
 *
 * Created by libinqi on 2016/7/3.
 */

module.exports = {
    autoCreatedAt: true,
    autoUpdatedAt: true,
    autoPK: true,
    attributes: {
        id: {type: 'integer', primaryKey: true, autoIncrement: true},//优惠Id
        caramt: {type: 'float',required:true},//停车优惠金额
        carnightamt: {type: 'float',required:true},//停车过夜费优惠金额
        housceamt: {type: 'float'},//客房优惠金额(实际使用在客房系统中配置)
        starttime: {type: 'string',required:true},//停车过夜开始时间
        endtime: {type: 'string',required:true},//停车过夜结束时间
        htime: {type: 'string',required:true},//客房结算时间(实际使用在客房系统中配置)
        mintime: {type: 'string'}//过夜费收取时长
    }
};
