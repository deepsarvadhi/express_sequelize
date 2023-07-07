import express from 'express';
import EmployeeController from '../controller/Employee.controller';
import routerPath from '../constant/RouterPath';
const router = express.Router();

router.post(`${routerPath.Employeeinsert}`,EmployeeController.Employeeinsert);
router.put(`${routerPath.Employeeupdate}`, EmployeeController.Employeeupdate);
router.delete(`${routerPath.Employeedelete}`,EmployeeController.Employeedelete);
router.post(`${routerPath.Employeebulk}`,EmployeeController.Employeebulk);

export default router;