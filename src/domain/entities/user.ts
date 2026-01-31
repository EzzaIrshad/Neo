import { UserDTO } from "@/data/dtos/user-dto";
import { DomainUserSchema, DomainUserType } from "@/domain/schemas/user-schema";

export class User {
  private constructor(private props: DomainUserType) {}

  // ✅ Handles both DB row (snake_case) and DTO (camelCase)
  static from(raw: Partial<DomainUserType> & Partial<UserDTO>): User {
    const parsed = DomainUserSchema.parse({
      id: raw.id,
      email: raw.email ?? null,
      full_name: raw.full_name ?? raw.full_name ?? null,
      avatar_url: raw.avatar_url ?? raw.avatar_url ?? null,
      role: raw.role ?? "user",
    });

    return new User(parsed);
  }

  // Getters
  get id() { return this.props.id; }
  get email() { return this.props.email; }
  get full_name() { return this.props.full_name; }
  get avatar_url() { return this.props.avatar_url; }
  get role() { return this.props.role; }

  // ✅ Convert to plain object for client
  toDTO(): UserDTO {
    return {
      id: this.id,
      full_name: this.full_name,
      email: this.email,
      avatar_url: this.avatar_url,
      role: this.role,
    };
  }
}