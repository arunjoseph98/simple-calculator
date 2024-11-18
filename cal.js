// for input
function displayVal(val)
{
    result.value += val
}

// to clear display
function displayClear()
{
    result.value = ''
}

// for backspace
function backsp(){
     result.value = result.value.slice(0,-1)
}

// for result
function cal()
{
    try
    {result.value = eval(result.value)}
    catch(err)
    {result.value = "Error"}

}