function calculations() {
    resetInfo();
    showOrder();
    console.log(customerInfo);
}
function resetInfo() {
    document.getElementById("order").innerHTML = "";
}
function showOrder() {
    addCustomerToList();
}
customerInfo = [];
function addCustomerToList() {
    var totalAmount = 0.0;
    var drink = {};
    var sandwich = {};
    var pizza = {};
    var customer = {firstname, lastname, address, phone, drink,sandwich,pizza};
    customer.firstname = document.getElementById("firstname").value;
    customer.lastname = document.getElementById("lastname").value;
    customer.address = document.getElementById("address").value;
    customer.phone = document.getElementById("phone").value;

    customer.pizza = {
        "amount": [],
        "name": [],
        "size": []
    };
    if (document.querySelector('input[name="pizzaNameCheesy"]:checked')) {
                customer.pizza.name[0] = document.querySelector('input[name="pizzaNameCheesy"]:checked').value;
                customer.pizza.size[0] =document.querySelector('input[name="pizzaSizeSuperCheese"]:checked').value ;
                customer.pizza.amount[0] = document.getElementById("quantitySuperCheesy").value;

                if(document.querySelector('input[name=SuperCheeseCheese]:checked'))
                {
                    totalAmount+=1.75;
                }
                if(document.querySelector('input[name =SuperCheesePepperoni]:checked'))
                {
                    totalAmount+=1.75;
                }
                if(document.querySelector('input[name =SuperCheeseMushrooms]:checked'))
                {
                    totalAmount+=1.75;
                }
                if(document.querySelector('input[name =SuperCheeseBacon]:checked'))
                {
                    totalAmount+=1.75;
                }
                if(document.querySelector('input[name =SuperCheeseOlives]:checked'))
                {
                    totalAmount+=1.75;
                }

            totalAmount += customer.pizza.size[0] * customer.pizza.amount[0];
            }
    if (document.querySelector('input[name="pizzaNameMeaty"]:checked')) {
        customer.pizza.name[1] = document.querySelector('input[name="pizzaNameMeaty"]:checked').value;
                customer.pizza.size[1] =document.querySelector('input[name="pizzaSizeExtraMeaty"]:checked').value ;
                customer.pizza.amount[1] = document.getElementById("quantityExtraMeaty").value;
                if(document.querySelector('input[name=ExtraMeatyCheese]:checked'))
                {
                    totalAmount+=1.75;
                }
                if(document.querySelector('input[name =ExtraMeatyPepperoni]:checked'))
                {
                    totalAmount+=1.75;
                }
                if(document.querySelector('input[name =ExtraMeatyMushrooms]:checked'))
                {
                    totalAmount+=1.75;
                }
                if(document.querySelector('input[name =ExtraMeatyBacon]:checked'))
                {
                    totalAmount+=1.75;
                }
                if(document.querySelector('input[name =ExtraMeatyOlives]:checked'))
                {
                    totalAmount+=1.75;
                }
                totalAmount += customer.pizza.size[1] * customer.pizza.amount[1];
            }
                 if (document.querySelector('input[name="pizzaNameVeggy"]:checked')) {
                 customer.pizza.name[2] = document.querySelector('input[name="pizzaNameVeggy"]:checked').value;
                customer.pizza.size[2] =document.querySelector('input[name="pizzaSizeReallyVeggy"]:checked').value ;
                customer.pizza.amount[2] = document.getElementById("quantityReallyVeggy").value;
                if(document.querySelector('input[name=ReallyVeggyCheese]:checked'))
                {
                    totalAmount+=1.75;
                }
                if(document.querySelector('input[name =ReallyVeggyPepperoni]:checked'))
                {
                    totalAmount+=1.75;
                }
                if(document.querySelector('input[name =ReallyVeggyMushrooms]:checked'))
                {
                    totalAmount+=1.75;
                }
                if(document.querySelector('input[name =ReallyVeggyBacon]:checked'))
                {
                    totalAmount+=1.75;
                }
                if(document.querySelector('input[name =ReallyVeggyOlives]:checked'))
                {
                    totalAmount+=1.75;
                }
                totalAmount += customer.pizza.size[2] * customer.pizza.amount[2];
            }
    customer.sandwich = {
        "name": [] ,
        "size": [],
        "amount": []
    };

        if (document.querySelector('input[name="sandwichVeg"]:checked')) {
            customer.sandwich.name[0] = document.querySelector('input[name="sandwichVeg"]:checked').value;
                customer.sandwich.size[0] = 7.50;
                customer.sandwich.amount[0] = document.getElementById("quantityVeg").value;
                totalAmount += customer.sandwich.size[0] * customer.sandwich.amount[0];
            }
            if (document.querySelector('input[name="sandwichBeef"]:checked')) {
               customer.sandwich.name[1] = document.querySelector('input[name="sandwichBeef"]:checked').value;
                customer.sandwich.size[1] = 8.50;
                customer.sandwich.amount[1] = document.getElementById("quantityBeef").value;
                totalAmount += customer.sandwich.size[1] * customer.sandwich.amount[1];
            }
            if (document.querySelector('input[name="sandwichMix"]:checked')) {
                  customer.sandwich.name[2] = document.querySelector('input[name="sandwichMix"]:checked').value;
                customer.sandwich.size[2] = 9.50;
                customer.sandwich.amount[2] = document.getElementById("quantityMix").value;
                totalAmount += customer.sandwich.size[2] * customer.sandwich.amount[2];

            }
             if (document.querySelector('input[name="sandwichPork"]:checked')) {
                 customer.sandwich.name[3] = document.querySelector('input[name="sandwichPork"]:checked').value;
                customer.sandwich.size[3] = 9.50;
                customer.sandwich.amount[3] = document.getElementById("quantityPork").value;
                totalAmount += customer.sandwich.size[3] * customer.sandwich.amount[3];
            }


            customer.drink = {
                "name": [],
                "size": [],
                "amount": []
            };
                    if (document.querySelector('input[name="drinkNameCola"]:checked')) {
                        customer.drink.name[0] = document.querySelector('input[name="drinkNameCola"]:checked').value;
                        customer.drink.size[0] = document.querySelector('input[name = "drinkSizeCola"]:checked').value;
                        customer.drink.amount[0] = document.getElementById("quantityCola").value;
                        totalAmount += customer.drink.size[0] * customer.drink.amount[0];
                    }
                    if (document.querySelector('input[name="drinkNameLemon"]:checked')) {
                       customer.drink.name[1] = document.querySelector('input[name="drinkNameLemon"]:checked').value;
                        customer.drink.size[1] = document.querySelector('input[name = "drinkSizeLemon"]:checked').value;
                        customer.drink.amount[1] = document.getElementById("quantityLemon").value;
                        totalAmount += customer.drink.size[1] * customer.drink.amount[1];
                    }
                    if (document.querySelector('input[name="drinkNameOrange"]:checked')) {
                        customer.drink.name[2] = document.querySelector('input[name="drinkNameOrange"]:checked').value;
                        customer.drink.size[2] = document.querySelector('input[name = "drinkSizeOrange"]:checked').value;
                        customer.drink.amount[2] = document.getElementById("quantityOrange").value;
                        totalAmount += customer.drink.size[2] * customer.drink.amount[2];

                    }
                    if (document.querySelector('input[name="drinkNameRoot"]:checked')) {
                        customer.drink.name[3] = document.querySelector('input[name="drinkNameRoot"]:checked').value;
                        customer.drink.size[3] = document.querySelector('input[name = "drinkSizeRootBeer"]:checked').value;
                        customer.drink.amount[3] = document.getElementById("quantityRootBeer").value;
                        totalAmount += customer.drink.size[3] * customer.drink.amount[3];
                    }

            console.log(totalAmount);
            console.log(customer);
            var message = "";
            message+="<br>"+ customer.lastname + " " +
                customer.firstname + "<br>" +
                customer.phone
                + "<br>" + customer.address + "<br><br>" +
                "Total Amount: $" + totalAmount + "<br><br>" ;
            for (var k=0; k<3; k++){
                if (customer.pizza.name[k] !=null){
                    message +="Pizza: <br>"+customer.pizza.name[k]+" Amount: "+
                        customer.pizza.amount[k]+ " $"+
                        customer.pizza.size[k]*customer.pizza.amount[k] +"<br>";
                }
            }
            for (var j=0; j<5; j++){
                if (customer.sandwich.name[j] !=null){
                    message +="Sandwich: <br>"+customer.sandwich.name[j]+" Amount: "+
                        customer.sandwich.amount[j]+ " $"+
                        customer.sandwich.size[j]*customer.sandwich.amount[j] +"<br>";
                }
            }
            for (var i=0; i<5;i++){
                if (customer.drink.name[i] !=null){
                    message +="Drink: <br>"+customer.drink.name[i]+" Amount: "+
                              customer.drink.amount[i]+ " $"+
                              customer.drink.size[i]*customer.drink.amount[i] +"<br>";
                }
            }

              document.getElementById("order").innerHTML =message;
        }

