import Role, { RoleModel } from '../model/Role';

export default class RoleRepo {
  public static findById(_id: string): Promise<Role | null> {
    return RoleModel.findOne({ _id: _id }).lean<Role>().exec();
  }
}
