//Storage Controller
//Item controller
const ItemCtrl = (function(){
console.log("Item Controller");
//Item Constructor
const Item = function(id,name,calories){
    this.id = id;
    this.name = name;
    this.calories = calories;
}
//Creating a Data Structure/State of the application
const data ={
    items:[
        {
            id:0,
            name:"Steak Dinner",
            calories:1200
        },
        {
            id:1,
            name:"Cookiee",
            calories:400
        }
    ],
    currentItem:null,
    totalCalories:0
}

return{
    getItems:function(){
return data.items;
    },
    logData:function(){
        return data;
    }

}
})();


//ui contoller
const UiCtrl = (function(){
    console.log("Ui Controller");

    const UISelectors
     //Public methods 
     return{

        populateList: function(items){
            // console.log("items: ",items);
            let html = '';
            items.forEach(item => {
           html +=`
           <li class="collection-item" id="item-${item.id}">
           <strong>${item.name}: <em>${item.calories}</em>
             <a href="#" class="secondary-content"
               ><i class="edit-item fa fa-pencil">
                   </i></a>
           </strong>
         </li>
           `   
            });
            // console.log(html);
            //Insert list item
            document.getElementById("item-list").innerHTML = 
            html;
        }
     }
    })();
//app controller
const AppCtrl = (function(ItemCtrl,UiCtrl){
    // console.log("App Controller");
    // console.log(ItemCtrl.logData());
    //Public methods 
    return {
        init:function(){
            console.log("Initializing app...");
            //fetch items from data structure
            const items = ItemCtrl.getItems();
            console.log(items);
            //Populate List
            UiCtrl.populateList(items);
        }
    }
    })(ItemCtrl,UiCtrl);

    //Initializing app

    AppCtrl.init();