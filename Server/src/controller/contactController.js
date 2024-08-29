const addcontact = async (req, res) => {
  res.status(200).json({
    message: "TestAddContactController",
  });
  const { Name, Email, Phone, Address } = req.body;
  console.log("name", Name);
  console.log("Email :", Email);
  console.log("Phone:", Phone);
  console.log("Address:", Address);
};
export { addcontact };
