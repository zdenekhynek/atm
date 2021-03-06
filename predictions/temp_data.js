//  astrologer
const peopleAloneController = require('./controllers/people_alone');
const jupiterController = require('./controllers/jupiter');
const marsController = require('./controllers/mars');

//  banker
const makeMoneyController = require('./controllers/make_money');
const worksHomeController = require('./controllers/works_home');
const giraffeController = require('./controllers/giraffe');

//  crime
const ratPoisonController = require('./controllers/rat_poison');
const crimesController = require('./controllers/crimes');
const stolenPhonesController = require('./controllers/stolen_phones');

//  doctor
const euPassportsController = require('./controllers/eu_passports');
const ageOver60Controller = require('./controllers/age_over_60');
const populationController = require('./controllers/population');

// const heartDiseaseController = require('./controllers/heart_disease');
// const fishingIndustryController = require('./controllers/fishing_industry');
// const seekingWorkController = require('./controllers/seeking_work');
// const worksPartTimeController = require('./controllers/works_part_time');

exports.predictions = {
  //  astrologer
  'people-alone': {
    robotId: 'astrologer',
    endpoints: 'people-alone',
    templatePath: 'predictions/views/predictions/people_alone.hbs',
    controller: peopleAloneController.controller
  },
  'jupiter': {
    robotId: 'astrologer',
    endpoints: 'weekly-income,heart-disease,commute-over-20',
    templatePath: 'predictions/views/predictions/jupiter.hbs',
    controller: jupiterController.controller
  },
  'mars': {
    robotId: 'astrologer',
    endpoints: 'area-road,work-admin,population',
    templatePath: 'predictions/views/predictions/mars.hbs',
    controller: marsController.controller
  },

  //  banker
  'make-money': {
    robotId: 'banker',
    endpoints: 'life-expectancy',
    templatePath: 'predictions/views/predictions/make_money.hbs',
    controller: makeMoneyController.controller
  },
  'works-home': {
    robotId: 'banker',
    endpoints: 'works-home',
    templatePath: 'predictions/views/predictions/works_home.hbs',
    controller: worksHomeController.controller
  },
  'giraffe': {
    robotId: 'banker',
    endpoints: 'life-expectancy',
    templatePath: 'predictions/views/predictions/giraffe.hbs',
    controller: giraffeController.controller
  },

  //  crime
  'rat-poison': {
    robotId: 'crime',
    endpoints: 'yearly-income',
    templatePath: 'predictions/views/predictions/rat_poison.hbs',
    controller: ratPoisonController.controller
  },
  'crimes': {
    robotId: 'crime',
    endpoints: 'crimes',
    templatePath: 'predictions/views/predictions/crimes.hbs',
    controller: crimesController.controller
  },
  'stolen-phones': {
    robotId: 'crime',
    endpoints: 'life-expectancy',
    templatePath: 'predictions/views/predictions/stolen_phones.hbs',
    controller: stolenPhonesController.controller
  },

  //  doctor
  'eu-passports': {
    robotId: 'doctor',
    endpoints: 'eu-passports',
    templatePath: 'predictions/views/predictions/eu_passports.hbs',
    controller: euPassportsController.controller
  },
  'age-over-60': {
    robotId: 'doctor',
    endpoints: 'age-over-60',
    templatePath: 'predictions/views/predictions/age_over_60.hbs',
    controller: ageOver60Controller.controller
  },
  'ebola': {
    robotId: 'doctor',
    endpoints: 'population',
    templatePath: 'predictions/views/predictions/ebola.hbs',
    controller: populationController.controller
  },

  // 'heart-disease': {
  //   endpoints: 'heart-disease',
  //   templatePath: 'predictions/views/predictions/heart_disease.hbs',
  //   controller: heartDiseaseController.controller
  // },
  // 'fishing-industry': {
  //   endpoints: 'fishing-industry',
  //   templatePath: 'predictions/views/predictions/fishing_industry.hbs',
  //   controller: fishingIndustryController.controller
  // },
  // 'seeking-work': {
  //   endpoints: 'seeking-work',
  //   templatePath: 'predictions/views/predictions/seeking_work.hbs',
  //   controller: seekingWorkController.controller
  // },
  // 'works-part-time': {
  //   endpoints: 'works-part-time',
  //   templatePath: 'predictions/views/predictions/works_part_time.hbs',
  //   controller: worksPartTimeController.controller
  // }
};
