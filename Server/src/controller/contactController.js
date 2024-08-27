const addcontact = async (req, res) => {
  const { Name, Email, Phone, Address } = req.body;
  console.log("name", Name);
  console.log("Email :", Email);
  console.log("Phone:", Phone);
  console.log("Address:", Address);
};
export { addcontact };
