const router = require('express').Router();

let amazonDataModel = require('../models/amazonDataModel');

// add method
router.route('/').get((req, res) => {
    amazonDataModel.find()
        .then(amazon => res.json(amazon))
        .catch(err => res.status(400).json('Error' + err));
});

// Add method
router.route('/add').post((req, res) => {
    let dataList = req.body.data.categories;
    console.log('dataa ')
    console.log(dataList.text)
    //console.log(req.body.data.categories)
    dataList.map((res) => {
        const text = res.text;
        const textLink = res.textLink;
        const amazonData = new amazonDataModel({
            text, textLink
        });
        // check duplicate data before saving
        amazonDataModel.findOne({ text: amazonData.text }, function (err, example) {
            if (err) {
                console.log(err)
            }
            if (example) {
                console.log(`This ${amazonData.text} has already saved`);
            }
            // else {
            //     amazonData.save()
            //         .then(() => res.json('AmazonData Added'))
            //         .catch(err => res.status(400).json('Error : ' + err));
            // }
        })

    });



    //  console.log(amazonData)
    // amazonData.save()
    //           .then(()=>res.json('AmazonData Ad'))
    //           .catch(err=>res.status(400).json('Error : ' + err));
})

module.exports = router;