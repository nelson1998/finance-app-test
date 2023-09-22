import express from "express";
import Transaction from "../models/Transaction.js";

const router = express.Router();

router.get("/transactions", async (req, res) => {
    try {
        const transactions = await Transaction.find()
        .limit(50)
        .sort({ createdOn: -1 });
        res.status(200).json(transactions) //success result via 200 (sendKPIs object grabbed from database and send to frontend)

    } catch(error) {
        res.status(404).json({ message: error.message});
    }
});

export default router;