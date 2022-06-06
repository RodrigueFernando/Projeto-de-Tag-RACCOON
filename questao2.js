
var products_list = [
  {
    "id": "35",
    "name": "Miniatura Homem de Ferro",
    "price": "R$ 50.00"
  },
  {
    "id": "30",
    "name": "Miniatura Magneto",
    "price": "R$ 57.00"
  },{
    "id": "25",
    "name": "Miniatura Super Homem",
    "price": "R$ 37.00"
  },{
    "id": "71",
    "name": "Miniatura Bernard",
    "price": "R$ 71.00"
  },{
    "id": "56",
    "name": "Miniatura Batman",
    "price": "R$ 23.00"
  },
  {
    "id": "56",
    "name": "Miniatura Darth Vader",
    "price": "R$ 89.00"

}];
 

  var new_products_list = products_list.map(p =>{
    return {
      id: p.id,
      nome: p.name,
      item_price: p.price
    };
  });
  new_products_list.forEach((element)=>{
    element.item_price = Number(parseInt(element.item_price.replace("R$","")));
  });


console.log(new_products_list)

