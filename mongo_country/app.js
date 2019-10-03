let mongoose = require('mongoose');
let countryModel = require('./models/country');
mongoose.connect('mongodb://localhost:27017/countries', {
    useNewUrlParser: true,
    useFindAndModify: false
});
// async function init() {
//     await countryModel.insertMany(
//        [
//            {
//                name: 'USA',
//                people:300000000,
//                weapon : true,
//                square : 9519431,
//                army: 1500000
//            },
//            {
//                name: 'Germany',
//                people:100000000,
//                weapon : true,
//                square : 3419431,
//                army: 500000
//            },
//            {
//                name: 'Uganda',
//                people:2000000,
//                weapon : false,
//                square : 4310000,
//                army: 30000
//            },
//            {
//                name: 'Gvinea',
//                people:7000000,
//                weapon : false,
//                square : 7310000,
//                army: 50000
//            },
//            {
//                name: 'Georgia',
//                people:15000000,
//                weapon : false,
//                square : 1310000,
//                army: 130000
//            },
//            {
//                name: 'Korea',
//                people:75000000,
//                weapon : true,
//                square : 2310000,
//                army: 530000
//            },
//            {
//                name: 'Mexico',
//                people:105000000,
//                weapon : true,
//                square : 4310000,
//                army: 730000
//            },
//            {
//                name: 'Sudan',
//                people:5000000,
//                weapon : false,
//                square : 200000,
//                army: 20000
//            },
//        ]
//    )
   
   
//    }
// 1)усіх в кого є ядкрна зброя
// async function init() {
//     let all = await countryModel.find({'people': true})

//         console.log(all);

//     };
//2)усіх в кого населення більше 5 млн
// async function init() {
//     let all = await countryModel.find({'people': {$gt:5000000} })

//         console.log(all);

//     };

// 3) 5 найбільших країн по площі
// async function init() {
//     let all = await countryModel.find().sort({'square':-1}).limit(5)

//         console.log(all);

//     };
//4) 5 найменших країн по населенню
// async function init() {
//     let all = await countryModel.find().sort({'people':1}).limit(5)

//         console.log(all);

//     };
// 5) де є ядерна зброя чи армія більше 100000
// async function init() {
//     let all = await countryModel.find({$or : [
//         {'weapon':true},
//         {'army':{$gt:100000}}
//     ]})

//         console.log(all);

//     };

// 6) де є ядерна зброя і армія більше 100000
// async function init() {
// let all = await countryModel.find(
//     {'weapon':true,
//     'army':{$gt:100000}}
// )  
//     console.log(all);
// };
// 7) видалити найменшу країну
// async function init() {
//     let all = await countryModel.find().sort({'square':1}).limit(1)
//     await countryModel.deleteOne({'name':'Sudan'})
//     console.log(all);
// };
// 8) Порахувати к-сть країн з ядерною зброєю і без неї
// async function init() {
//     let all = await countryModel.aggregate([
//         {$match: {$or:[{weapon:true},{weapon:false}]}},
//         {$group:{_id:'$weapon',
//         count:{$sum:1}}
//         }
//     ])
//     console.log(all);

// };
//9) Порахувати населення всіх країн в яких є ядерна зброя
//  async function init() {
//         let all = await countryModel.aggregate([
//             {$match: {weapon:true}},
//             {$group:{_id:'$weapon',
//             count:{$sum:'$people'}}
//             }
//         ])
//         console.log(all);

//     };
// 10) Встановити всім країнам армію 0 чоловік і відібрати ядерну зброю
// async function init() {
//     let all = await countryModel.updateMany(
//        {$or :[ {'weapon': false},
//         {'weapon': true}]
//     }, {
//         'weapon': false,
//         'army': 0
//     })
//     console.log(all);

// };

init().then()