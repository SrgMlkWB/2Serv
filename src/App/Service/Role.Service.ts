import { RoleDTO } from "../Model/Role.Model";
import RoleRepository from "../DAO/Role.Repository";

class RoleService {
  private readonly ROLES = ["Guest", "Player", "Admin"];

  roleRepository: RoleRepository;

  constructor(roleRepository: RoleRepository) {
    this.roleRepository = roleRepository;
    setTimeout(() => {
      this.areRolesSaved().then((bool) => {
        if (!bool) {
          this.roleRepository.setRoles(this.ROLES);
        }
      });
    }, 1000);
  }

  private async areRolesSaved(): Promise<boolean> {
    const existingRoles = await this.roleRepository.findAll();
    const targetRoles = new Set<string>(this.ROLES);

    for (const obj of existingRoles) {
      if (!targetRoles.has(obj.role)) {
        break;
      }
      targetRoles.delete(obj.role);
    }
    return targetRoles.size === 0;
  }

  async findAll(): Promise<Array<RoleDTO>> {
    return await this.roleRepository.findAll();
  }
}

export default RoleService;
