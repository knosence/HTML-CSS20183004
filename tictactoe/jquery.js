$(document).ready(function () {

    // const thing = document.getElementById('thing');
    const thing = $('#thing');
    console.log(thing);


    $('button').click(function () {
        console.log(this);
        const whatToDo = $(this).attr('do')
        console.log(whatToDo);
        if(whatToDo === 'hide'){
            $('#thing').hide();
        }else if (whatToDo === 'show'){
            $('#thing').show();
        } else if(whatToDo === 'toggle'){
            $('#thing').toggle();
        }
  }) //same as document.getElementsByTagName('button');
});













