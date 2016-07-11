// Mock.mock('/api/stallList',[
//   {
//   name : '开发工具',
//   info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
//   }, {
//   name : 'Server and Client integration',
//   info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
//   }, {
//   name : 'Smart Build System',
//   info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
//   },  {
//   name : 'Modular Structure',
//   info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
//   },  {
//   name : 'Optimized Build',
//   info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
//   },{
//   name : 'Deployment Ready',
//   info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
//   }
// ]);
// Mock.mock('http://192.168.2.102:85/zeus/ws/parking/pcarentry/getlist',[
// {
//     "code": "200",
//     "msg": "操作成功",
//     "body": {
//         "data": [
//             {
//                 "id": "085ac1b244554c6bb9ed8119e5fd636c",
//                 "contactname": "邓七凡",
//                 "vehiclenumber": "湘A99999",
//                 "telephonenumber": "15116181521",
//                 "chargeid": "12021",
//                 "cartype": "前四后八",
//                 "parking_id": null,
//                 "entrytimestr": "2015-02-05",
//                 "entrytime": "2015-02-05 17:20:45",
//                 "outtimestr": '2015-02-06',
//                 "outtime": '2015-02-06 17:20:45',
//                 "receivable": 0,
//                 "freeamt": 0,
//                 "realamt": 0,
//                 "parkestate": "0",
//                 "card_id": null,
//                 "create_by": "0",
//                 "create_name": "jt56",
//                 "create_date": "2015-02-05 17:20:45",
//                 "update_by": "0",
//                 "update_name": "jt56",
//                 "update_date": "2015-05-28 09:20:46",
//                 "delflag": null,
//                 "del_date": null,
//                 "distributionid": "000044f3055d479fa9fc4d80ee3c9288",
//                 "vehicleid": null,
//                 "pcode": null,
//                 "datasource": null
//             },
//               {
//                 "id": "085ac1b244554c6bb9ed8119e5fd636c",
//                 "contactname": "邓七就",
//                 "vehiclenumber": "湘A99999",
//                 "telephonenumber": "15116181521",
//                 "chargeid": "12021",
//                 "cartype": "前四后八",
//                 "parking_id": null,
//                 "entrytimestr": "2015-02-05",
//                 "entrytime": "2015-02-05 17:20:45",
//                 "outtimestr": null,
//                 "outtime": null,
//                 "receivable": 0,
//                 "freeamt": 0,
//                 "realamt": 0,
//                 "parkestate": "1",
//                 "card_id": null,
//                 "create_by": "0",
//                 "create_name": "jt56",
//                 "create_date": "2015-02-05 17:20:45",
//                 "update_by": "0",
//                 "update_name": "jt56",
//                 "update_date": "2015-05-28 09:20:46",
//                 "delflag": null,
//                 "del_date": null,
//                 "distributionid": "000044f3055d479fa9fc4d80ee3c9288",
//                 "vehicleid": null,
//                 "pcode": null,
//                 "datasource": null
//             },
//               {
//                 "id": "085ac1b244554c6bb9ed8119e5fd636c",
//                 "contactname": "邓七吧",
//                 "vehiclenumber": "湘A99999",
//                 "telephonenumber": "15116181521",
//                 "chargeid": "12021",
//                 "cartype": "前四后八",
//                 "parking_id": null,
//                 "entrytimestr": "2015-02-05",
//                 "entrytime": "2015-02-05 17:20:45",
//                 "outtimestr": null,
//                 "outtime": null,
//                 "receivable": 0,
//                 "freeamt": 0,
//                 "realamt": 0,
//                 "parkestate": "1",
//                 "card_id": null,
//                 "create_by": "0",
//                 "create_name": "jt56",
//                 "create_date": "2015-02-05 17:20:45",
//                 "update_by": "0",
//                 "update_name": "jt56",
//                 "update_date": "2015-05-28 09:20:46",
//                 "delflag": null,
//                 "del_date": null,
//                 "distributionid": "000044f3055d479fa9fc4d80ee3c9288",
//                 "vehicleid": null,
//                 "pcode": null,
//                 "datasource": null
//             }
//         ],
//         "totalPage": 1,
//         "currpage": 1,
//         "totalRecords": 3
//     }
// }

//   ]);

// Mock.mock('http://192.168.2.102:85/zeus/ws/parking/precord/atwork',[
//   {
// "code": "200",
// "msg": "操作成功",
// "body":null

// }

