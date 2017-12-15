import User from './user'
import Database from  '../../../system'
export default class Resets extends Database.Model
{

    get tableName ()
    {
        return 'cerberus_links'
    }

    user ()
    {
      return this.belongsTo(User, 'user')
    }

}
