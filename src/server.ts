import express from 'express';
import * as dotenv from 'dotenv';
import EmployeeRouter from './router/Employee.Routers';
import DepartmentRouter from './router/Department.Router'
import DesignationRouter from './router/Designation.Router'
import errorHandling from './middleware/errorHandling';

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(EmployeeRouter);
app.use(DepartmentRouter);
app.use(DesignationRouter);
app.use(errorHandling);

app.all('*', (req, res) => {
    return res.status(404).send("URL not found server.js");
});

const port = process.env.PORT || 5001;

app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
});