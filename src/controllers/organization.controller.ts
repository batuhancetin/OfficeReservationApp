import { Request, Response } from "express";
import logger from "../utils/logger";
import { createOrganization, findOrganization, findAllOrganizations, findAndUpdateOrganization, deleteOrganization } from "../services/organization.service";
import { CreateOrganizationInput, DeleteOrganizationInput, GetOrganizationInput, UpdateOrganizationInput } from "../schemas/organization.schema";


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
      const organizations = await findAllOrganizations();
      return res.send(organizations);
  } catch (e: any) {
      logger.error(e);
      return res.status(409).send(e.message);
  }
}

export async function getOrganizationHandler(req: Request, res: Response) {
  try {
      const _id = req.params.id;    
      const organization = await findOrganization({ _id });    
      return res.send(organization);
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
      return res.send(deleted);
  } catch (e: any) {
      logger.error(e);
      return res.status(409).send(e.message);
  }
}