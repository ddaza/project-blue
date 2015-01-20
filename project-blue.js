if (Meteor.isClient) {

  Template.searchbox.content = function () {
      return "404";
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