// ]);
// Mock.mock('http://192.168.2.102:85/zeus/ws/parking/precord/offduty',[
// {
//     "code": "200",
//     "msg": "操作成功",
//     "body": {
//         "id": "YC56201505281121440001",
//         "userid": "0",
//         "username": "jt56",
//         "startdate": "2015-03-12 08:30:00",
//         "enddate": "2015-03-13 08:30:00",
//         "innum": 0,
//         "outnum": 0,
//         "amt": 0,
//         "state": "2",
//         "datasource": null
//     }
// }
// ]);

// Mock.mock('http://192.168.2.102:85/zeus/ws/parking/precord/getRecordInfo',[
// {
//     "code": "000041",
//     "msg": "查询成功",
//     "body": {
//         "id": "08a22815c98e447d9038fb8cf83992a1",
//         "userid": "90c53581-8fec-45a6-bdea-f884c8211db5",
//         "username": "admin",
//         "startdate": "2015-02-03 15:56:47",
//         "enddate": "2015-02-04 13:55:13",
//         "innum": 3,
//         "outnum": 3,
//         "amt": 122,
//         "state": "1"
//     }
// }
// ]);

// Mock.mock('http://192.168.2.102:85/zeus/ws/parking/parkio/carentrylist',[
// {
//     "code": "200",
//     "msg": "操作成功",
//     "body": {
//         "data": [
//             {
//                 "id": "085ac1b244554c6bb9ed8119e5fd636c",
//                 "contactname": "王二麻子",
//                 "vehiclenumber": "湘A99999",
//                 "telephonenumber": "15116181521",
//                 "chargeid": "12021",
//                 "cartype": "前四后八",
//                 "parking_id": null,
//                 "entrytimestr": "2015-02-05",
//                 "entrytime": "2015-02-05 17:20:45",
//                 "outtimestr": '2015-02-06',
//                 "outtime": '2015-02-06 17:20:45',
//                 "receivable": 0,
//                 "freeamt": 0,
//                 "realamt": 0,
//                 "parkestate": "0",
//                 "card_id": null,
//                 "create_by": "0",
//                 "create_name": "jt56",
//                 "create_date": "2015-02-05 17:20:45",
//                 "update_by": "0",
//                 "update_name": "jt56",
//                 "update_date": "2015-05-28 09:20:46",
//                 "delflag": null,
//                 "del_date": null,
//                 "distributionid": "000044f3055d479fa9fc4d80ee3c9288",
//                 "vehicleid": null,
//                 "pcode": null,
//                 "datasource": null
//             },
//               {
//                 "id": "085ac1b244554c6bb9ed8119e5fd636c",
//                 "contactname": "李四就",
//                 "vehiclenumber": "湘A99999",
//                 "telephonenumber": "15116181521",
//                 "chargeid": "12021",
//                 "cartype": "前四后八",
//                 "parking_id": null,
//                 "entrytimestr": "2015-02-05",
//                 "entrytime": "2015-02-05 17:20:45",
//                 "outtimestr": null,
//                 "outtime": null,
//                 "receivable": 0,
//                 "freeamt": 0,
//                 "realamt": 0,
//                 "parkestate": "1",
//                 "card_id": null,
//                 "create_by": "0",
//                 "create_name": "jt56",
//                 "create_date": "2015-02-05 17:20:45",
//                 "update_by": "0",
//                 "update_name": "jt56",
//                 "update_date": "2015-05-28 09:20:46",
//                 "delflag": null,
//                 "del_date": null,
//                 "distributionid": "000044f3055d479fa9fc4d80ee3c9288",
//                 "vehicleid": null,
//                 "pcode": null,
//                 "datasource": null
//             },
//               {
//                 "id": "085ac1b244554c6bb9ed8119e5fd636c",
//                 "contactname": "张三吧",
//                 "vehiclenumber": "湘A99999",
//                 "telephonenumber": "15116181521",
//                 "chargeid": "12021",
//                 "cartype": "前四后八",
//                 "parking_id": null,
//                 "entrytimestr": "2015-02-05",
//                 "entrytime": "2015-02-05 17:20:45",
//                 "outtimestr": null,
//                 "outtime": null,
//                 "receivable": 0,
//                 "freeamt": 0,
//                 "realamt": 0,
//                 "parkestate": "1",
//                 "card_id": null,
//                 "create_by": "0",
//                 "create_name": "jt56",
//                 "create_date": "2015-02-05 17:20:45",
//                 "update_by": "0",
//                 "update_name": "jt56",
//                 "update_date": "2015-05-28 09:20:46",
//                 "delflag": null,
//                 "del_date": null,
//                 "distributionid": "000044f3055d479fa9fc4d80ee3c9288",
//                 "vehicleid": null,
//                 "pcode": null,
//                 "datasource": null
//             }
//         ],
//         "totalPage": 1,
//         "currpage": 1,
//         "totalRecords": 3
//     }
// }

//   ]);