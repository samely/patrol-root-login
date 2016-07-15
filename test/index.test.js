var tape=require('tape');
var rule = require('../index.js');

tape('Detecting root login correctly',function(t){
var rootUserLoginEvent=require('./fixtures/rootUserLoginEvent.json');
  rule.fn(rootUserLoginEvent,function(err,message){
  	t.equal(message.subject,'Root user logged in to the console','Detecting root user login');
  	t.end();
  });
});

tape('Not root user login detected',function(t){
var notrootUserLoginEvent=require('./fixtures/notRootUserLoginEvent.json');
  rule.fn(notrootUserLoginEvent,function(err,message){
  	t.equal(message,'Not user root login');
  	t.end();
  });
});