import User from "../models/User.js";

export const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}