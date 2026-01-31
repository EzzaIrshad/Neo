import { UserDTO } from "@/data/dtos/user-dto";
import { User } from "@/domain/entities/user";

export class UserMapper {
  static toDomain(dto: UserDTO): User {
    return User.from({
      id: dto.id,
      email: dto.email ?? null,
      full_name: dto.full_name ?? null,
      avatar_url: dto.avatar_url ?? null,
      role: (dto.role ?? "user") as "admin" | "user",
    });
  }
}