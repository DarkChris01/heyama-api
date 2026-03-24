import { IsNotEmpty, IsString } from "class-validator";



export class CreateMovieDto {

   @IsNotEmpty({ message: 'Title is required' })
   @IsString()
   readonly title: string;

   @IsNotEmpty({ message: 'Description is required' })
   @IsString()
   readonly description: string;

   readonly imageUrl: string;
}