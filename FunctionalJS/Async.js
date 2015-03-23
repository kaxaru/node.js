  function loadUsers(userIds, load, done) {
  		var users = [],
  			totalUsers = userIds.length,
  			usersLoaded = 0;

   	  	userIds.forEach(function(id, index){
   	  		load(id, function(user){
   	  			users[index] = user;
   	  			usersLoaded++;

   	  			if(usersLoaded === totalUsers)
   	  			done(users);
   	  		});
   	  		
   	  	})
}

  module.exports = loadUsers
