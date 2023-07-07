import express from 'express';
import DepartmentController from '../controller/Department.controller';
import routerPath from '../constant/RouterPath';
const router = express.Router();

router.post(`${routerPath.DepartmentInsert}`,DepartmentController.DepartmentInsert);
router.put(`${routerPath.Departmentupdate}`,DepartmentController.Departmenupdate);
router.delete(`${routerPath.Departmentdelete}`,DepartmentController.Departmendelete);
router.post(`${routerPath.Departmentbulk}`,DepartmentController.Departmentbulk);


export default router;