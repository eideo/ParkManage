Mock.mock('/api/parkingset',[
  {
  name : '开发工具',
  info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
  name : 'Server and Client integration',
  info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
  name : 'Smart Build System',
  info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
  name : 'Modular Structure',
  info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
  name : 'Optimized Build',
  info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
  name : 'Deployment Ready',
  info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  }
]);

Mock.mock('/api/carparkinglist',{
  sussce :"200",
  body:[{
    id : "1",
    name : '停车场一',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.',
    parkstate : "1"
  }, {
    id : "2",
    name : '停车场二',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.',
    parkstate : "1"
  }
]});

Mock.mock('/api/parkinglotlist',{
  sussce :"200",
  body:[{
  name : '开发工具',
  info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.',
  parkstate : "1"
  }, {
  name : 'Server and Client integration',
  info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.',
  parkstate : "1"
  }, {
  name : 'Smart Build System',
  info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html',
  parkstate : "2"
  },  {
  name : 'Modular Structure',
  info : 'Best practice client and server structures allow for more code reusability and maximum scalability',
  parkstate : "2"
  },  {
  name : 'Optimized Build',
  info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.',
  parkstate : "2"
  },{
  name : 'Deployment Ready',
  info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators',
  parkstate : "2"
  }
]});

Mock.mock('/api/parkingadd',{
  sussce :"ok1",
  data:[{
    name : '开发工具1',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }]
});

Mock.mock('/api/vehicletypelist',{
  code:"200",
  totalRecords:9,
  body:[{
    id : '1',
    cartypecode : 'JT56001',
    cartype : '平板',
    carload : '30',
    carlen : '9.6',
    remark : '',
    datasource : '1'
  }, {
    id : '2',
    cartypecode : 'JT56002',
    cartype : '半挂',
    carload : '60',
    carlen : '17.5',
    remark : '',
    datasource : '1'
  }, {
    id : '3',
    cartypecode : 'JT56003',
    cartype : '前四后四',
    carload : '30',
    carlen : '8.5',
    remark : '',
    datasource : '1'
  }
  // , {
  //   id : '4',
  //   cartypecode : 'JT56004',
  //   cartype : '前四后八',
  //   carload : '35',
  //   carlen : '10',
  //   remark : '',
  //   datasource : '1'
  // }, {
  //   id : '5',
  //   cartypecode : 'JT56005',
  //   cartype : '厢式货车',
  //   carload : '50',
  //   carlen : '12.5',
  //   remark : '',
  //   datasource : '1'
  // }
]});

Mock.mock('/api/vehicletypeadd',{
  code:"200",
});

Mock.mock('/api/vehicletypeedit',{
  code:"200",
});