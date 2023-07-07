import HTTP from '../utils/responseCode.constant';
import Designation from '../model/Designation.model';

const DesignationInsert = async (req, res, next) => {
    const { Name } = req.body;

        await Designation.create({ Name:Name })
        .then((user) => { return res.status(HTTP.SUCCESS).send({ status: true, code: HTTP.SUCCESS, message: "Data insert successfully" })})
        .catch((err) => { next(err) }); 
            
};

const Designationupdate  = async (req, res, next) => {
    const { id } = req.params;
    const { Name } = req.body;
    const data = await Designation.findOne({ where: { id } });

    if(data){
        await Designation.update({ Name }, { where : { id } })
        .then((user) => {return res.status(HTTP.SUCCESS).send({ status: true, code: HTTP.SUCCESS, message: "Data update successfully" })})
        .catch((err) => { next(err) });
    } else {
        return res.status(400).json({ message: 'data not exits!' });
    }
};

const Designationdelete = async (req, res, next) => {
    const { id } = req.params;
    const data = await Designation.findOne({ where: { id } });

    if (data) {
        await Designation.destroy( {where : {id}} )
        .then((user) => {return res.status(HTTP.SUCCESS).send({ status: true, code: HTTP.SUCCESS, message: "Data successfully deleted" })})
        .catch((err) => { next(err) });
    } else{
        return res.status(400).json({ message: 'data not exits!' });
    }
};

const Designationbulk = async (req, res, next) => {
    await Designation.bulkCreate(req.body )
        .then((user) => { return res.send({ status: true, code: HTTP.SUCCESS, message: "Data insert successfully" }) })
        .catch((err) => { next(err) })
}

export default { 
    DesignationInsert,
    Designationupdate,
    Designationdelete,
    Designationbulk
};