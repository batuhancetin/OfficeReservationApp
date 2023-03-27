import { Request, Response } from "express";
import logger from "../utils/logger";
import { createOrganization, findOrganization, findAllOrganizations, findAndUpdateOrganization, deleteOrganization } from "../services/organization.service";
import { CreateOrganizationInput, DeleteOrganizationInput, GetOrganizationInput, UpdateOrganizationInput } from "../schemas/organization.schema";
import redisClient from "../utils/caching";




export async function createOrganizationHandler(req: Request, res: Response) {
    try {
        const organization = await createOrganization(req.body);
        return res.send(organization);
    } catch (e: any) {
        logger.error(e);
        return res.status(409).send(e.message);
    }
}

export async function getAllOrganizationsHandler(req: Request, res: Response) {
    try {
        const cached = await redisClient.get('organizations');
        if (cached) {
            return res.send(JSON.parse(cached));
        } else {
            const organizations = await findAllOrganizations();
            redisClient.setEx('organizations', 180, JSON.stringify(organizations));
            return res.send(organizations);
        }
    } catch (e: any) {
        logger.error(e);
        return res.status(409).send(e.message);
    }
}

export async function getOrganizationHandler(req: Request, res: Response) {
    try {
        const id = req.params.id;    
        const cached = await redisClient.get(`organizations:${id}`)
        if (cached) {
            return res.send(JSON.parse(cached));
        } else {
            const organization = await findOrganization(id);    
            redisClient.setEx(`organizations:${id}`, 180, JSON.stringify(organization))
            return res.send(organization);
        }
    } catch (e: any) {
        logger.error(e);
        return res.status(409).send(e.message);
    }
}

export async function updateOrganizationHandler(req: Request, res: Response) {
  try {
      const _id = req.params.id;
      const body = req.body;
      const updatedOrganization = await findAndUpdateOrganization({ _id }, body, { new: true });
      redisClient.setEx(`organizations:${_id}`, 180, JSON.stringify(updatedOrganization))
      return res.send(updatedOrganization);
  } catch (e: any) {
      logger.error(e);
      return res.status(409).send(e.message);
  }
}

export async function deleteOrganizationHandler(req: Request, res: Response) {
  try {
      const _id = req.params.id;
      const deleted = await deleteOrganization({ _id });
      return res.status(200).json("Organization is successfully deleted.");
  } catch (e: any) {
      logger.error(e);
      return res.status(409).send(e.message);
  }
}