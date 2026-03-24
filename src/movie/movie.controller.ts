import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { MovieService } from './movie.service';
import { Movie } from './schemas/movie.schema';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { CreateMovieDto } from './dto/create-movie.dto';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {
  }

  @Get()
  async findAll(): Promise<Movie[]> {
    return await this.movieService.findAll();
  }


  @Post()
  async create(@Body() movie: CreateMovieDto): Promise<Movie> {
    return await this.movieService.create(movie);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Movie> {
    return await this.movieService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() movie: UpdateMovieDto): Promise<Movie> {
    return await this.movieService.update(id, movie);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Movie> {
    return await this.movieService.remove(id);
  }



}