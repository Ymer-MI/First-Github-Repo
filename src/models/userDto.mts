export interface UserDTO {
    username: string;
    password: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
  }


export function createUser(username: string, password: string, email: string): UserDTO | null {
    
    if (!email.includes('@')) {
      console.error("Invalid email format");
      return null;  
    }
    
    
    if (password.length < 6) {
      console.error("Password must be at least 6 characters long");
      return null;  
    }
  
    
    const newUser: UserDTO = {
      username,
      password,  
      email,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  
    return newUser;
  }