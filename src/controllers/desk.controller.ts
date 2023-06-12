import { Request, Response } from "express";
import { createDesk, deleteDesk, findAllDesks, findAndUpdateDesk, findDesk } from "../services/desk.service";
import logger from "../utils/logger";
import { findOffice } from "../services/office.service";
import redisClient from "../utils/caching";

export async function createDeskHandler(req: Request, res: Response) {
    try {
        
        const office = await findOffice(req.body.office);
        if (!office) {
            return res.status(404).json({ message: 'Office not found' });        
        }
        const desk = await createDesk(req.body);
        office.desks.push(desk);
        office.save()
        return res.send(desk);
    } catch (e: any) {
        logger.error(e);
        return res.status(409).send(e.message);
    }
}

export async function getAllDesksHandler(req: Request, res: Response) {
    try {
        // const cached = await redisClient.get('desks');
        //if (cached) {
        //    return res.send(JSON.parse(cached));
        //} else {
        const desks = await findAllDesks();
        //    redisClient.setEx('desks', 180, JSON.stringify(desks));
        return res.send(desks);
        //}
    } catch (e: any) {
        logger.error(e);
        return res.status(409).send(e.message);
    }
}

export async function getDeskHandler(req: Request, res: Response) {
    try {
        const id = req.params.id;    
        //const cached = await redisClient.get(`desks:${id}`)
        //if (cached) {
        //    return res.send(JSON.parse(cached))
        //} else {
        const desk = await findDesk(id);
        //    redisClient.setEx(`desks:${id}`, 180, JSON.stringify(desk))   
        return res.send(desk);
        //}
    } catch (e: any) {
        logger.error(e);
        return res.status(409).send(e.message);
    }
  }
  
  export async function updateDeskHandler(req: Request, res: Response) {
    try {
        const _id = req.params.id;
        const body = req.body;
        const updatedDesk = await findAndUpdateDesk({ _id }, body, { new: true });
        //redisClient.setEx(`desks:${_id}`, 180, JSON.stringify(updatedDesk))   
        return res.send(updatedDesk);
    } catch (e: any) {
        logger.error(e);
        return res.status(409).send(e.message);
    }
  }
  
  export async function deleteDeskHandler(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const desk = await findDesk(id);
        if(!desk) {
            return res.status(404).json("Desk is not found.")
        }
        const office = desk.office;
        office?.desks.pop(desk);
        office?.save();
        const deleted = await deleteDesk(id);
        return res.send(deleted);
    } catch (e: any) {
        logger.error(e);
        return res.status(409).send(e.message);
    }
  }