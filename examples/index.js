var Rainforest = require('../lib/Rainforest');
var _ = require('lodash');
Rainforest.apiKey = '<insert-api-key>';

// Get the descriptions of all the runs (first page)
Rainforest.Run.all().then(function(runs){
  console.log('The last 10 Runs');
  console.log(runs.data.map(function(run){
    return run.description
  }));
});

// Get the descriptions of all the runs (first page)
Rainforest.Test.all().then(function(tests){
  console.log('The first 10 Tests');
  console.log(tests.data.map(function(test){
    return test.title + ' - result: ' + test.result
  }));
});


// Create a test, update it then delete it
console.log('creating a test');
Rainforest.Test.create({
  start_uri: '/boom',
  title: 'Test Test Test',
  elements: [
    {
      type: 'step',
      element: {
        action: 'Go to the first page',
        response: 'Do you see anything weird?',
      }
    }
  ]
}).then(function(test){
  console.log('test created : ', test);
  console.log('updating test');
  return Rainforest.Test.update(test.id, {
    title: 'Boom Boom Boom'
  });
}).then(function(test){
  console.log('test successfully updated - Title changed to: ' + test.title)
  console.log('get a tests history');
  return test.history().then(function(runs){
    console.log(runs.data.map(function(run){
      return run.description;
    }));
    console.log('delete the test');
    return test.delete().then(function(){
      console.log('test deleted');
    });
  });
});
