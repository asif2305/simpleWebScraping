

const commonUrl=require('./commonUrl');
const lodash=require('lodash');
const ScrappingAmazon=require('./ScrappingAmazon');
const amazonData=require('./routes/amazonData');
const { default: Axios } = require('axios');

let finalData=[];

ScrappingAmazon.fetMainCategories(commonUrl.proxyList,((data,response)=>{
  if(response){
     // console.log(data);
      console.log('data')

      // save data into database
      
    //  console.log(data)
     // finalData.map(function(){
          
        //  console.log('fd '+finalData)
        Axios.post('http://localhost:5000/amazon/add', {
         data
        })
        .then((response) => {
          console.log(response)

        }, (error) => {
          console.log(error);
        });
    //  })
     
    //  return data;


  }
  else {
      console.log('Data Exported');
  }
}));
