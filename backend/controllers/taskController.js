const Task = require("../models/taskModule");

const createTask = async (req, res) => {
      try {
            const task = await Task.create(req.body)
            res.status(200).json(task)
      }
      catch (error) {
            res.status(500).json({ msg: error.message })
      }
};
const getTasks = async (req, res) => {
      try {
            const task = await Task.find(req.body)
            res.status(200).json(task)
      }
      catch (error) {
            res.status(500).json({ msg: error.message })
      }
};


const getTask = async (req, res) => {
      try {
            const { id } = req.params
            const task = await Task.findById(
                  { _id: id }, req.body, {
                  new: true
            }
            )
            if (!task) {
                  return res.status(404).json(`ntg like that ${id}`)
            }
            res.status(200).json(task);

      }
      catch (error) {
            res.status(500).json({ msg: error.message })

      }

};

const del = async (req, res) => {
      try {
            const { id } = req.params
            const task = await Task.findByIdAndDelete(id)
            if (!task) {
                  return res.status(404).json(`ntg like that ${id}`)
            }
            res.status(200).send("task deleted");

      }
      catch (error) {
            res.status(500).json({ msg: error.message })
      }
};

const update = async (req, res) => {
      try {
            const { id } = req.params
            const task = await Task.findByIdAndUpdate({
                  _id: id
            }, req.body, {
                  new: true,
            });
            if (!task) {
                  return res.status(404).json(`ntg like that ${id}`)
            }
            res.status(200).json(task);

      }
      catch (error) {
            res.status(500).json({ msg: error.message })

      }
};

module.exports = {
      createTask,
      getTasks,
      getTask,
      del,
      update,
}