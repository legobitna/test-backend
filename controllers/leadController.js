const Lead = require("../models/Lead");

const leadController = {};

leadController.getData = async (req, res, next) => {
  try {
    const leads = await Lead.find();
    res.status(200).json({ status: "success", data: leads });
  } catch (err) {
    res.status(400).json({ status: "fail", error: err.message });
  }
};

leadController.deleteData = async (req, res, next) => {
  try {
    const { id } = req.params;
    const lead = await Lead.findByIdAndDelete(id);
    res.status(200).json({ status: "success", data: lead });
  } catch (err) {
    res.status(400).json({ status: "fail", error: err.message });
  }
};
leadController.createData = async (req, res, next) => {
  try {
    const {
      first_name,
      last_name,
      email,
      mobile,
      location_type,
      location_string,
    } = req.body;
    const lead = new Lead({
      first_name,
      last_name,
      email,
      mobile,
      location_type,
      location_string,
    });
    await lead.save();
    res.status(200).json({ status: "success", data: lead });
  } catch (err) {
    res.status(400).json({ status: "fail", error: err.message });
  }
};

leadController.updateMark = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { communication } = req.body;

    const lead = await Lead.findByIdAndUpdate(
      { _id: id },
      { communication },
      { new: true }
    );
    res.status(200).json({ status: "success", data: lead });
  } catch (err) {
    res.status(400).json({ status: "fail", error: err.message });
  }
};
module.exports = leadController;
