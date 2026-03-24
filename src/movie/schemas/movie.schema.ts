import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
    timestamps:true
})

export class Movie {

  @Prop()
  title: string;

  @Prop()
  description: string;
  
  @Prop()
  imageUrl: string;
  
  @Prop()
  createdAt: string;

}

export const MovieSchema = SchemaFactory.createForClass(Movie);