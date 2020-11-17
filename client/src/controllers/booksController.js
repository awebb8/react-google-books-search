const db = require("../models");

router.post("/api/books", (req, res) => {
    db.Book.create(req.body)
    .then((response) => {
        res.json(response);
    })
})

// Get all saved books
router.get("/api/books", (req, res) => {
    db.Book.find({})
      .populate("books")
      .then((found) => {
        res.json(found);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
});

router.delete("/api/books/:id", (req, res) => {
    db.Book.findByIdAndDelete(req.params.id)
      .then((book) => {
        res.json(book);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });