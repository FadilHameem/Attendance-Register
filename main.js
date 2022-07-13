Name_Of_The_Student_array = [];

function submit() 
{
    Display_Student_Name_array = [];

    for ( var j = 1 ; j <= 4; j++ )
    {
        var Name_Of_The_Student = document.GetElementById("Name_Of_The_Student_"+j).value;
        console.log(Name_Of_The_Student);
         Name_Of_The_Student_array.push(Name_Of_The_Student);
    }

    console.log(Name_Of_The_Student_array);
    var Length_Of_Name_Of_Student_array = Name_Of_The_Student_array.length;
    console.log(Length_Of_Name_Of_Student_array);

    for ( var k = 0 ; k < Length_Of_Name_Of_Student_array ; k++ )
    {
        Display_Student_Name_array.push("<h4 Name - "+ Name_Of_The_Student_array[k]+ "</h4>");
        console.log(Display_Student_Name_array);
    }

    console.log(Display_Student_Name_array);
    document.GetElementById("Display_Name_With_Commas").innerHTML= Display_Student_Name_array;

    var Remove_Commas = Display_Student_Name_array.join(" ");
    console.log(Remove_Commas);
    document.GetElementById("Display_Name_Without_Commas").innerHTML = Remove_Commas;

    document.GetElementById("submit_button").style.display = "none" ;
    document.GetElementById("sort_button").style.display = "inline_block" ;

}



function sorting()
{
    Name_Of_The_Student_array.sort();
    console.log("Name_Of_The_Student_array");

    var Display_Student_array_sorting = [];

    var Length_Of_Name_Of_Student_array = Name_Of_The_Student_array.length;
    console.log(Length_Of_Name_Of_Student_array);

    for ( var k = 0 ; k < Length_Of_Name_Of_Student_array ; k++);
    {
        Display_Student_array_sorting.push("<h4>Name - "+ Name_Of_The_Student_array[k] + "</h4>");
        console.log(Display_Student_array_sorting);
    }

    var Remove_Commas = Display_Student_array_sorting.join(" ");
    console.log(Remove_Commas);

    document.GetElementById("Display_Name_Without_Commas").innerHTML = Remove_Commas;
}