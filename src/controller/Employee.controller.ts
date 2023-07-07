// import { Request, Response, NextFunction } from 'express';
import HTTP from '../utils/responseCode.constant';
import Employee from '../model/Employee.model';

const Employeeinsert = async (req, res, next) => {
    const { firstName, lastName, email, phone } = req.body;
    const Employees = await Employee.findOne({ where: { email: req.body.email } });

    if (!Employees) {
        await Employee.create({ firstName: firstName, lastName: lastName, email: email, phone: phone })
            .then((user) => { return res.send({ status: true, code: HTTP.SUCCESS, message: "Data insert successfully" }) })
            .catch((err) => {
                next(err)
            })
    } else {
        return res.send({ code: HTTP.BAD_REQUEST, message: 'user already exits!' });
    }
};

const Employeeupdate = async (req, res, next) => {
    const { id } = req.params; 1
    const { firstName, lastName, email, phone } = req.body;
    const data = await Employee.findOne({ where: { id } });

    if (data) {
        await Employee.update({ firstName, lastName, email, phone }, { where: { id } })
            .then((user) => { return res.status(HTTP.SUCCESS).send({ status: true, code: HTTP.SUCCESS, message: "Data update successfully" }) })
            .catch((err) => { next(err) });
    } else {
        return res.status(400).json({ message: 'data not exits!' });
    }
};

const Employeedelete = async (req, res, next) => {
    const { id } = req.params;
    const data = await Employee.findOne({ where: { id } });

    if (data) {
        await Employee.destroy({ where: { id } })
            .then((user) => { return res.status(HTTP.SUCCESS).send({ status: true, code: HTTP.SUCCESS, message: "Data successfully deleted" }) })
            .catch((err) => { next(err); });
    } else {
        return res.status(400).json({ message: 'data not exits!' });
    }
};

const Employeebulk = async (req, res, next) => {
    await Employee.bulkCreate(req.body )
        .then((user) => { return res.send({ status: true, code: HTTP.SUCCESS, message: "Data insert successfully" }) })
        .catch((err) => { next(err) })

}

export default {
    Employeeinsert,
    Employeeupdate,
    Employeedelete,
    Employeebulk
};
