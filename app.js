// var num = document.getElementsByClassName('num');

// num.addEventListener('mouseover', function(){
//   num.classList.add('animated');
//   num.classList.add('fadeInDown');
// });


var calculator = {
  
  num: document.getElementsByClassName('num'),
  ops: document.getElementsByClassName('ops'),
  equals: document.getElementById('equals'),
  clear: document.getElementById('clear'),
  
  screen: document.getElementById('screen'),
  
  


};


var view = {

  eventListeners: function(){
    
    var nums = []; //stores all numbers in calculation
    
    var temp = []; //holds current number in calculation
    
    var calculator = document.querySelector('#calculator');

		calculator.addEventListener('click', function(e){
		// console.log(e.target.parentNode.id);
	
		var elementClicked = e.target;
			if(elementClicked.className === 'num'){
        temp.push(elementClicked.innerHTML); //add number clicked to nums array
        console.log(parseInt([temp.join("")])); //join all numbers clicked into single number
			};
      
      if(elementClicked.className === 'ops'){
        
        nums.push(parseInt(temp.join('')));
        temp = []; //clear temp array
        console.log('Nums array:', nums);
        // console.log(elementClicked.innerHTML)
        
        
        if(nums.length > 1){
          if(elementClicked.innerHTML === '+'){
            nums[0] = parseInt(nums[0]) + parseInt(nums[1]);
            nums.pop();
          }
          if(elementClicked.innerHTML === 'x'){
            nums[0] = parseInt(nums[0]) * parseInt(nums[1]);
            nums.pop();
          }
          if(elementClicked.innerHTML === '-'){
            nums[0] = parseInt(nums[0]) - parseInt(nums[1]);
            nums.pop();
          }
        }
      }
      
      if(elementClicked.id === 'clear'){ //clear array
        
        nums = [];
        
        console.log('Nums array:', nums);
      }
      
      if(elementClicked.id === 'equals'){ //return result
        
        
        
      }
		});
  
  
  },

};

view.eventListeners();



        // console.log(nums);
        // console.log([parseInt(nums.join(""))]);


        // debugger;
        
        
        // for(var i = 0; i < nums.length; i++){
        //   var add = nums[i] + nums[i+1];
        //   if(add = 'NaN'){
        //   } else {
        //   console.log('Solution:', add);
        //   }
        // }