import express from 'express';
import DesignationController from '../controller/Designation.controller';
import routerPath from '../constant/RouterPath';
const router = express.Router();

router.post(routerPath.DesignationInsert,DesignationController.DesignationInsert);
router.put(routerPath.Designationupdate,DesignationController.Designationupdate);
router.delete(routerPath.Designationdelete,DesignationController.Designationdelete);
router.post(routerPath.Designationbulk,DesignationController.Designationbulk);

export default router;