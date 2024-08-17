// eslint-disable-next-line react/prop-types
export default function Validate(Data) {
  let errors = {};
  if (Data.name === "") {
    errors.name = "Name Should Not Be Empty";
  } else if (Data.name.length < 3 || Data.name.length > 30) {
    errors.name = "Name Should Be between  3 to 30 Character";
  } else {
    errors.name = "";
  }
  if (Data.email === "") {
    errors.email = "Email Should Not Be Empty";
  } else if (Data.name.length < 3 || Data.name.length > 30) {
    errors.email = "Please Enter An Valid Email";
  } else {
    errors.email = "";
  }
  if (Data.password === "") {
    errors.password = "Password  Should Not Be Empty";
  } else if (Data.name.length < 3 || Data.name.length > 30) {
    errors.password = "Please  enter an Strong Password";
  } else {
    errors.password = "";
  }
  return errors;
}
