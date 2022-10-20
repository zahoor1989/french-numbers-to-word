import express, { Request, Response } from 'express';
import * as ConvertorController from "./convertor.controller";

/**
 * Required External Modules and Interfaces
 */

/**
 * Router Definition
 */
 export const convertorRouter = express.Router();

/**
 * Controller Definitions
 */


// POST convertor
convertorRouter.post("/convertor", async(req: Request, res:Response) => {
    try{
        const { numbArray } = req.body;
        if(numbArray && Array.isArray(numbArray) && numbArray.length > 0){
            const wordedNumbers = await ConvertorController.numberToString(numbArray);
            res.status(200).send(wordedNumbers);
        }else {
            res.status(404).send('Wrong input provided'); 
        }
    }catch(e:any){
        res.status(500).send(e.message);
    }
});
