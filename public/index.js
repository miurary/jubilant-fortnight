function titleUpdate(event){
  var input, result, text, i, title;
  console.log('tjetjo');
  input = document.getElementById('filter-title');
  if(input != ''){
    result = document.getElementsByClassName('post-result');
    text = input.value.toLowerCase();
    for(i = 0; i < result.length; i++){
      // title = result[i].getElementsByTagName('a')[0];
      title = result[i].getElementsByClassName('result-title')[0];
      console.log('title:', title);
      if(title.innerHTML.toLowerCase().indexOf(text) == -1){
        console.log("fajei: ", title.innerHTML.toLowerCase().indexOf(text));
        result[i].remove();
        i--;
      }
    }
  }
}
document.getElementById('filter-search-button').addEventListener('click',titleUpdate);

function dateUpdate(event){
  var date, day, month, year, i, input1, input2, input3;

  if(document.getElementById('filter-day').value != ''){
    input1 = document.getElementById('filter-day').value;
    input1 = parseInt(input1);
  }else{input1 = 0;}
  if(document.getElementById('filter-month').value != ''){
    input2 = document.getElementById('filter-month').value;
    input2 = parseInt(input2);
  }else{input2 = 0;}
  if(document.getElementById('filter-year').value != ''){
    input3 = document.getElementById('filter-year').value;
    input3 = parseInt(input3);
  }else{input3 = 0;}
console.log(input1, input2, input3);
  if(input1 != '' && input2 != '' && input3 != ''){
    result = document.getElementsByClassName('post-result');
    console.log(result.length);
    for(i = 0; i < result.length; i++){
  // price = item[i].getAttribute.('data-price');
      day = result[i].getAttribute('event-day');
      day = parseInt(day);
      month = result[i].getAttribute('event-month');
      month = parseInt(month);
      year = result[i].getAttribute('event-year');
      year = parseInt(year);
      if(day != input1 || month != input2 || year != input3){
        result[i].remove();
        i--;
      }
    }
  }
}
document.getElementById('filter-search-button').addEventListener('click',dateUpdate);

function seriousUpdate(event){
  var input, result, i, serious;
  input = document.getElementById('filter-serious').value.toLowerCase();
  console.log(input);
  if(input != ''){
    result = document.getElementsByClassName('post-result');
    console.log("fjaoife", result.length);
    for(i = 0; i < result.length; i++){
      console.log("fjaoe");
      serious = result[i].getAttribute('event-seriousness').toLowerCase();
      console.log(serious);
      if(input != serious){
        result[i].remove();
        i--
      }
    }
  }
}
document.getElementById('filter-search-button').addEventListener('click', seriousUpdate);
