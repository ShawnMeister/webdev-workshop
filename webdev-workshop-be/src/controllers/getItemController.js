const getItemController = async (req, res, next) => {
  const { x, y } = req.body;
  
  // wait a few seconds to mimic async behavior
  setTimeout(() => {
    res.json({
      result: x * y,
      timestamp,
    });
  }, 500);
};

module.exports = getItemController;