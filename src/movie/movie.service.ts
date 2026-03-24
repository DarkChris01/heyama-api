import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Movie } from './schemas/movie.schema';
import * as mongoose from 'mongoose'
import { CreateMovieDto } from './dto/create-movie.dto';
import { NotFoundError } from 'rxjs';
import { UpdateMovieDto } from './dto/update-movie.dto';


@Injectable()
export class MovieService {

  constructor(
    @InjectModel(Movie.name)
    private movieModel: mongoose.Model<Movie>,
  ) { }


  async findAll(): Promise<Movie[]> {
    return await this.movieModel.find();
  }

  async create(movie: CreateMovieDto): Promise<Movie> {
    const createdMovie = await this.movieModel.create(movie);
    return createdMovie;
  }

  async findOne(id: string): Promise<Movie> {
    const movie = await this.movieModel.findById(id);

    if (!movie) {
      throw new NotFoundException(`Movie with id ${id} not found`);
    }
    return movie;
  }

  async update(id: string, movie: UpdateMovieDto) {
    const updatedMovie = await this.movieModel.findByIdAndUpdate(id, movie,
      {
        new: true,
        runValidators: true
      });

    if (!updatedMovie) {
      throw new NotFoundException(`Movie with id ${id} not found`);
    }
    return updatedMovie;

  }

  async remove(id: string): Promise<Movie> {
    const removedMovie = await this.movieModel.findByIdAndDelete(id);

    if (!removedMovie) {
      throw new NotFoundException(`Movie with id ${id} not found`);
    }

    return removedMovie;
  }
}
