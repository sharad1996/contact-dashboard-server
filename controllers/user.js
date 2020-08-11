const User = require('../models/user');

exports.addUser = async function (req, res, next) {
  const payload = {
    email: req.body.email,
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    address: req.body.address,
    company: req.body.company,
    color: "hsl(" + Math.random() * 360 + ", 100%, 75%)"
  };

  try {
    const response = await User.find({ email: req.body.email })
    if (!response.length) {
      let user = new User({ ...payload });
      user.save();
      res.status(200).json({ msg: 'added user successfully', user });
    }
    else {
      res.status(400).json({ msg: 'email already exists' });
    }
  }
  catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

exports.getUsers = async function (req, res, next) {
  try {
    const response = await User.find();
    if (response) {
      res.status(200).json(response)
    }
    else {
      res.status(400).json({ msg: '' })
    }
  }
  catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

exports.updateUser = async function (req, res, next) {
  const payload = {
    email: req.body.email,
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    address: req.body.address,
    company: req.body.company
  };
  try {
    const user = await User.updateOne(
      { _id: req.params.id },
      { ...payload },
    )
    res.status(200).json({ msg: 'updated' });
  }
  catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

exports.deleteUser = async function (req, res, next) {
  try {
    await User.deleteOne({ _id: req.params.id });
    res.status(200).json({ msg: 'deleted' });
  }
  catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}
