  export class TodoDto {
    id: number;
    text: string;
    done: boolean;
    createdAt: Date;
    updatedAt: Date;
    dueDate?: Date;
  
  

  constructor(id: number, text: string, done: boolean) {
    this.id = id;
    this.text = text;
    this.done = done;
    this.createdAt = new Date();
    this.updatedAt = new Date();

  }

  updateText(newText: string): void {  
    this.text = newText;
    this.updatedAt = new Date();
  }

  create(id: number, text: string): TodoDto {
    return new TodoDto(id, text, false);
  }}