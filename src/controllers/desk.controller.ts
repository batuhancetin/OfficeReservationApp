import { Request, Response } from "express";
import { createDesk, deleteDesk, findAllDesks, findAndUpdateDesk, findDesk } from "../services/desk.service";
import logger from "../utils/logger";

export async function createDeskHandler(req: Request, res: Response) {
    try {
        
        const desk = await createDesk(req.body);
        return res.send(desk);
    } catch (e: any) {
        logger.error(e);
        return res.status(409).send(e.message);
    }
}

export async function getAllDesksHandler(req: Request, res: Response) {
    try {
        const desks = await findAllDesks();
        return res.send(desks);
    } catch (e: any) {
        logger.error(e);
        return res.status(409).send(e.message);
    }
}

export async function getDeskHandler(req: Request, res: Response) {
    try {
        const _id = req.params.id;    
        const desk = await findDesk({ _id });    
        return res.send(desk);
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
        return res.send(updatedDesk);
    } catch (e: any) {
        logger.error(e);
        return res.status(409).send(e.message);
    }
  }
  
  export async function deleteDeskHandler(req: Request, res: Response) {
    try {
        const _id = req.params.id;
        const deleted = await deleteDesk({ _id });
        return res.send(deleted);
    } catch (e: any) {
        logger.error(e);
        return res.status(409).send(e.message);
    }
  }