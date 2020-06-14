var var1,var2,var3
var legal_1,legal_2,legal_3,legal_4,legal_5
var illegal_1,illegal_2,illegal_3,illegal_4,illegal_5

var dollar="$",hephen="_",sensitive="sensitive",number="numbers",keywords="keywords",letter="letters"

document.write("<h1>Rules For Naming JS variables</h1><br><br>")
document.write("Variable names can only contain "+number+dollar+" and "+hephen+"For example $my_1stVariable")
document.write("<br> Variables must begin with a " +letter+ "or " +hephen+". For example $name, _name or name")
document.write("<br>Variable names are case "+sensitive)
document.write("<br> Variable names should not be JS "+keywords)