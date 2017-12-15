import Database from  '../../../../system'

export default class Status extends Database.Model
{

    get tableName ()
    {
        return 'cerberus_timeline'
    }


}
