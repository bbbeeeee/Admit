if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
  console.log(Meteor.users.findOne());
 
  // Accounts.createUser({ 
  //  username: "user",
  //  email: "me@brandontruong.com",
  //  password: "password"
  // });
 if(Meteor.users.findOne() && Meteor.users.find().length === 0){

  }
}
