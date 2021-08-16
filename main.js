function User(name,age){
    this.Name=name;
    this.Age=age;
    this.writeArtice = function() {
        return console.log("printed  write article")
      };
}
var user1 = new User("enas",25);
user1.writeArtice();


var manager = new User("zaid",25);
manager.__proto__.editArticle=function(){
    return console.log("pinted edit article");
}
manager.writeArtice();
manager.editArticle();


var admin = new User("mo",30);
admin.__proto__=manager;
admin.__proto__.deleteArticle=function(){
        console.log("printed delete");
    }
admin.writeArtice();
admin.editArticle();
admin.deleteArticle();
console.dir(admin);


