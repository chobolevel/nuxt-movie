export class Movie {
  constructor(
    id,
    posterPath,
    title,
    overview,
    releaseDate,
    adult,
    voteAverage
  ) {
    this.id = id
    this.posterPath = posterPath
    this.title = title
    this.overview = overview
    this.releaseDate = releaseDate
    this.adult = adult
    this.voteAverage = voteAverage
  }
}
