onmessage = function(event)
{
  let num = event.data;
  let result = 0;
  for(let i=1; i<=num; i++)
  {
     result += i;
  }
  postMessage(result);
};
