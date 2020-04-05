var w13 = [{"topping":"Mushrooms","total":65,"male":63,"female":68},
{"topping":"Onion","total":62,"male":62,"female":63},
{"topping":"Ham","total":61,"male":66,"female":56},
{"topping":"Bacon","total":49,"male":56,"female":43},
{"topping":"Pineapple","total":42,"male":40,"female":44},
{"topping":"Sweetcorn","total":42,"male":38,"female":46},
{"topping":"Beef","total":36,"male":47,"female":26},
{"topping":"Olives","total":33,"male":33,"female":32},
{"topping":"Chillies","total":31,"male":42,"female":22},
{"topping":"Jalapenos","total":30,"male":39,"female":21},
{"topping":"Spinach","total":26,"male":20,"female":32},
{"topping":"Peppers","total":60,"male":63,"female":57},
{"topping":"Chicken","total":56,"male":60,"female":52},
{"topping":"Pepperoni","total":56,"male":66,"female":46},
{"topping":"Tomato","total":51,"male":49,"female":54},
{"topping":"Pork","total":25,"male":34,"female":17},
{"topping":"Tuna","total":22,"male":23,"female":21},
{"topping":"Anchovies","total":18,"male":21,"female":15},
{"topping":"Something else","total":11,"male":12,"female":10}];

//<circle cx="50" cy="50" r="50" fill="red"/>

var svg = d3.select('#vis').append('svg').attr('width',500).attr('height',500);

svg.selectAll('div')
  .data(w13).enter().append('text')
  .attr('x', 20)
  .attr('y',function(d, i) { return (i+1)*20; })
  .text( function(d, i) { return i+1 + ". " + d.topping; });

svg.selectAll('circle.men')
  .data(w13).enter().append('circle')
  .attr('class', 'men')
  .attr('cx', function(d, i) { return 160 + d.male; })
  .attr('cy', function(d, i) { return (i+1)*20-6; })
  .attr('r', 6)
  .text( function(d, i) { return i+1 + ". " + d.topping; });

svg.selectAll('circle.women')
  .data(w13).enter().append('circle')
  .attr('class', 'women')
  .attr('cx', function(d, i) { return 160 + d.female; })
  .attr('cy', function(d, i) { return (i+1)*20-6; })
  .attr('r', 6)
  .text( function(d, i) { return i+1 + ". " + d.topping; });
