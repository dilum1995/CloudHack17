angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [
    {
       product_id:"2",
       product_name:"HUF & DEE LADIES T-SHIRT",
       product_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
       product_price:"100",
       product_image:"http:\/\/localhost\/cloudHack\/assets\/products\/1.png",
       product_type:"dress",
       product_gender_cat:"female"
    },
    {
       product_id:"3",
       product_name:"PINK ELEPHANT LONG DRESS",
       product_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
       product_price:"500",
       product_image:"http:\/\/localhost\/cloudHack\/assets\/products\/2.png",
       product_type:"dress",
       product_gender_cat:"female"
    },
    {
       product_id:"4",
       product_name:"HUF & DEE LADIES JEANS",
       product_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
       product_price:"1000",
       product_image:"http:\/\/localhost\/cloudHack\/assets\/products\/3.png",
       product_type:"bottom",
       product_gender_cat:"female"
    },
    {
       product_id:"13",
       product_name:"HUF & DEE LADIES DENIM SHORT",
       product_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
       product_price:"500",
       product_image:"http:\/\/localhost\/cloudHack\/assets\/products\/4.png",
       product_type:"shorts",
       product_gender_cat:"female"
    },
    {
       product_id:"14",
       product_name:"LONG DRESS",
       product_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
       product_price:"600",
       product_image:"http:\/\/localhost\/cloudHack\/assets\/products\/5.jpg",
       product_type:"dress",
       product_gender_cat:"female"
    }
 ];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      //alert(chatId);
      for (var i = 0; i < chats.length; i++) {
        if (parseInt(chats[i].product_id) === parseInt(chatId)) {
          //alert(chats[i])
          return chats[i];
        }
        //alert(i);
      }
      return null;
    }
  };
});
