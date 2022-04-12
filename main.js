// 1.Find all New Balance 574 shoes.
db.products.find({ model: "574" }, { brand: "New Balance" });
// 2.Find all New Balance shoes that are either red or blue.
db.products.find({
  brand: "New Balance",
  $or: [{ color: "Red" }, { color: "Blue" }],
});
// 3.Insert 4 more New Balance shoes:
db.products.insertMany([
  { model: "1", brand: "New Balance", color: "Gray" },
  { model: "2", brand: "New Balance", color: "Orange" },
  { model: "3", brand: "New Balance", color: "Aqua" },
  { model: "4", brand: "New Balance", color: "Purple" },
]);

// 4.Update all navy New Balance shoes to Blue:
//Added current date to see if only navy was modified
db.products.updateMany(
  { brand: "New Balance", color: { $eq: "Navy" } },
  { $set: { color: "Blue" }, $currentDate: { lastModified: true } }
);
// 5.Delete all 515 New Balance
db.products.deleteMany({ brand: "New Balance", model: { $eq: "515" } });
