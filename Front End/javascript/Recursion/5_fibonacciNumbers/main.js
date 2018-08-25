// Get first n fibonacci numbers

function fibonacci(first,second,count){
    if(count===0){
        return;
    }
    next=first+second;
    console.log(next);
    fibonacci(second,next,count-1);
}

fibonacci(0,1,8);

// w3resource solution

var fibonacci_series = function (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

 console.log(fibonacci_series(8));