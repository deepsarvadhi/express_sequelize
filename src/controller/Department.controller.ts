import HTTP from '../utils/responseCode.constant';
import Department from '../model/Department.model';

const DepartmentInsert = async (req, res, next) => {
    const { Name, Type } = req.body;

    await Department.bulkCreate([{ Name:Name , Type:Type }])
        .then((user) => { return res.status(HTTP.SUCCESS).send({ status: true, code: HTTP.SUCCESS, message: "Data insert successfully" })})
        .catch((err) => { next(err) });    
            
};

const Departmenupdate  = async (req, res, next) => {
    const { id } = req.params;
    const { Name, Type } = req.body;
    const data = await Department.findOne({ where: { id } });

    if(data){
        await Department.update({ Name, Type }, { where : { id } })
        .then((user) => {return res.status(HTTP.SUCCESS).send({ status: true, code: HTTP.SUCCESS, message: "Data update successfully" })})
        .catch((err) => { next(err) });
    } else {
        return res.status(400).json({ message: 'data not exits!' });
    }
};

const Departmendelete = async (req, res, next) => {
    const { id } = req.params;
    const data = await Department.findOne({ where: { id } });

    if (data) {
        await Department.destroy( {where : {id}} )
        .then((user) => {return res.status(HTTP.SUCCESS).send({ status: true, code: HTTP.SUCCESS, message: "Data successfully deleted" })})
        .catch((err) => { next(err) });
    } else{
        return res.status(400).json({ message: 'data not exits!' });
    }
};

const Departmentbulk = async (req, res, next) => {
    await Department.bulkCreate(req.body )
        .then((user) => { return res.send({ status: true, code: HTTP.SUCCESS, message: "Data insert successfully" }) })
        .catch((err) => { next(err) })
}

export default { 
    DepartmentInsert,
    Departmenupdate,
    Departmendelete,
    Departmentbulk
};